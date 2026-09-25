import { cos, abs, PI2, normalize } from './util.js'
// The first Slepian sequence, as the top eigenvector of the tridiagonal matrix that commutes with the sinc kernel
// (Slepian 1978): its eigenvalues stand apart where the kernel's crowd near 1, so bisection on the Sturm sequence
// finds the top one and inverse iteration its vector. As SciPy's dpss.
export default function dpss (i, N, W) {
	if (W == null) W = 0.1
	if (N === 1) return 1
	let c = dpss
	if (c._N !== N || c._W !== W) {
		// Diagonal d, and e[n] coupling n - 1 with n
		let d = new Float64Array(N), e = new Float64Array(N), q = cos(PI2 * W)
		for (let n = 0; n < N; n++) { d[n] = ((N - 1 - 2 * n) / 2) ** 2 * q; e[n] = n * (N - n) / 2 }
		let below = x => {
			let count = 0, u = 1
			for (let n = 0; n < N; n++) { u = d[n] - x - (n ? e[n] * e[n] / u : 0) || 1e-300; if (u < 0) count++ }
			return count
		}
		let lo = Infinity, hi = -Infinity
		for (let n = 0; n < N; n++) {
			let r = e[n] + (n + 1 < N ? e[n + 1] : 0)
			lo = Math.min(lo, d[n] - r); hi = Math.max(hi, d[n] + r)
		}
		for (let k = 0; k < 200 && hi - lo > 1e-15 * Math.max(1, abs(hi)); k++) {
			let mid = (lo + hi) / 2
			if (below(mid) < N) lo = mid; else hi = mid
		}
		// Inverse iteration just above the top eigenvalue: solve (T - λ)v = v by the Thomas algorithm
		let lambda = hi + 1e-12 * Math.max(1, abs(hi)), v = new Float64Array(N).fill(1), up = new Float64Array(N), rhs = new Float64Array(N)
		for (let k = 0; k < 3; k++) {
			for (let n = 0; n < N; n++) {
				let m = d[n] - lambda - (n ? e[n] * up[n - 1] : 0) || 1e-300
				up[n] = n + 1 < N ? e[n + 1] / m : 0
				rhs[n] = (v[n] - (n ? e[n] * rhs[n - 1] : 0)) / m
			}
			for (let n = N - 1; n >= 0; n--) v[n] = rhs[n] - (n + 1 < N ? up[n] * v[n + 1] : 0)
			normalize(v)
		}
		if (v[N >> 1] < 0) for (let n = 0; n < N; n++) v[n] = -v[n]
		c._w = normalize(v); c._N = N; c._W = W
	}
	return c._w[i]
}
export { dpss }

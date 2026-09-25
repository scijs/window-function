import { cos, cosh, acosh, pow, PI, gegen, fromSpectrum } from './util.js'
// xmu defaults to Dolph–Chebyshev's x₀ for 100 dB, so mu → 0 is dolphChebyshev's default. xmu = 1 is no taper:
// for mu = 1 the spectrum samples vanish but at k = 0 and the window comes out rectangular.
export default function ultraspherical (i, N, mu, xmu) {
	if (mu == null) mu = 1
	if (N === 1) return 1
	if (xmu == null) xmu = cosh(acosh(pow(10, 100 / 20)) / (N - 1))
	let c = ultraspherical
	if (c._N !== N || c._mu !== mu || c._xmu !== xmu) {
		let p = new Float64Array(N)
		for (let k = 0; k < N; k++) p[k] = gegen(N - 1, mu, xmu * cos(PI * k / N))
		c._w = fromSpectrum(p); c._N = N; c._mu = mu; c._xmu = xmu
	}
	return c._w[i]
}
export { ultraspherical }

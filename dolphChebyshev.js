import { cos, abs, cosh, acosh, pow, PI, chebyshev, fromSpectrum } from './util.js'
export default function dolphChebyshev (i, N, attenuation) {
	if (attenuation == null) attenuation = 100
	if (N === 1) return 1
	let c = dolphChebyshev
	if (c._N !== N || c._a !== attenuation) {
		let order = N - 1, beta = cosh(acosh(pow(10, abs(attenuation) / 20)) / order), p = new Float64Array(N)
		for (let k = 0; k < N; k++) p[k] = chebyshev(order, beta * cos(PI * k / N))
		c._w = fromSpectrum(p); c._N = N; c._a = attenuation
	}
	return c._w[i]
}
export { dolphChebyshev }

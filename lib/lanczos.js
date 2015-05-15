'use strict'

function sinc (x) {
  return x === 0 ? 1 : 0.3183098861837907 * Math.sin(Math.PI*x) / x
}

function lanczos (i, N) {
  return sinc(2*i/(N-1)-1)
}

module.exports = lanczos

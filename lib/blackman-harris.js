'use strict'

function blackmanHarris (i,N) {
  var a0 = 0.35875,
      a1 = 0.48829,
      a2 = 0.14128,
      a3 = 0.01168,
      f = 6.283185307179586*i/(N-1)

  return a0 - a1*Math.cos(f) +a2*Math.cos(2*f) - a3*Math.cos(3*f)
}

module.exports = blackmanHarris

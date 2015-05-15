'use strict'

function blackman (i,N) {
  var a0 = 0.42,
      a1 = 0.5,
      a2 = 0.08,
      f = 6.283185307179586*i/(N-1)

  return a0 - a1 * Math.cos(f) + a2*Math.cos(2*f)
}

module.exports = blackman

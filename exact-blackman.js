'use strict'

function exactBlackman (i,N) {
  var a0 = 0.42659,
      a1 = 0.49656,
      a2 = 0.076849,
      f = 6.283185307179586*i/(N-1)

  return a0 - a1 * Math.cos(f) + a2*Math.cos(2*f)
}

module.exports = exactBlackman

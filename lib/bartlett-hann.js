'use strict'

function bartlettHann (i,N) {
  var inm1 = i/(N-1),
      a0 = 0.62,
      a1 = 0.48,
      a2 = 0.38

  return a0 - a1 * Math.abs(inm1 - 0.5) - a2 * Math.cos(6.283185307179586*inm1)
}

module.exports = bartlettHann

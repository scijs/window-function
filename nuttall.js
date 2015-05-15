'use strict'

var TWOPI = Math.PI * 2

function nuttall (i,N) {
  var a0 = 0.355768,
      a1 = 0.487396,
      a2 = 0.144232,
      a3 = 0.012604,
      f = TWOPI*i/(N-1)

  return a0 - a1*Math.cos(f) +a2*Math.cos(2*f) - a3*Math.cos(3*f)
}

module.exports = nuttall

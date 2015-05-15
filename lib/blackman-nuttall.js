'use strict'

function blackmanNuttall (i,N) {
  var a0 = 0.3635819,
      a1 = 0.4891775,
      a2 = 0.1365995,
      a3 = 0.0106411,
      f = 6.283185307179586*i/(N-1)

  return a0 - a1*Math.cos(f) +a2*Math.cos(2*f) - a3*Math.cos(3*f)
}

module.exports = blackmanNuttall

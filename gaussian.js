'use strict'

function gaussian (i,N,sigma) {
  var nm12 = 0.5*(N-1),
      f = (i-nm12)/sigma/nm12

  return Math.exp(-0.5*f*f)
}

module.exports = gaussian

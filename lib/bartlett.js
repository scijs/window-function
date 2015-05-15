'use strict'

function bartlett (i,N) {
  return 1 - Math.abs( 2 * (i - 0.5*(N-1)) / (N-1) )
}

module.exports = bartlett

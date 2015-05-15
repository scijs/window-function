'use strict'

function triangular (i,N) {
  return 1 - Math.abs( 2 * (i - 0.5*(N-1)) / N )
}

module.exports = triangular

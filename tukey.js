'use strict'

function tukey (i,N, alpha) {
  var anm12 = 0.5*alpha*(N-1)

  if( i <= anm12 ) {
    return 0.5*(1+Math.cos(Math.PI*(i/anm12 - 1)))
  } else if ( i < (N-1)*(1-0.5*alpha) ) {
    return 1
  } else {
    return 0.5*(1+Math.cos(Math.PI*(i/anm12 - 2/alpha + 1)))
  }
}

module.exports = tukey

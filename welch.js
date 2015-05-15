'use strict'

function welch (i,N) {
  var nm12 = 0.5*(N-1),
      f = (i - nm12)/nm12
  return 1 - f*f
}

module.exports = welch

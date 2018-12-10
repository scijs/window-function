'use strict'

module.exports = function generate(func, N) {
  var i, args=[0,N]
  var signal = new Array(N);

  for(i=2; i<arguments.length; i++) {
    args[i] = arguments[i]
  }

  for(i=N-1; i>=0; i--) {
    args[0] = i
    signal[i] = func.apply(null,args)
  }
  return signal;
}


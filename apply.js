'use strict'

module.exports = function applyWindow(signal, func) {
  var i, n=signal.length, args=[0,n]

  // pass rest of args
  for(i=2; i<arguments.length; i++) {
    args[i] = arguments[i]
  }

  for(i=n-1; i>=0; i--) {
    args[0] = i
    signal[i] *= func.apply(null,args)
  }

  return signal;
}

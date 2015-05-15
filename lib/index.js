'use strict'

module.exports = {
  lanczos: require('./lanczos'),
  rectangular: require('./rectangular'),
  triangular: require('./triangular'),
  bartlett: require('./bartlett'),
  bartlettHann: require('./bartlett-hann'),
  welch: require('./welch'),
  hann: require('./hann'),
  hamming: require('./hamming'),
  blackman: require('./blackman'),
  nuttall: require('./nuttall'),
  blackmanNuttall: require('./blackman-nuttall'),
  blackmanHarris: require('./blackman-harris'),
  exactBlackman: require('./exact-blackman'),
  flatTop: require('./flat-top'),
  cosine: require('./cosine'),
  gaussian: require('./gaussian'),
  tukey: require('./tukey')
}

/*
function applyWindow(signal, func) {
  var i, n=signal.length, args=[0,n]

  for(i=2; i<arguments.length; i++) {
    args[i] = arguments[i]
  }

  for(i=n-1; i>=0; i--) {
    args[0] = i
    signal[i] *= func.apply(null,args)
  }

  return signal;
}


function generate(func, N) {
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
}*/


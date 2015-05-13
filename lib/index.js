'use strict'

var TWOPI = Math.PI * 2

function sinc (x) {
  return x === 0 ? 1 : 0.3183098861837907 * Math.sin(Math.PI*x) / x
}

function rectangular (i,N) {
  return 1
}

function triangular (i,N) {
  return 1 - Math.abs( 2 * (i - 0.5*(N-1)) / N )
}

function bartlett (i,N) {
  return 1 - Math.abs( 2 * (i - 0.5*(N-1)) / (N-1) )
}

function welch (i,N) {
  var nm12 = 0.5*(N-1),
      f = (i - nm12)/nm12
  return 1 - f*f
}

function hann (i,N) {
  return 0.5*(1 - Math.cos(TWOPI*i/(N-1)))
}

function hamming (i,N) {
  return 0.54 - 0.46 * Math.cos(TWOPI*i/(N-1))
}

function blackman (i,N) {
  var a0 = 0.42,
      a1 = 0.5,
      a2 = 0.08,
      f = TWOPI*i/(N-1)

  return a0 - a1 * Math.cos(f) + a2*Math.cos(2*f)
}

function exactBlackman (i,N) {
  var a0 = 0.42659,
      a1 = 0.49656,
      a2 = 0.076849,
      f = TWOPI*i/(N-1)

  return a0 - a1 * Math.cos(f) + a2*Math.cos(2*f)
}

function nuttall (i,N) {
  var a0 = 0.355768,
      a1 = 0.487396,
      a2 = 0.144232,
      a3 = 0.012604,
      f = TWOPI*i/(N-1)

  return a0 - a1*Math.cos(f) +a2*Math.cos(2*f) - a3*Math.cos(3*f)
}

function blackmanNuttall (i,N) {
  var a0 = 0.3635819,
      a1 = 0.4891775,
      a2 = 0.1365995,
      a3 = 0.0106411,
      f = TWOPI*i/(N-1)

  return a0 - a1*Math.cos(f) +a2*Math.cos(2*f) - a3*Math.cos(3*f)
}

function blackmanHarris (i,N) {
  var a0 = 0.35875,
      a1 = 0.48829,
      a2 = 0.14128,
      a3 = 0.01168,
      f = TWOPI*i/(N-1)

  return a0 - a1*Math.cos(f) +a2*Math.cos(2*f) - a3*Math.cos(3*f)
}

function flatTop (i,N) {
  var a0 = 1,
      a1 = 1.93,
      a2 = 1.29,
      a3 = 0.388,
      a4 = 0.028,
      f = TWOPI*i/(N-1)

  return a0 - a1*Math.cos(f) +a2*Math.cos(2*f) - a3*Math.cos(3*f) + a4 * Math.cos(4*f)
}

function bartlettHann (i,N) {
  var inm1 = i/(N-1),
      a0 = 0.62,
      a1 = 0.48,
      a2 = 0.38

  return a0 - a1 * Math.abs(inm1 - 0.5) - a2 * Math.cos(TWOPI*inm1)
}

function cosine (i,N) {
  return Math.sin(Math.PI*i/(N-1))
}

function gaussian (i,N,sigma) {
  var nm12 = 0.5*(N-1),
      f = (i-nm12)/sigma/nm12

  return Math.exp(-0.5*f*f)
}

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

function lanczos (i, N) {
  return sinc(2*i/(N-1)-1)
}


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
}

exports.rectangular = rectangular
exports.triangular = triangular
exports.bartlett = bartlett
exports.welch = welch
exports.hann = hann
exports.hamming = hamming
exports.blackman = blackman
exports.exactBlackman = exactBlackman
exports.nuttall = nuttall
exports.blackmanNuttall = blackmanNuttall
exports.blackmanHarris = blackmanHarris
exports.flatTop = flatTop
exports.bartlettHann = bartlettHann
exports.cosine = cosine
exports.gaussian = gaussian
exports.tukey = tukey
exports.lanczos = lanczos

exports.window = applyWindow
exports.generate = generate


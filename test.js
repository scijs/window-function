'use strict'

var wfunc = require('./')
var t = require('tape')


var windows = [
  'rectangular',
  'triangular',
  'bartlett',
  'welch',
  'hann',
  'hamming',
  'blackman',
  'exactBlackman',
  'nuttall',
  'blackmanNuttall',
  'blackmanHarris',
  'flatTop',
  'bartlettHann',
  'cosine',
  'lanczos'
]

t('window functions return a finite number',function(t) {

  var i

  for(i=0; i<windows.length; i++) {
    (function(j) {

      t.ok( isFinite(wfunc[windows[j]](50,101)), windows[j] )

    })(i)

  }

  t.ok( isFinite(wfunc.gaussian(50,100,0.4)), 'gaussian (alpha = 0.4)')
  t.ok( isFinite(wfunc.tukey(50,100,0.4)), 'tukey (alpha = 0.5)')
  t.end()
})

t('applies a window to a signal',function(t) {
  var x = [1, 1, 1, 1, 1]
  var y = wfunc.apply( x, wfunc.hamming )
  t.equal(y.length, x.length)
  t.end()
})

t('passes extra arguments to a window function',function(t) {
  var x = [1, 1, 1, 1, 1]
  wfunc.apply( x, wfunc.gaussian, 0.1 )
  t.ok( isFinite(x[0]), 'samples are finite' )
  t.ok( x[0] < 1e-8, 'samples have been windowed' )
  t.end()
})

t('constructs an window function array',function(t) {
  var x = wfunc.generate( wfunc.hamming, 100 )
  t.ok( Array.isArray(x) )
  t.equal( x.length, 100 )
  t.ok( isFinite(x[50]) )
  t.end()
})



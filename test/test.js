'use strict'

var wfunc = require('../lib/index.js'),
    assert = require('assert')


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

describe('window functions return a finite number',function() {

  var i

  for(i=0; i<windows.length; i++) {
    var winfunc = wfunc[windows[i]]

    it(windows[i],function() {
      assert( isFinite(winfunc(50,100)) )
    })

  }

  it('gaussian (alpha = 0.4)',function() {
    assert( isFinite(wfunc.gaussian(50,100,0.4)) )
  })

  it('tukey (alpha = 0.5)',function() {
    assert( isFinite(wfunc.tukey(50,100,0.4)) )
  })
})

describe('applies a window function',function() {
  
  var x

  beforeEach(function() {
    x = [1, 1, 1, 1, 1]
  })

  it('applies a window to a signal',function() {
    wfunc.apply( x, wfunc.hamming )
  })

  it('passes extra arguments to a window function',function() {
    wfunc.apply( x, wfunc.gaussian, 0.1 )
    assert( isFinite(x[0]), 'samples are finite' )
    assert( x[0] < 1e-8, 'samples have been windowed' )
  })
})



describe('generates a window function',function() {
  
  it('constructs an window function array',function() {
    var x = wfunc.generate( wfunc.hamming, 100 )
    assert( Array.isArray(x) )
    assert( x.length === 100 )
    assert( isFinite(x[50]) );
  })

})



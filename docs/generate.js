var wfunc = require('../lib/index'),
    fs = require('fs'),
    exec = require('child_process').exec

var plots = [
  {
    prefix: 'rectangular',
    name: 'Rectangular Window',
    func: wfunc.rectangular
  },
  {
    prefix: 'triangular',
    name: 'Triangular Window',
    func: wfunc.triangular
  },
  {
    prefix: 'lanczos',
    name: 'Lanczos Window',
    func: wfunc.lanczos
  },
  {
    prefix: 'bartlett',
    name: 'Bartlett Window',
    func: wfunc.bartlett
  },
  {
    prefix: 'welch',
    name: 'Welch Window',
    func: wfunc.welch
  },
  {
    prefix: 'hann',
    name: 'Hann Window',
    func: wfunc.hann
  },
  {
    prefix: 'hamming',
    name: 'Hamming Window',
    func: wfunc.hamming
  },
  {
    prefix: 'blackman',
    name: 'Blackman Window',
    func: wfunc.blackman
  },
  {
    prefix: 'exact-blackman',
    name: 'Exact Blackman Window',
    func: wfunc.exactBlackman
  },
  {
    prefix: 'nuttall',
    name: 'Nuttall Window',
    func: wfunc.nuttall
  },
  {
    prefix: 'blackman-nuttall',
    name: 'Blackman-Nuttall Window',
    func: wfunc.blackmanNuttall
  },
  {
    prefix: 'blackman-harris',
    name: 'Blackman-Harris Window',
    func: wfunc.blackmanHarris
  },
  {
    prefix: 'flat-top',
    name: 'Flat Top Window',
    func: wfunc.flatTop
  },
  {
    prefix: 'bartlett-hann',
    name: 'Bartlett-Hann Window',
    func: wfunc.bartlettHann
  },
  {
    prefix: 'cosine',
    name: 'Cosine Window',
    func: wfunc.cosine
  },
  {
    prefix: 'gaussian',
    name: 'Gaussian Window, $\\sigma=0.4$',
    func: function(i,N) { return wfunc.gaussian(i,N,0.4); }
  },
  {
    prefix: 'tukey',
    name: 'Tukey Window, $\\alpha=0.5$',
    func: function(i,N) { return wfunc.tukey(i,N,0.5); }
  },
  {
    prefix: 'lanczos',
    name: 'Lanczos Window',
    func: wfunc.lanczos
  }
]


var c, N=81

for(c=0; c<plots.length; c++) {
  (function(plot) {
    console.log(plot)

    var csv = ''
    for(i=0; i<N; i++) {
      csv += (i/(N-1)) + ', ' + plot.func(i,N) + '\n'
    }

    var filename = 'docs/data/'+plot.prefix+'.csv'
    fs.writeFile(filename, csv, function(err) {
      if(err) {
        console.log(err)
      }

      exec('python docs/plot.py ' + filename + ' "' + plot.name + '" ' + plot.prefix, function (error, stdout, stderr) {
        console.log('stdout = ',stdout)
        console.log('stderr = ',stderr)
      })
    })
  }(plots[c]))
  
}

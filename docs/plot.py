# I'm aware of the irony of a Python script for the plotting. Still
# waiting for a js plotting library that can begin to compete...

import numpy as np
import matplotlib
import matplotlib.pyplot as pl
import sys

print sys.argv

datafile = sys.argv[1]
name = sys.argv[2]
prefix = sys.argv[3]

data = np.loadtxt( datafile, delimiter=',')


x = data[:,0]
y = data[:,1]

font = {'family' : 'normal',
        'size'   : 9}

matplotlib.rc('font', **font)

sc = 0.6
f = pl.figure(figsize=(10*sc,5*sc))

pl.subplot(1,2,1)
ax = pl.gca()
pl.plot(x,y,color="black",lw=1)
ax.fill_between(x,0,y,color="#006699")

if prefix == 'flatTop':
  pl.axis([0,1,-1,5])
else:
  pl.axis([0,1,0,1.05])
pl.title("%s" % name)
pl.xlabel('samples')
pl.ylabel('amplitude')

a = ax.get_xticks().tolist()
for i in range(len(a)):
  a[i] = ''
a[0] = '0'
a[-1] = 'N-1'
ax.set_xticklabels(a)
pl.grid()

pl.subplot(1,2,2)
ax = pl.gca()
yh = 20*np.log10(np.abs(np.fft.fftshift(np.fft.fft(y, n=len(y)*10+1)))) - 40
yh -= np.max(yh)
f = np.linspace(-40,40,len(yh))
ax.fill_between(f,-1000,yh,color="#de7c00")
pl.title("Fourier transform")
pl.xlabel('bins')
pl.ylabel('decibels')
pl.axis([np.min(f),np.max(f),-130,10])
pl.grid()


pl.tight_layout()

pl.savefig("docs/plots/%s.png" % prefix)

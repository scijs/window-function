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

if (process.env.NODE_ENV === 'development') {
  module.exports = require('./store.dev'); // eslint-disable-line global-require
} else {
  module.exports = require('./store.prod'); // eslint-disable-line global-require
}

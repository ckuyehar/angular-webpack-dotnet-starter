/**
 * @author: @AngularClass
 */

process.noDeprecation = true;

// Look in ./config folder for webpack.dev.js
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    console.log('webpack running in PRODUCTION mode');
    module.exports = require('./config/webpack.prod')({env: 'production'});
    break;
  case 'test':
  case 'testing':
    console.log('webpack running in TEST mode');
    module.exports = require('./config/webpack.test')({env: 'test'});
    break;
  case 'dev':
  case 'development':
  default:
    console.log('webpack running in DEV mode');
    module.exports = require('./config/webpack.dev')({env: 'development'});
}

// Update with your config settings.
var env = require('require-env');
var URL = require('url');

if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('dotenv').load();
}

var pgServer = env.requireUrl('DATABASE_URL');

module.exports = {
  development: {
    client: 'postgresql',
    connection: env.require('DATABASE_URL')
  },
  production: {
    client: 'postgresql',
    connection: {
      host: pgServer.hostname,
      port: pgServer.port,
      user: (pgServer.auth || '').split(':')[0],
      password: (pgServer.auth || '').split(':')[1],
      database: pgServer.path.substring(1),
      ssl: true
    }
  }
};

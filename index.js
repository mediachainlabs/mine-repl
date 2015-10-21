var Knex = require('knex');
var config = require('./knexfile');
var pg = require('pg');
var Redis = require('redis');
var env = require('require-env');

pg.types.setTypeParser(20, 'text', parseInt);
const node_env = process.env.NODE_ENV || 'development';
const knex = Knex(config[node_env]);

const REDIS_PROVIDER = env.require('REDIS_PROVIDER');
const REDIS_URL = env.require(REDIS_PROVIDER);
const redis = Redis.createClient(REDIS_URL);


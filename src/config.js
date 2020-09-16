"use strict";

const assert = require("assert");
const dotenv = require("dotenv");

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  COOKIE_ENCRYPT_PWD,
  SQL_SERVER,
  SQL_DATABASE,
  SQL_USER,
  SQL_PASSWORD,
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, "PORT requerido");
assert(HOST, "HOST requerido");
assert(HOST_URL, "HOST_URL requerido");
assert(COOKIE_ENCRYPT_PWD, "COOKIE_ENCRYPT_PWD requerido");
assert(SQL_SERVER, "SQL_SERVER requerido");
assert(SQL_DATABASE, "SQL_DATABASE requerido");
assert(SQL_USER, "SQL_USER requerido");
assert(SQL_PASSWORD, "SQL_PASSWORD requerido");

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  cookiePwd: COOKIE_ENCRYPT_PWD,
  sql: {
    server: SQL_SERVER,
    database: SQL_DATABASE,
    user: SQL_USER,
    password: SQL_PASSWORD,
    options: {
      encrypt: sqlEncrypt,
    },
  },
};

"use strict";

const utils = require("./utils");

const register = async ({ sql, getConnection }) => {
  //carpeta evento
  const sqlQueries = await utils.loadSqlQueries("../dataAccessContracts/heroes");

  const getAll = async function () {
    console.log("-----En ALL------");
    const cnx = await getConnection();
    const request = await cnx.request();
    const out = request.query(sqlQueries.getHeroes);
    return out; 
  };

  // return {
  //   getAll,
  // };

  const getHeroe = async function () {
    console.log("-----En ALL------");
    const cnx = await getConnection();
    const request = await cnx.request();
    const out = request.query(sqlQueries.getHeroes);
    return out; 
  };

  return {
    getAll,
    getHeroe
  };

};

module.exports = { register };

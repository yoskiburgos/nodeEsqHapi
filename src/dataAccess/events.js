"use strict";

const utils = require("./utils");

const register = async ({ sql, getConnection }) => {
  //carpeta evento
  const sqlQueries = await utils.loadSqlQueries("../dataAccessContracts/events");

  const getEvents = async (userId) => {
    const cnx = await getConnection();
    const request = await cnx.request();

    request.input("userId", sql.VarChar(50), userId);

    return request.query(sqlQueries.getEvents);
  };

  return {
    getEvents,
  };
};

module.exports = { register };

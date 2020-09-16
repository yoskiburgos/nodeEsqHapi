"use strict";
module.exports.getHeroes = async (request) => {
  try {
    const db = request.server.plugins.sql.client;        
    const res = await db.heroes.getAll();
    return res.recordset;
    //return db;
  } catch (err) {
    console.log(err);
  }
};

"use strict";
module.exports.getEvent = async (request) => {
  try {    
    const db = request.server.plugins.sql.client;
    const userId = request.params.id;    
    const res = await db.events.getEvents(userId);
    return res.recordset;
    //return userId;
  } catch (err) {
    console.log(err);
  }
};

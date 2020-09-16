"use strict";
//Clase centralizadora de ruteo
const events = require("../controllers/events");
const heroes = require("../controllers/heroes");
const test = require("../controllers/test");

module.exports.register = async (server) => {
  await events.register(server);
  await heroes.register(server);
  await test.register(server);
};

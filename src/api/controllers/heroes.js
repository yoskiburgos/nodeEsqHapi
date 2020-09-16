"use strict";
const heroes = require("../../application/services/heroes");

module.exports.register = async (server) => {  
  server.route({
    method: "GET",
    path: "/api/heroes",
    config: {
      handler: heroes.getHeroes,
    },
  });
};

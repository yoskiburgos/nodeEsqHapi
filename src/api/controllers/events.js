"use strict";
const events = require("../../application/services/events");

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/events/{id}",
    config: {       
      handler:  events.getEvent,
    },
  });
  // server.route({
  //   method: "POST",
  //   path: "/api/events/{id}",
  //   config: {       
  //     handler:  events.getEvent,
  //   },
  // });
};

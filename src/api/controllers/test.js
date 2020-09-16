const test = require("../../application/services/test");
module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/",
    // handler: async (request, h) => {
    //   return "My first hapi server!";
    // },
    handler: test.test,
  });
};

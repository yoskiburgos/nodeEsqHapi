"use strict";
module.exports.test = async (request) => {
  try {
    return "My first hapi server!";
  } catch (err) {
    console.log(err);
  }
};

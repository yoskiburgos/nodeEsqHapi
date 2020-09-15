"use strict";

module.exports.register = async server => {
   server.route( {
       method: "GET",
       path: "/api/events/{id}",
       config: {
           handler: async request => {
               try {
                  const db = request.server.plugins.sql.client;
                  const userId = request.params.id;
                  const res = await db.events.getEvents( userId );

                   return res.recordset;
               } catch ( err ) {
                   console.log( err );
               }
           }
       }
   });
   
   server.route({
        method: "GET",
        path: "/procedure",
        config: {
            handler: async request => {
                try {
                    const db = request.server.plugins.sql.client;
                    const res = await db.events.getAll();
                    return res.recordset;
                } catch ( err ) {
                    console.log( err );
                }
            }
        }
    });
    
};
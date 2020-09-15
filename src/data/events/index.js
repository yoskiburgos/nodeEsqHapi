"use strict";

const utils = require( "../utils" );

const register = async ( { sql, getConnection } ) => {
   //carpeta evento
   const sqlQueries = await utils.loadSqlQueries( "events" );

   const getEvents = async userId => {
       const cnx = await getConnection();
      const request = await cnx.request();

       request.input( "userId", sql.VarChar( 50 ), userId );
       
       return request.query( sqlQueries.getEvents);
   };

   const getAll = async function() {
       console.log('-----En ALL------');
        const cnx = await getConnection();
        const request = await cnx.request();
        
        // return the executed query
        //const out = request.query( sqlQueries.all ,function(err, results){
        //    console.log('Resultados= '+results)
        //} );

        const out = request.query( sqlQueries.all);
       
        
        return out; //request.query( sqlQueries.all );
    };

   return {
       getEvents, getAll
   };
};

module.exports = { register };
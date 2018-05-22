require('dotenv').config();

const hapi = require('hapi');
const Routes = require('./routes/routes');

const server = new hapi.Server();

const serverPort = process.env[`PORT_${process.env.NODE_ENV.toUpperCase()}`];
// registro de rutas en el servidor
server.connection({ port: serverPort });
// Defino ruta
server.route(Routes.rutas);
// Levanto server
server.start((err) => {
  if (err) throw err;
  console.log(`Servidor levantado en: ${server.info.uri}`);
});

module.exports = server;

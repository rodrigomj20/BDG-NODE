/* module.exports = options => {
 {
    method: 'GET',
    path: '/{idService}',
    config: {
      // pre: [f(),f()];  validate:{ params:{idService: Joi.number} }
      handler: (request, reply) => reply({ data: 'Hola mundo que' }),
    },
  },
]; */
const Handlers = require('../lib/handler');

module.exports = {
  rutas: [
    {
      method: 'GET',
      path: '/',
      config: {
        // pre: [f(),f()];  validate:{ params:{idService: Joi.number} }
        // anterior
        // handler: (request, reply) => reply({ data: 'Hola mundo que' }),
        handler: Handlers.indexHand,
      },
    },
    {
      method: 'POST',
      path: '/',
      config: {
        // pre: [f(),f()];  validate:{ params:{idService: Joi.number} }
        handler: Handlers.postHand,
      },
    },
  ],
};

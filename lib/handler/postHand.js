module.exports = (request, reply) => {
  const parametro = request.payload.parametro1;
  const corte = parametro.split(',');
  return reply({ corte });
};

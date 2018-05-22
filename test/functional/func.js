const Code = require('code');

const Lab = require('lab');

const { expect } = Code;

const lab = Lab.script();

exports.lab = lab;
// variables del objeto lab
const { describe, it, after } = lab;

const server = require('../../app');

const body = {
  parametro: 'hola mundo',
  parametro1: 'Hola Rodrigo',
};

describe('Primera prueba funcional', () => {
  it('Prueba POST', (done) => {
    server.inject(
      {
        method: 'POST',
        url: '/',
        headers: {
          'Content-Type': 'application/json',
        },
        payload: body,
      },
      (res) => {
        expect(res.result.corte).to.be.exist();
        // expect(res.result.corte.parametro1).to.be.equals('Hola mundo');
        done();
      },
    );
  });

  after((done) => {
    done();
  });
});

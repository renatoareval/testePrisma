import tiposEventosRoutes from '../../src/routes/tiposEventosRoutes';

describe('Testes na API de Tipos de Eventos', () => {
  
  it('Deve retornar todos os tipos de eventos', (done) => {
    
    request(tiposEventosRoutes)
      .get('/')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done(err);
      });
  });

});
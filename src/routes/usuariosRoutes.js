import express from 'express';

const usuariosRouter = express.Router();

usuariosRouter
  .post('/login', )
  .get('/logout', )
  .get('/session', )
  .post('/usuarios', )
  .put('/usuarios/:id', )
  .delete('/usuarios/:id', )
  .get('/usuarios/:id',)
  .get('/usuarios', )

export default usuariosRouter;
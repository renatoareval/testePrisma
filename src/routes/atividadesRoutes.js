import express from 'express';
import atividadesController from '../controllers/atividadesController';

const atividadesRouter = express.Router();

atividadesRouter
  .get('/atividades', atividadesController.listar)
  .get('/atividades/:id', atividadesController.listarPorId)
  .post('/atividades', atividadesController.inserir)
  .put('/atividades/:id', atividadesController.alterar)
  .delete('/atividades/:id', atividadesController.deletar);
  
export default atividadesRouter;
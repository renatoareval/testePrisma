import eventosRouter from "./eventosRoutes.js";
import tiposEventosRouter from "./tiposEventosRoutes.js";
import atividadesRouter from "./atividadesRoutes.js";
import tiposAtividadesRouter from "./tiposAtividadesRoutes.js";

const routes = (app) => {

  app.get('/ping', (req, res) => {
    res.status(200);
    res.send('pong');
  });

  app.use(
    eventosRouter,
    tiposEventosRouter,
    atividadesRouter,
    tiposAtividadesRouter
  );

  //app.use(handleNotFound);
  //app.use(handleValidationError);
  //app.use(handleError);
}


export default routes;
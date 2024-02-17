const listar = async (req, res, next) => {
  try {
    
    await res.status(200).json({ message: 'Listar todos os tipos de eventos' });
  } catch (error) {
    next(error);
  }
}

const listarPorId = (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }  
}

const inserir = (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
}

const alterar = (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
}

const deletar = (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
}

const tiposEventosController = {
  listar,
  listarPorId,
  inserir,
  alterar,
  deletar
}

export default tiposEventosController;

const handleValidationError = (err, req, res, next) => {
  
  if (err instanceof ValidationError) {
    
    // Se for um erro de validação do Prisma, formatar a mensagem
    const errors = err.errors.map(error => ({
      field: error.path.join('.'),
      message: error.message
    }));

    res.status(400).json({ errors });
  } else {

    // Se for outro tipo de erro, repassar para o próximo middleware
    next(err);
  }
}

export default handleValidationError;
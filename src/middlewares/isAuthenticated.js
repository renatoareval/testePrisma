import json from 'jsonwebtoken';

const auth = (req, res, next) => {
  
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Token não enviado' });
  }
  
  jwt.verify(token, 'chave_secreta', (err, decoded) => {
    
    if (err) {
      return res.status(401).json({ error: 'Token inválido' });
    }
    
    req.user = decoded;
    next();
  });
}

export default auth;
import jwt from 'jsonwebtoken';

import User from '../models/Usuarios';
import auth from '../../config/auth';
class SessionController{
  async store(req, res){
      const { user_login , user_pass } = req.body;
      const user = await User.findOne({ where : { user_login }});

      if(!user){
        return res.status(401).json({error:'Usuario não encontrado'});
      }

      if(!(await user.checkPassword(user_pass))){
          return res.status(401).json({error:"Senha não valida"});
      }

      const { id , nome_completo } = user;

      return res.json({
        user:{
          id,
          user_login,
          nome_completo,
        },
        token: jwt.sign({ id }, auth.secret,{
          expiresIn:auth.expiresIn,
        }),
      });

  }

}

export default new SessionController();
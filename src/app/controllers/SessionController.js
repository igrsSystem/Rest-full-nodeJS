import jwt from 'jsonwebtoken';

import User from '../models/Usuarios';
import auth from '../../config/auth';
class SessionController{
  async store(req, res){
      const { user_login , user_pass } = req.body;
      const user = await User.findOne({ where : { user_login }});

  /*
      const vetc = await User.sequelize.query('SELECT * FROM usuarios.usuarios as u inner  join organizacoes.organizacoes as org on u.id_organizacao = org.id WHERE user_login = :user_logi', {
        replacements: {user_logi: user_login},
        model: User.Order,
        mapToModel: true
    });
    const pwd = vetc[1].rows[0].user_passwd
    const userVerify=  vetc[1].rows[0].user_login
    const r = {user_passwd: pwd}
 console.log(r);
//console.log(userVerify);
 // return res.status(200).json(vetc[1].rows[0]);

*/
      if(!user){
        return res.status(401).json({error:'Usuario não encontrado'});
      }
      if(!(await user.checkPassword(user_pass))){
          return res.status(401).json({error:"Senha não valida"});
      }

      const { id , nome_completo, id_organizacao } = user;

      return res.json({
        user:{
          id,
          user_login,
          nome_completo,
          id_organizacao
        },
        token: jwt.sign({ id }, auth.secret,{
          expiresIn:auth.expiresIn,
        }),
      });

     /*

     const { id , nome_completo, id_organizacao, razao_social } = vetc[1].rows[0];

     return res.json({
       user:{
         id,
         user_login,
         nome_completo,
         id_organizacao,
         razao_social
       },
       token: jwt.sign({ id }, auth.secret,{
         expiresIn:auth.expiresIn,
       }),
     });

*/
  }

}

export default new SessionController();
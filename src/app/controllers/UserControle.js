import User from '../models/Users';

class UserController{
  async store( req , res ){
    const usuarioExti = await User.findOne({ where:{ email: req.body.email}  });
    if(usuarioExti){
        return res.status(400).json({erro: 'usuario ja cadastrado'});
    }  

    const { id , name, email, provider } = await User.create(req.body);
    return res.json({ id , name, email, provider });
    
  }
}

export default new  UserController();
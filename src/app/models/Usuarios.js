import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class usuarios  extends Model {
    static init(sequelize){
        super.init(
            {

             user_login: Sequelize.STRING,
             user_passwd: Sequelize.STRING,
             nome_completo: Sequelize.STRING, 
            },
            {   
                schema: 'usuarios',
                tableName: 'usuarios',
                sequelize,
            }
        );
       
        }
        checkPassword(user_pass){
      return  bcrypt.compare(user_pass, this.user_passwd);
    }
}

export default  usuarios
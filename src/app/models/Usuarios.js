import Sequelize, { Model } from 'sequelize';

class usuarios  extends Model {
    static init(sequelize){
        super.init(
            {
             user_login: Sequelize.STRING,
             nome_completo: Sequelize.STRING, 
            },
            {   
                //schema: 'veiculos',
                //tableName: 'veiculos',
                sequelize,
            }
        );
    }
}

export default  usuarios
import Sequelize, { Model } from 'sequelize';

class organizacoes  extends Model {
    static init(sequelize){
        super.init(
            {
             
             razao_social: Sequelize.STRING,
             cnpj_cpf: Sequelize.STRING,
             end_logradouro: Sequelize.STRING,
             end_numero: Sequelize.STRING,
             end_cep: Sequelize.STRING,   
            },
            {   schema: 'organizacoes',
                tableName: 'organizacoes',
                sequelize,
            }
        );
    }
}

export default  organizacoes
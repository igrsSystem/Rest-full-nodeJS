import Sequelize, { Model } from 'sequelize';

class entidades  extends Model {
    static init(sequelize){
        super.init(
            {
                id_organizacao: Sequelize.UUID,
                razao_social: Sequelize.STRING,
                cnpj_cpf: Sequelize.STRING,
                end_logradouro: Sequelize.STRING,
                end_numero: Sequelize.STRING,
                end_cep: Sequelize.STRING,     
            },
            {   schema: 'entidades',
                tableName: 'entidades',
                sequelize,
            }
        );
    }
}

export default  entidades
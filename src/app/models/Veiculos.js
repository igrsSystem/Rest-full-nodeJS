import Sequelize, { Model } from 'sequelize';

class veiculos  extends Model {
    static init(sequelize){
        super.init(
            {
             id_organizacao: Sequelize.UUID,
             id_entidade: Sequelize.UUID, 
             id_situacao: Sequelize.UUID,
             id_operador_cadastro: Sequelize.UUID,
             id_operador_atualizacao: Sequelize.UUID,
             id_equipamento: Sequelize.UUID,
             placa: Sequelize.STRING,
             chassi: Sequelize.STRING,
             cor: Sequelize.STRING,
             modelo: Sequelize.STRING,
             ano_fabricacao: Sequelize.STRING,
             id_tipo: Sequelize.UUID,
             id_unidade: Sequelize.UUID,
            },
            {   
                //schema: 'veiculos',
                //tableName: 'veiculos',
                sequelize,
            }
        );
    }
}

export default  veiculos
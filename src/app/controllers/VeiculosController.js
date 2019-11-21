import VeiculoModel from '../models/Veiculos';

class VeiculoControlle{
    /*async Select(req, res){
        const veic = await VeiculoModel.findAll({attributes: ['id_organizacao','id_entidade','id_situacao','id_operador_cadastro','id_operador_atualizacao','id_equipamento','placa', 'chassi','cor','modelo','id_tipo','id_unidade']});

        return res.json(veic);

    }veiculos.get_placa_by_eqpto_numero (
  eqpto_numero bigint
)
    */
    async Select(req, res){
        const veic = await VeiculoModel.sequelize.query('SELECT * FROM veiculos.get_placa_by_eqpto_numero(907115189)', {
            //replacements: {ids: carIds, createdDate: currentDateMonth},
            model: VeiculoModel.Order,
            mapToModel: true
        });
    /*
        const veic = await VeiculoModel.sequelize.query('SELECT * FROM veiculos.get_placa_by_eqpto_numero(907115189)', {
        model: VeiculoModel,
        mapToModel: true // pass true here if you have any mapped fields
    })
    .then(VeiculoModel => {
    // console.log(VeiculoModel);
    });
    */

    return res.status(200).json(veic[0]);
    }   
}
export default new VeiculoControlle();

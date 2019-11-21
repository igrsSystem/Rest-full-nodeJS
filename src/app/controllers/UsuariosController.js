import UsuariosModel from '../models/Usuarios';

class UsuariosControlle{
    /*
    async Select(req, res){
        const veic = await VeiculoModel.findAll({attributes: ['id_organizacao','id_entidade','id_situacao','id_operador_cadastro','id_operador_atualizacao','id_equipamento','placa', 'chassi','cor','modelo','id_tipo','id_unidade']});
        return res.json(veic);
    }
    */
    async Select(req, res){ 
        const users = await UsuariosModel.sequelize.query("SELECT * FROM  usuarios.get_veiculos_vinculados('866cbded-9429-4d5e-a738-d4061bfb539b')", {
            //replacements: {ids: carIds, createdDate: currentDateMonth},
            model: UsuariosModel.Order,
            mapToModel: true
        });    
        /*
            const veic = await UsuariosModel.sequelize.query("SELECT * FROM  usuarios.get_veiculos_vinculados('866cbded-9429-4d5e-a738-d4061bfb539b')", {
            model: UsuariosModel,
            mapToModel: true // pass true here if you have any mapped fields
            })
            .then(UsuariosModel => {
            // console.log(VeiculoModel);
            console.log(UsuariosModel);
                return res.json(UsuariosModel); 
            });
        */
    return res.status(200).json(users[1].rows);
    }
}
export default new UsuariosControlle();

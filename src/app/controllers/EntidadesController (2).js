import EntidadesModel from '../models/Entidades';

class EntidadesControlle{
    async Select(req, res){

        const ent = await EntidadesModel.findAll({attributes: ['id_organizacao','razao_social', 'cnpj_cpf','end_logradouro','end_numero','end_cep']});
        
        return res.json(ent);

    }
}
export default new EntidadesControlle();

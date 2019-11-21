import OrganizacoesModel from '../models/Organizacao';

class OrganizacoesControlle{
    async Select(req, res){

        const org = await OrganizacoesModel.findAll({ attributes: ['razao_social', 'cnpj_cpf','end_logradouro','end_numero','end_cep']});
        
        return res.json(org);

    }
}
export default new OrganizacoesControlle();

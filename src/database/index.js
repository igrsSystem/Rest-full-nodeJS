import Sequelize from 'sequelize';
import databaseConfi from '../config/database';

import User from '../app/models/Users';
import Veiculo from '../app/models/Veiculos';

import Organizacoes from '../app/models/Organizacao';
import Entidades from '../app/models/Entidades';
import Usuarios from '../app/models/Usuarios';

const models = [User, Veiculo,Organizacoes,Entidades,Usuarios];

class Database {
  constructor(){
    this.init();
  }
  init(){
    this.connection = new Sequelize(databaseConfi);
    models.map(model => model.init(this.connection))
  }
}

export default new Database();
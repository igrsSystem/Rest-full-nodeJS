import { Router } from 'express';
//import UserController from './app/controllers/UserControle';
import VeiculosController from './app/controllers/VeiculosController';

import OrganizacoesController from './app/controllers/OrganizacoesController';
import EntidadesController from './app/controllers/EntidadesController';
import UsuariosController from './app/controllers/UsuariosController';
import SessionController from './app/controllers/SessionController';




const  routes = new Router();
 //routes.post('/user',UserController.store);
 

 routes.get('/veiculos',VeiculosController.Select);
 routes.get('/organizacoes',OrganizacoesController.Select);
 routes.get('/entidades',EntidadesController.Select);
 routes.get('/usuarios',UsuariosController.Select);
  routes.post('/sessionpwr',SessionController.store);


export default  routes;


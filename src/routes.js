import { Router } from 'express';
import UserController from './app/controllers/UserControle';
import VeiculosController from './app/controllers/VeiculosController';

import OrganizacoesController from './app/controllers/OrganizacoesController';
import EntidadesController from './app/controllers/EntidadesController';
import UsuariosController from './app/controllers/UsuariosController';




const  routes = new Router();
 routes.post('/user',UserController.store);
 

 routes.get('/veiculos',VeiculosController.Select);
 routes.get('/organizacoes',OrganizacoesController.Select);
 routes.get('/entidades',EntidadesController.Select);
 routes.get('/usuarios',UsuariosController.Select);


export default  routes;
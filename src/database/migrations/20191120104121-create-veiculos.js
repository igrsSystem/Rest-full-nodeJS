module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('veiculos', {
        id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement:false,
          primaryKey: false, 
        },
        id_operador_cadastro:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_operador_atualizacao:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_organizacao:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_entidade:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_situacao:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_tipo:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_equipamento:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_unidade:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        placa:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        chassi:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_fabricante:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        modelo:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        cor:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        inputs_names:{
          type: Sequelize.JSON,
          allowNull:false,
        },
        outputs_names:{
          type: Sequelize.JSON,
          allowNull:false,
        },
        informacoes:{
          type: Sequelize.TEXT,
          allowNull:false,
        },
        procedimentos:{
          type: Sequelize.TEXT,
          allowNull:false,
        },
        bateria_voltagem:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        consumo_cidade:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        consumo_estrada:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_motorista:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        ano_fabricacao:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        visual_speed_limit:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_equipamento2:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_equipamento3:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_equipamento4:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        piv_graus_giro:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        piv_area_irrigada:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        piv_func_horas_dia:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        piv_vazao:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        piv_tempo_volta:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        piv_lamina_volta:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        piv_regulagem_rele:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        piv_horas_volta:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        piv_mm_volta:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        piv_conjunto_pneus:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        frota:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        dh_vinculacao_1:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        dh_vinculacao_2:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        dh_vinculacao_3:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        dh_vinculacao_4:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        cod_fipe:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_entidade_pronta_resposta:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_entidade_assistencia_24h:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_grupo:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        bloqueio:{
          type: Sequelize.BOOLEAN,
          allowNull:false,
        },
        sirene:{
          type: Sequelize.BOOLEAN,
          allowNull:false,
        },
        rfid:{
          type: Sequelize.BOOLEAN,
          allowNull:false,
        },
        panico:{
          type: Sequelize.BOOLEAN,
          allowNull:false,
        },
        emails_notificacao:{
          type: Sequelize.TEXT,
          allowNull:false,
        },
        id_produto_assistencia:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_combustivel:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_situacao_administrativa:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        dh_situacao_administrativa:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_operador_situacao_administrativa:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        informacao_instalacao:{
          type: Sequelize.TEXT,
          allowNull:false,
        },
        integracao_sga:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        tipo_irrigacao:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        piv_numer_outorga:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        id_situacao_sga:{
          type: Sequelize.STRING,
          allowNull:false,
        },

        dh_cadastro:{
          type: Sequelize.DATE,
          allowNull:false,
         },
         dh_atualizacao:{
          type: Sequelize.DATE,
          allowNull: false,
         }
      });
   
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('veiculos');
   
  }
};

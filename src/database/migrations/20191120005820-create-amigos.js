module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('amigos', {
         id:{
           type: Sequelize.INTEGER,
           allowNull: false,
           autoIncrement:true,
           primaryKey: true,
         },
         name:{
           type: Sequelize.STRING,
           allowNull:false,
         },
         age:{
           type: Sequelize.STRING,
           allowNull:false,
           unique:true,
         },
        city:{
           type: Sequelize.STRING,
           allowNull:false,
         },
       
         created_at:{
          type: Sequelize.DATE,
          allowNull:false,
         },
         updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
         }
        
        });
   
  },

  down: (queryInterface) => {
   
      return queryInterface.dropTable('amigos');
   
  }
};

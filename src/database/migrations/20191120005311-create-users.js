module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', {
        
        });
   
  },

  down: (queryInterface) => {
   
      return queryInterface.dropTable('users');
   
  }
};

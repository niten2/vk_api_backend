module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('clients')
  },

}

module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('tags', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        name: Sequelize.STRING,
        status: Sequelize.STRING,

        // kind: Sequelize.INTEGER,
        // kind: Sequelize.ENUM('openstreetmap', 'imagery', 'user', 'import'),
        kind: Sequelize.STRING,

        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('tags')
  },

}

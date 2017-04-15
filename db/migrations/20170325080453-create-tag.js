module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('tags', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        // taggable_id: Sequelize.INTEGER,

        name: Sequelize.STRING,
        status: Sequelize.STRING,
        kind: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        // kind: Sequelize.INTEGER,
        // kind: Sequelize.ENUM('openstreetmap', 'imagery', 'user', 'import'),
      })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('tags')
  },

}

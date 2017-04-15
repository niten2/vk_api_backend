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
        status: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        kind: Sequelize.ENUM('groups', 'users'),

        // taggable_id: Sequelize.INTEGER,
        // kind: Sequelize.STRING,
        // kind: Sequelize.INTEGER,
      })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('tags')
  },

}

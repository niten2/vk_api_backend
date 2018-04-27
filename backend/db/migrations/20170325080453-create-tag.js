module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('vk_tags', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        name: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        status: Sequelize.ENUM('active', 'inactive'),
        kind: Sequelize.ENUM('groups', 'persons'),
        user_id: Sequelize.INTEGER,
      })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('tags')
  },

}

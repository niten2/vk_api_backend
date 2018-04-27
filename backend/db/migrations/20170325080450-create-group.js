module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('vk_groups', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        screen_name: Sequelize.STRING,
        gid: Sequelize.STRING,
        name: Sequelize.STRING,
        members_count: Sequelize.STRING,
        note: Sequelize.STRING,
        photo_50: Sequelize.STRING,
        status: Sequelize.ENUM('active', 'inactive'),

        user_id: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('groups')
  },

}

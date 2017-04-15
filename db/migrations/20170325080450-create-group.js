module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('groups', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        // tag_id: Sequelize.STRING,
        // tag_id: Sequelize.INTEGER,
        // taggable_id: Sequelize.INTEGER,

        screen_name: Sequelize.STRING,
        gid: Sequelize.STRING,
        name: Sequelize.STRING,
        members_count: Sequelize.STRING,
        note: Sequelize.STRING,
        photo_50: Sequelize.STRING,
        status: Sequelize.STRING,

        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('groups')
  },

}

module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('persons', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        username: Sequelize.STRING,
        uid: Sequelize.STRING,
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        followers_count: Sequelize.STRING,
        sex: Sequelize.STRING,
        city: Sequelize.STRING,
        bdate: Sequelize.STRING,
        crop_photo_url: Sequelize.STRING,
        status: Sequelize.STRING,

        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },

        updatedAt: Sequelize.DATE,

      })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users')
  },

}

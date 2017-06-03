module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('clients', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        number: Sequelize.INTEGER,
        name: Sequelize.STRING,
        phone: Sequelize.INTEGER,
        date_birth: Sequelize.STRING,
        note: Sequelize.STRING,

        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,

      })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('item_tag')
  },

}

module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('settings', "user_id", Sequelize.INTEGER)
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('settings', "user_id", Sequelize.INTEGER)
  },

}

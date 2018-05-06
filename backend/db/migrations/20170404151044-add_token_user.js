module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('users', "vk_token", Sequelize.STRING)
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', "vk_token", Sequelize.STRING)
  },

}

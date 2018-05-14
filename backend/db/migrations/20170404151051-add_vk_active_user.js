module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('users', "vk_active", Sequelize.BOOLEAN)
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', "vk_active", Sequelize.BOOLEAN)
  },

}

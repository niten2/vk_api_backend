module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('vk_persons', "deactivated", Sequelize.BOOLEAN)
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('vk_persons', "deactivated", Sequelize.BOOLEAN)
  },

}

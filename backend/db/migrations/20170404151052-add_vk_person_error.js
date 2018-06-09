module.exports = {

  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('vk_persons', "error", Sequelize.BOOLEAN)
    return queryInterface.addColumn('vk_persons', "error_message", Sequelize.STRING)
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('vk_persons', "error", Sequelize.BOOLEAN)
    return queryInterface.removeColumn('vk_persons', "error_message", Sequelize.STRING)
  },

}


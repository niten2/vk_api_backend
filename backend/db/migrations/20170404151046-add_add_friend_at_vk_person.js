module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('vk_persons', "addFriendAt", Sequelize.DATE)
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('vk_persons', "addFriendAt", Sequelize.DATE)
  },

}

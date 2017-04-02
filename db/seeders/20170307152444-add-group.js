module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('groups', [{
      screen_name: 'screen_name',
      createdAt: new Date(),
    }], {})
  },

  down: function (queryInterface, Sequelize) {

  }

}

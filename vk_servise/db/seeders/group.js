module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('groups', [
      {
        screen_name: 'screen_name',
        createdAt: new Date(),
        status: 'active',
      },

    ], {})
  },

  down: function (queryInterface, Sequelize) {

  }

}

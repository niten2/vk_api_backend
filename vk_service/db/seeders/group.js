module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('groups', [
      {
        screen_name: 'screen_name',
        createdAt: new Date(),
        status: 'active',
        user_id: 1,
      },

    ], {})
  },

  down: function (queryInterface, Sequelize) {

  }

}

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('settings', [
      {
        id: 1,
        name: 'per page',
        value: '20',
        createdAt: new Date(),
      }
    ], {})
  },

  down: function (queryInterface, Sequelize) { }
}

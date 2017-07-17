module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('users', [
      {
        name: 'first_name',
        password: 'last_name',
        createdAt: new Date(),
      }
    ], {})
  },

  down: function (queryInterface, Sequelize) {

  }

}

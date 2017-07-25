module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'first_name',
        password: '1234',
        email: 'email@email.com',
        createdAt: new Date(),
      }
    ], {})
  },

  down: function (queryInterface, Sequelize) { }
}

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'first_name',
        email: 'email@email.com',
        password: '1234',
        createdAt: new Date(),
      }
    ], {})
  },

  down: function (queryInterface, Sequelize) { }
}

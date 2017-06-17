module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('clients', [
      {
        number: 111,
        name: "Olya",
        phone: 89135000150,
        date_birth: "22 03",
        note: "active",
      },

    ], {})
  },

}

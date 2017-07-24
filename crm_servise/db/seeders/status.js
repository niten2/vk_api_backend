module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('statuses', [
      {
        name: "Status",
      },

    ], {})
  },

}

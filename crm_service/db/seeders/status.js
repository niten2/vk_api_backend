module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('statuses', [
      {
        id: 1,
        name: "Active",
      },

      {
        id: 2,
        name: "IN Active",
      },

    ], {})
  },

}

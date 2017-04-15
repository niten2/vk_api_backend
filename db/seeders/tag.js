module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('tags', [{
      name: 'name',
      status: 0,
      // taggable_id: 1,

      kind: "users",
      createdAt: new Date(),
    }], {})

  },

  down: function (queryInterface, Sequelize) {

  }

}

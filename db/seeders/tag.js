module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('tags', [{
      name: 'name',
      // taggable_id: 1,

      // kind: 1,
      createdAt: new Date(),
    }], {})
  },

  down: function (queryInterface, Sequelize) {

  }

}

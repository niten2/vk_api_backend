module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('groups', [{
      // tag_id: 2,

      screen_name: 'screen_name',
      createdAt: new Date(),
    }], {})
  },

  down: function (queryInterface, Sequelize) {

  }

}

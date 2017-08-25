module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('tags', [
      {
        name: 'user-1',
        status: "active",
        kind: "users",

        user_id: 1,
        createdAt: new Date(),
      },
      {
        name: 'user-2',
        status: "active",
        kind: "users",

        user_id: 1,
        createdAt: new Date(),
      },

      {
        name: 'group-1',
        status: "active",
        kind: "groups",

        user_id: 1,
        createdAt: new Date(),
      },
      {
        name: 'group-2',
        status: "active",
        kind: "groups",

        user_id: 1,
        createdAt: new Date(),
      },

    ])

  },

  // down: function (queryInterface, Sequelize) {}
}

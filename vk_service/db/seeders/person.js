module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('persons', [
      {
        uid: 'uid',
        first_name: 'first_name',
        last_name: 'last_name',
        followers_count: 'followers_count',
        sex: 'sex',
        city: 'city',
        bdate: 'bdate',
        crop_photo_url: 'crop_photo_url',
        status: 'active',

        user_id: 1,
        createdAt: new Date(),
      }
    ], {})
  },

  down: function (queryInterface, Sequelize) {

  }

}

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('users', [{
      uid: 'uid',
      first_name: 'first_name',
      last_name: 'last_name',
      followers_count: 'followers_count',
      sex: 'sex',
      city: 'city',
      bdate: 'bdate',
      crop_photo_url: 'crop_photo_url',
      status: 'status',
      createdAt: new Date(),

    }], {})
  },

  down: function (queryInterface, Sequelize) {

  }

}

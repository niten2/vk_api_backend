module.exports = {

  up: function (queryInterface, DataType) {
    return queryInterface.createTable('vk_persons', {
        id: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        uid: {
          type: DataType.STRING,
          allowNull: false,
          unique: true,
        },

        first_name: {
          type: DataType.STRING,
          field: 'first_name',
        },

        last_name: DataType.STRING,

        followers_count: {
          type: DataType.STRING
        },

        sex: {
          type: DataType.STRING
        },

        city: {
          type: DataType.STRING
        },

        bdate: {
          type: DataType.STRING
        },

        crop_photo_url: DataType.STRING,

        status: DataType.ENUM('active', 'inactive', "error"),

        isFriend: {
          type: DataType.BOOLEAN,
          defaultValue: false,
        },

        user_id: DataType.INTEGER,

        createdAt: {
          type: DataType.DATE,
          allowNull: false
        },
        updatedAt: DataType.DATE,

      })
  },

  down: function (queryInterface, DataType) {
    return queryInterface.dropTable('users')
  },

}

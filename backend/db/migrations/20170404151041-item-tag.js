module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('vk_item_tags', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        tag_id: {
          type: Sequelize.INTEGER,
          unique: 'item_tag_taggable'
        },

        taggable: {
          type: Sequelize.ENUM('groups', 'persons'),
          unique: 'item_tag_taggable'
        },

        taggable_id: {
          type: Sequelize.INTEGER,
          unique: 'item_tag_taggable',
          references: null
        },

        user_id: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('item_tag')
  },

}

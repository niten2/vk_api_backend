import User from './user'
import Group from './group'
import Tag from './tag'
import ItemTag from './itemTag'
import Client from './client'

User.belongsToMany(Tag, {
  through: {
    model: ItemTag,
    unique: false,
    scope: {
      taggable: 'users'
    },
  },
  foreignKey: 'taggable_id',
  constraints: false,
})

Group.belongsToMany(Tag, {
  through: {
    model: ItemTag,
    unique: false,
    scope: {
      taggable: 'groups'
    },
  },
  foreignKey: 'taggable_id',
  constraints: false,
})

Tag.belongsToMany(User, {
  through: {
    model: ItemTag,
    unique: false
  },
  foreignKey: 'tag_id',
  constraints: false,
})

Tag.belongsToMany(Group, {
  through: {
    model: ItemTag,
    unique: false
  },
  foreignKey: 'tag_id',
  constraints: false,
})

export {
  User,
  Group,
  Tag,
  ItemTag,
  Client,
}

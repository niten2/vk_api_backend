import User from './user'
import Group from './group'
import Tag from './tag'
import ItemTag from './item_tag'

User.belongsToMany(Tag, {
  through: {
    model: ItemTag,
    unique: false,
    scope: {
      taggable: 'users'
    }
  },
  foreignKey: 'taggable_id',
  constraints: false,
})

Group.belongsToMany(Tag, {
  through: {
    model: ItemTag,
    unique: false
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

export default {
  User: User,
  Group: Group,
  Tag: Tag,
  ItemTag: ItemTag,
}

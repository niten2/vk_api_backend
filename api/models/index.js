import User from './user'
import Group from './group'
import Tag from './tag'
import ItemTag from './item_tag'

// Tag.hasMany(User, { foreignKey: 'taggable_id' })
// User.belongsTo(Tag, { foreignKey: 'taggable_id' })

// console.log(ItemTag)

// User.belongsToMany(Tag, {
//   through: {
//     model: ItemTag,
//     unique: false,
//     scope: {
//       taggable: 'user'
//     }
//   },
//   foreignKey: 'taggable_id',
//   constraints: false
// })

// Tag.belongsToMany(User, {
//   through: {
//     model: ItemTag,
//     unique: false,
//   },
//   foreignKey: 'tag_id',
//   constraints: false,
// })

// Tag = sequelize.define('tag', {
//   name: DataTypes.STRING
// });

// Tag.belongsToMany(User, {
//   through: 'ItemTag'
// })

// User.belongsToMany(Tag, {
//   through: 'ItemTag'
// })


User.belongsToMany(Tag, {
  // as: "getTest",
  through: {
    model: ItemTag,
    unique: false,
    scope: {
      taggable: 'user'
    }
  },
  foreignKey: 'taggable_id',
  constraints: false
});

Tag.belongsToMany(User, {
  // as: 'pendingTags',
  through: {
    model: ItemTag,
    unique: false
  },
  foreignKey: 'tag_id',
  constraints: false
});


console.log(Tag.prototype)
// Tag.prototype.getItem = () => {
//   console.log(111)
//   return "test"
//   // return this['get' + this.get('commentable').substr(0, 1).toUpperCase() + this.get('commentable').substr(1)]();
// }


export default {
  User: User,
  Group: Group,
  Tag: Tag,
}

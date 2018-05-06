import User from './user'
import VkPerson from './vkPerson'
import Setting from './setting'

User.hasMany(VkPerson, { foreignKey: 'user_id', as: 'VkPersons' })
User.hasMany(Setting, { foreignKey: 'user_id', as: 'Settings' })

// VkPerson.belongsTo(User, { foreignKey: 'user_id', targetKey: 'User' })

export {
  User,
  Setting,
  VkPerson,
}

// Person.belongsToMany(Tag, {
//   through: {
//     model: ItemTag,
//     unique: false,
//     scope: {
//       taggable: 'persons'
//     },
//   },
//   foreignKey: 'taggable_id',
//   constraints: false,
// })

import User from './user'
import vkPerson from './vkPerson'
import Setting from './setting'

export {
  User,
  Setting,
  vkPerson,
}

// import Person from './person'
// import Group from './group'
// import Tag from './tag'
// import ItemTag from './itemTag'
// // import Client from './client'

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

// Group.belongsToMany(Tag, {
//   through: {
//     model: ItemTag,
//     unique: false,
//     scope: {
//       taggable: 'groups'
//     },
//   },
//   foreignKey: 'taggable_id',
//   constraints: false,
// })

// Tag.belongsToMany(Person, {
//   through: {
//     model: ItemTag,
//     unique: false
//   },
//   foreignKey: 'tag_id',
//   constraints: false,
// })

// Tag.belongsToMany(Group, {
//   through: {
//     model: ItemTag,
//     unique: false
//   },
//   foreignKey: 'tag_id',
//   constraints: false,
// })

// export {
//   Person,
//   Group,
//   Tag,
//   ItemTag,
//   // Client,
// }

import User from './user'
import Group from './group'
import Tag from './tag'

// Player.belongsTo(Team)
// Player.belongsTo(Team)

// m.Book.hasMany(m.Article, {through: 'book_articles'})
// m.Article.hasMany(m.Books, {through: 'book_articles'})

// this.Comment = this.sequelize.define('comment', {
//   title: Sequelize.STRING,
//   commentable: Sequelize.STRING,
//   commentable_id: Sequelize.INTEGER
// })

// this.Comment.prototype.getItem = function() {
//   return this['get' + this.get('commentable').substr(0, 1).toUpperCase() + this.get('commentable').substr(1)]()
// }

// User.hasMany(Tag, {
//   foreignKey: 'taggable_id',
//   constraints: false,
//   scope: {
//     commentable: 'tag'
//   }
// })

// Tag.belongsTo(User, {
//   foreignKey: 'taggable_id',
//   constraints: false,
//   as: 'tag'
// })

// image.getComments()

// Group.hasMany(Tag, {
//   foreignKey: 'commentable_id',
//   constraints: false,
//   scope: {
//     commentable: 'image'
//   }
// })

// this.Comment.belongsTo(this.Image, {
//   foreignKey: 'commentable_id',
//   constraints: false,
//   as: 'image'
// })




export default {
  User: User,
  Group: Group,
  Tag: Tag,
}

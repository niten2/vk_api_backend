import User from './user'
import Group from './group'
import Tag from './tag'

// Player.belongsTo(Team);
// Player.belongsTo(Team);

// m.Book.hasMany(m.Article, {through: 'book_articles'});
// m.Article.hasMany(m.Books, {through: 'book_articles'});


export default {
  User: User,
  Group: Group,
  Tag: Tag,
}

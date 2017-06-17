// node_modules/.bin/sequelize migration:create
// node_modules/.bin/sequelize db:migrate
// node_modules/.bin/sequelize db:migrate:old_schema
// node_modules/.bin/sequelize db:migrate:undo
// node_modules/.bin/sequelize db:migrate:undo:all
// node_modules/.bin/sequelize db:seed:create
// node_modules/.bin/sequelize seed:generate
// node_modules/.bin/sequelize db:seed:undo
// node_modules/.bin/sequelize db:seed:undo:all
// node_modules/.bin/sequelize help:db:seed
// node_modules/.bin/sequelize --require ./babelhook db:seed:all
// // ---
// node_modules/.bin/sequelize migration:create
// node_modules/.bin/sequelize db:seed:create
// node_modules/.bin/sequelize db:migrate
// node_modules/.bin/sequelize db:seed:all
// node_modules/.bin/sequelize help:migration:create
// sequelize help:<task-name>

// db:migrate: "node_modules/.bin/sequelize db:migrate --migrations-path=db/migrations"
// db:migration "node_modules/.bin/sequelize migration:create --migrations-path=db/migrations"
// db:seed "node_modules/.bin/sequelize db:seed:all --seeders-path=db/seeders"
// db:drob "rm -rf db/database.dev.sqlite"


// npm install -g node-inspector@0.7.4
// https://www.npmjs.com/package/node-inspector

// // models.Tag.findAll({
// //   include: [
// //     { model: models.User }, // load all pictures
// //     // { model: Picture, as: 'ProfilePicture' }, // load the profile picture. Notice that the spelling must be the exact same as the one in the association
// //   ]
// // }).then(response => {

// //   console.log(response)
// // })

// // models.User.findAll().then(response => {
// //   console.log(response)
// // })


// // Player.belongsTo(Team)
// // Player.belongsTo(Team)

// // m.Book.hasMany(m.Article, {through: 'book_articles'})
// // m.Article.hasMany(m.Books, {through: 'book_articles'})

// // this.Comment = this.sequelize.define('comment', {
// //   title: Sequelize.STRING,
// //   commentable: Sequelize.STRING,
// //   commentable_id: Sequelize.INTEGER
// // })

// // this.Comment.prototype.getItem = function() {
// //   return this['get' + this.get('commentable').substr(0, 1).toUpperCase() + this.get('commentable').substr(1)]()
// // }

// // console.log(111)

// // User.hasMany(User, {
// //   foreignKey: 'taggable_id',
// //   constraints: false,
// //   // scope: {
// //   //   commentable: 'tag'
// //   // }
// // })

// // User.belongsTo(Tag, {
// //   foreignKey: 'taggable_id',
// //   constraints: false,
// //   as: 'tag'
// // })

// // Tag.hasMany(User, {
// //   foreignKey: 'taggable_id',
// // })



(function(R) {
    var incomplete = R.filter(R.where({complete: false}));
    var sortByDate = R.sortBy(R.prop('dueDate'));
    var sortByDateDescend = R.compose(R.reverse, sortByDate);
    var importantFields = R.project(['title', 'dueDate']);
    var groupByUser = R.partition(R.prop('username'));
    var activeByUser = R.compose(groupByUser, incomplete);
    var gloss = R.compose(importantFields, R.take(5), sortByDateDescend);
    var topData = R.compose(gloss, incomplete);
    var topDataAllUsers = R.compose(R.mapObj(gloss), activeByUser);
    var byUser = R.use(R.filter).over(R.propEq("username"));

    log("Gloss for Scott:");
    log(topData(byUser("Scott", tasks)));
    log("====================");
    log("Gloss for everyone:");
    log(topDataAllUsers(tasks));
}(ramda));

const R = require('ramda');
const prop = R.prop;
const path = R.path;
const curry = R.curry;

const Maybe = require('ramda-fantasy').Maybe;

const getURLForUser = (user) => {
  return Maybe(user)
    .map(path(['prefs', 'languages', 'primary']))
    .chain(maybeGetUrl)
}

const maybeGetUrl = R.curry((allUrls, language) => {
    return Maybe(allUrls[language]);
})(indexURLs)

function boot(user, defaultURL) {
  showIndexPage( getURLForUser(user).getOrElse(defaultURL) )
}

//'[[http://site.com/sp']];;
boot(joeUser, "http://site.com/en")



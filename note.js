client.query({
  query: gql`
    query AllLinks {
      allLinks {
        id
      }
    }
  `
}).then(response => console.log(response.data.allLinks))

export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' }) (LinkList)
this.props.history.push(`/new/1`)

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    const token = localStorage.getItem(GC_AUTH_TOKEN)
    req.options.headers.authorization = token ? `Bearer ${token}` : null
    next()
  }
}])



// 923019474
// 65s2dt


const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($name: String!, $email: String!, $password: String!) {
    createUser(
      name: $name,
      authProvider: {
        email: {
          email: $email,
          password: $password
        }
      }
    ) {
      id
    }

    signinUser(email: {
      email: $email,
      password: $password
    }) {
      token
      user {
        id
      }
    }
  }
`

const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    signinUser(email: {
      email: $email,
      password: $password
    }) {
      token
      user {
        id
      }
    }
  }
`

export default compose(
  graphql(CREATE_USER_MUTATION, { name: 'createUserMutation' }),
  graphql(SIGNIN_USER_MUTATION, { name: 'signinUserMutation' })
)(Login)


// export default graphql(ClientListQuery, { options: { pollInterval: 5000 } })(List)


export default compose(
  graphql(clientQuery, {
    options: (props) => ({ variables: { id: props.match.params.id } })
  }),
  graphql(clientUpdate, {
    name: "clientUpdate"
  }),
)(Update)


export default graphql(
  // signinUser, {name: 'signinUser'})
  // (graphql(userQuery, { options: { fetchPolicy: 'network-only' }})
  // (withRouter(CreateLogin))
)

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




// DEFAULT ROUTE
import { AsyncRouter } from 'express-async-router'
import Settings from "config/settings"
import Clients from './clients'

// import GraphqlApi from "./graphql_api"

// grahpql
import bodyParser from 'body-parser'
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express'

import { schema } from 'api/resourses/schema'
// grahpql


export default (context) => {
  const app = context.app
	const api = AsyncRouter()

  api.all('/', () => ({
    servise: "crm_servise",
    version: 'current version /v2 with graphql' })
  )

  // api.all('/', () => ({ version: 'current version /v2', servise: "crm servise" }) )

  api.use('/v1/clients', Clients)

  context.app.use('/', api)

  // context.app.use('/graphql', GraphqlApi)


  // grahpql
  api.use('/v2/graphql', bodyParser.json(), graphqlExpress({
    schema
  }))

  api.use('/v2/graphiql', graphiqlExpress({
    endpointURL: '/v2/graphql'
  }))
  // grahpql



  catch_404_and_forward_to_error_handler(app)
  development_error_handler_will_print_stacktrace(app)
  production_error_handler_no_stacktraces_leaked_to_user(app)
}

const catch_404_and_forward_to_error_handler = (app) => {
  app.use((req, res, next) => {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
  })
}

const development_error_handler_will_print_stacktrace = (app) => {
  if (Settings.env == 'development') {
    app.use((err, req, res, next) => {
      res.status(err.status || 500)
      res.json({"error": err.message})
    })
  }
}

const production_error_handler_no_stacktraces_leaked_to_user = (app) => {
  app.use((err, req, res, next) => {
    airbrake.notify(err)
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err,
    })
  })
}


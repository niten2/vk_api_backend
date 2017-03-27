import App from './app'
const app = new App()
app.run()

// import config from 'config/database'
// import Models from './models'

// sync() will create all table if they doesn't exist in database
// Models.sequelize.sync().then(function () {
//   server.listen(port);
//   server.on('error', onError);
//   server.on('listening', onListening);
// });
// const app = new App({ config })


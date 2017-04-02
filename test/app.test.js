process.env.NODE_ENV = 'test'
// process.env.DB_URL="mongodb://0.0.0.0:27017/test"
// process.env.SECRET_KEY="8274547653"

// import config from 'config/database'
import App from "app"

const app = new App()
app.run()
const context = app.this()

export default context

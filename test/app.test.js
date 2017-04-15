process.env.NODE_ENV = 'test'

import App from "config/app"
const app = new App()
const context = app.this()

export default context


import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "src/config/routes"

const rootEl = document.getElementById('root') as HTMLElement

ReactDOM.render(
  <App />,
  rootEl
)

if (module.hot) {
  module.hot.accept("src/config/routes", () => {
    const NextApp = require("src/config/routes").default

    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}

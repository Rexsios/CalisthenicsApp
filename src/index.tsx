import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./Containers/App"
import * as serviceWorker from "./serviceWorker"
import WebFont from "webfontloader"

WebFont.load({
  google: {
    families: ["Titillium Web:300,400,700", "Sriracha:400", "Roboto:400,900", "Josefin Sans:700", "Poppins:400,600,700"],
  },
})

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

import { EnvironmentPlugin } from "webpack"
const dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new dotenv({

    })
  ]
}

const { ESLINT_MODES } = require("@craco/craco");
module.exports = {
  eslint: {
    configure: {
      rules: {
        "no-unused-vars": "off"
      }
    }
  }
};
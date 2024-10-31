const CracoEnvPlugin = require("craco-plugin-env");

module.exports = {
  plugins: [
    {
      plugin: CracoEnvPlugin,
      options: {
        variables: {},
      },
    },
  ],
  babel: {
    plugins: ["babel-plugin-transform-typescript-metadata"],
  },
};

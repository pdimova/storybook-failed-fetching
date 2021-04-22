const path = require("path")

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"

  ],
  "addons": [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      }
    }
  ],
  // https://github.com/storybookjs/storybook/issues/13277
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
          "@emotion/provider": toPath("node_modules/@emotion/provider"),
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
          "babel-plugin-emotion": toPath("node_modules/@emotion/babel-plugin"),
        }
      }
    };
  }
}
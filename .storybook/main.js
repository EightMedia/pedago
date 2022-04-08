module.exports = {
  stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
    "storybook-addon-designs",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
};

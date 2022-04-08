// yarn add postcss-flexbugs-fixes postcss-preset-env -D
module.exports = {
  plugins: {
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 0,
      features: {
        "custom-properties": {
          disableDeprecationNotice: true,
          importFrom: "./lib/styles/variables.css",
          preserve: true,
        },
        "custom-media-queries": {
          importFrom: "./lib/styles/mediaQueries.css",
        },
        "nesting-rules": true,
      },
    },
  },
};

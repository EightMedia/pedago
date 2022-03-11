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
          importFrom: "./lib/styles/vars.css",
          preserve: true,
        },
        "custom-media-queries": {
          importFrom: "./lib/styles/globals.css",
        },
        "nesting-rules": true,
      },
    },
  },
};

// // yarn add postcss-flexbugs-fixes postcss-preset-env -D
// module.exports = {
//   plugins: {
//     "postcss-flexbugs-fixes": {},
//     "postcss-preset-env": {},
//   },
// };

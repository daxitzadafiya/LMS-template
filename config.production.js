/*
|-------------------------------------------------------------------------------
| Production config           https://maizzle.com/docs/environments/#production
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

module.exports = {
  assets: {
    source: "src/images",
    destination: "images",
  },
  build: {
    templates: {
      destination: {
        path: "dist",
      },
    },
  },
  inlineCSS: {
    mergeLonghand: true,
  },
  prettify: true,
  removeUnusedCSS: true,
};

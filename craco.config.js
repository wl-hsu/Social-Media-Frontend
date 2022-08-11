const CracoAlias = require('craco-alias');

// webpack configuration
module.exports = {
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [
            ['postcss-px-to-viewport-with-include', {
              unitToConvert: 'px', // (String) unit to convert, by default, it is px.
              viewportWidth: 414, // (Number) The width of the viewport.
              viewportHeight: 896, // UI
              unitPrecision: 6, // (Number) The decimal numbers to allow the vw units to grow to.
              /**
               * propList (Array) The properties that can change from px to vw.
               * Values need to be exact matches.
               * Use wildcard * to enable all properties. Example: ['*']
               * Use * at the start or end of a word. (['position'] will match background-position-y)
               * Use ! to not match a property. Example: ['*', '!letter-spacing']
               * Combine the "not" prefix with the other prefixes. Example: ['', '!font']
               */
              propList: ['*'],
              viewportUnit: 'vw', // (String) Expected units.)
              fontViewportUnit: 'vw', //  (String) Expected units for font.
              selectorBlackList: ['ignore'], // (Array) The selectors to ignore and leave as px
              minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
              mediaQuery: true, // (Boolean) replaces rules containing vw instead of adding fallbacks.
              replace: true, // (Boolean) replaces rules containing vw instead of adding fallbacks.
              exclude: [/node_modules/], // (Regexp or Array of Regexp) Ignore some files like 'node_modules'
              landscape: false, // (Boolean) Adds @media (orientation: landscape) with values converted via landscapeWidth.
            }],
          ],
        },
      },
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: './src',
        source: 'jsconfig',
      },
    },
  ],
};

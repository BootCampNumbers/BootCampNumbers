/**
 * These rules enforce the Hack Reactor Style Guide and the AirBnB style guide
 *
 * Visit these repos for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 *   https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
 */

module.exports = {
  extends: [
    './node_modules/eslint-config-hackreactor/index.js',
    './node_modules/eslint-config-airbnb/index.js' 
  ],
  rules: {
    'comma-dangle': 'off',
    'react/require-default-props': 'off'
  }
};

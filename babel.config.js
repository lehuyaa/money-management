module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [[require.resolve('babel-plugin-module-resolver')], 'jest-hoist'],
};

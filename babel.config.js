module.exports = function (api) {
  api.cache(true);
  return {
    "compact": false,
      presets: ['babel-preset-expo'],
      plugins: [
          [
              'module-resolver',
              {
                  alias: {
                      '@': './src',
                      'assets': './assets',
                  }
              },
          ],
          'react-native-reanimated/plugin'
      ]
  };
};
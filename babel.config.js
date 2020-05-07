module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          navigations: './src/navigations',
          screens: './src/screens',
          styles: './src/styles',
          data: './src/data',
        },
      },
    ],
  ],
};

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
          navigations: './src/navigations',
          screens: './src/screens',
          data: './src/data',
          global: './src/global',
          tools: './src/tools',
          api: './src/api',
          containers: './src/containers',
        },
      },
    ],
  ],
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./assets",
            "@components": "./src/components",
            "@constants": "./src/utilities/constants.ts",
            "@hooks": "./src/hooks",
            "@services": "./src/services",
            "@screens": "./src/screens",
            "@store": "./src/store",
            "@theme": "./src/utilities/theme.ts",
            "@utilities": "./src/utilities",
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/componentes",
            "@sreens": "./src/sreens",
            "@storage": "./src/storage",
            "@utils": "./src/utils",
            "@theme": "./src/theme",
          },
        },
      ],
    ],
  };
};

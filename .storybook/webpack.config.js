const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app')],
        },
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias["@/apollo"] = path.resolve(__dirname, "../apollo");
  config.resolve.alias["@/components"] = path.resolve(__dirname, "../components");
  config.resolve.alias["@/test"] = path.resolve(__dirname, "../test");
  config.resolve.alias["@/theme"] = path.resolve(__dirname, "../theme");
  config.resolve.alias["@/typings"] = path.resolve(__dirname, "../typings");

  return config;
};

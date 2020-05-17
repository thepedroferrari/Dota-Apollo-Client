const webpack = require('webpack');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });

  config.plugins.push(
    new webpack.DefinePlugin({
      SC_DISABLE_SPEEDY: true
    })
  );

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};

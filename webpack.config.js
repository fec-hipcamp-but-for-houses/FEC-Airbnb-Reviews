const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/Reviews.jsx'),
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: [/\.css$/],
        include: path.join(__dirname, '/client/src/'),
        use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { sourceMap: true, modules: true, localIdentName: '[local]___[hash:base64:5]' } }],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/public/'),
  },
};

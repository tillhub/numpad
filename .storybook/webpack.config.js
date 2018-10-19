const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "file-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  }
}

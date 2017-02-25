module.exports = {
  module: {
    loaders: [
      {
        test: /(\.scss)$/,
        loaders: [
          'style',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]',
          'sass?sourceMap'
        ]
      }
    ]
  }
};

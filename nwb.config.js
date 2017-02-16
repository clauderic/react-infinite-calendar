module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'InfiniteCalendar',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    loaders: {
      'sass-css': {
        modules: true,
        localIdentName: 'Cal__[name]__[local]',
      }
    }
  }
}

/* eslint-disable */

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'InfiniteCalendar',
      externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-addons-css-transition-group': 'ReactCSSTransitionGroup'
      }
    }
  },
  babel: {
    plugins: [
      ['css-modules-transform', {
        generateScopedName: 'Cal__[name]__[local]',
        "preprocessCss": "./preprocess-css.js",
        "extensions": [".scss"],
        "extractCss": "./styles.css"
      }]
    ]
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

var webpackConfig = require('./webpack.config.js');

var configuration = {};

configuration = {
  browsers: ['Chrome'],
  singleRun: true,
  frameworks: ['mocha'],
  files: ['app/tests/**/*.test.jsx'],
  preprocessors: {
    'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
  },
  reporters: ['mocha'],
  client: {
    mocha: {
      timeout: '5000'
    }
  },
  customLaunchers: {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  },
  webpack: webpackConfig,
  webpackServer: {
    noInfo: true
  }
};

if (process.env.TRAVIS) {
  configuration.browsers = ['Chrome_travis_ci'];
}

module.exports = (config) => {
  config.set(configuration);
};

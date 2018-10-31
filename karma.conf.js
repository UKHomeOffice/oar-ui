module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      // 'karma-phantomjs-launcher',
      'karma-chrome-launcher',
    ],
    files: [
      { pattern: 'src/*.spec.js', watched: false },
      { pattern: 'src/**/*.spec.js', watched: false }
    ],
    preprocessors: {
      'src/*.spec.js': [ 'webpack' ],
      'src/**/*.spec.js': [ 'webpack' ]
    },
    webpack: {
      mode: 'none'
      // Any custom webpack configuration...
    },
    autoWatch: true,
    browsers: ['Chrome'],
    webpackMiddleware: {
      // Any custom webpack-dev-middleware configuration...
    }
  });
};



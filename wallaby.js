module.exports = wallaby => ({
  files: ['src/**/*.js', '!src/**/*.test.js'],
  tests: ['src/**/*.test.js'],
  compilers: {
    '**/*.js*': wallaby.compilers.babel()
  },
  env: {
    type: 'node',
    runner: 'node'
  },
  testFramework: 'jest',
  debug: true
});

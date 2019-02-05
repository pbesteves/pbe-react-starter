module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/index.js',
    '!src/**/*.test.{js,jsx}',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98
    }
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': 'identity-obj-proxy',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/fileMock.js'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
}

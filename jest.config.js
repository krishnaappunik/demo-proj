const config = {
  preset: 'react',
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  collectCoverageFrom: ['**/*.js'],
  globals: {
    __DEV__: true,
    __TEST__: true,
  },
  snapshotSerializers: ['jest-serializer-html'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!(jest-)/)'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

module.exports = config;
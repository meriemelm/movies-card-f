module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
      moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
      },
      transformIgnorePatterns: [
        '/node_modules/',
        '\\.css$'
      ],
  };
  
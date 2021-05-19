module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
    // "react-spring": "<rootDir>/node_modules/react-spring/web.cjs"
  }
  // testEnvironment: 'jsdom',
  // collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.ts(x)'],
  // setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}

const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^next/image$': '<rootDir>/__mocks__/next/image.js',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/cypress/'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/tests/**/*.test.{ts,tsx}'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@testing-library|@babel)/)',
  ],
}

module.exports = createJestConfig(customJestConfig)

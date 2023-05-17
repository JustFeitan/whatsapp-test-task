/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleDirectories: ['node_modules', 'bower_components'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|scss|sass)$': '<rootDir>/node_modules/identity-obj-proxy',
        '^@hooks(.*)$': "<rootDir>/src/hooks/$1",
        '^@models(.*)$': "<rootDir>/src/models/$1",
        "^@components(.*)$": "<rootDir>/src/components/$1",
        "^@store(.*)$": "<rootDir>/src/store/$1",
        "^@helpers(.*)$": "<rootDir>/src/helpers/$1",
        "^@services(.*)$": "<rootDir>/src/services/$1",
    },
    transform: {
       "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
    },
};

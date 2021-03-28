module.exports = {
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(s?css)$': 'identity-obj-proxy',
      '^@carbon/icons-react/es/(.*)$': '@carbon/icons-react/lib/$1',
      '^carbon-components-react/es/(.*)$': 'carbon-components-react/lib/$1',
      '@openmrs/esm-framework': '<rootDir>/__mocks__/openmrs-esm-framework.mock.tsx',
      'lodash-es': 'lodash',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  };
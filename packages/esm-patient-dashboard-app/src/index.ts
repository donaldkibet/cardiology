import { defineConfigSchema, getAsyncLifecycle } from '@openmrs/esm-framework';
import { backendDependencies } from './openmrs-backend-dependencies';

const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

function setupOpenMRS() {
    const moduleName = '@mtrh/esm-patient-dashboard-app';

    const options = {
        featureName: 'esm-patient-dashboard-app',
        moduleName,
    };

    defineConfigSchema(moduleName, {});

    return {
        pages: [],
        extensions: [],
    };
}

export { backendDependencies, importTranslation, setupOpenMRS };

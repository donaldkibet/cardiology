import {
  registerBreadcrumbs,
  defineConfigSchema,
  getAsyncLifecycle
} from "@openmrs/esm-framework";
import { esmHomeSchema } from "./openmrs-esm-home-schema";

const backendDependencies = {
  "webservices.rest": "2.24.0"
};

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

function setupOpenMRS() {
  const moduleName = "@mtrh/esm-home-app";
  const pageName = "home";

  const options = {
    featureName: pageName,
    moduleName
  };

  defineConfigSchema(moduleName, esmHomeSchema);

  registerBreadcrumbs([
    {
      path: `${window.spaBase}/${pageName}`,
      title: "Home"
    }
  ]);

  return {
    lifecycle: getAsyncLifecycle(() => import("./root.component"), options),
    activate: pageName,
    extensions: []
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };

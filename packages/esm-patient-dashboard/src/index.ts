import { getAsyncLifecycle } from "@openmrs/esm-react-utils";
import { defineConfigSchema, validators, Type } from "@openmrs/esm-config";
import { backendDependencies } from "./openmrs-backend-dependencies";

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

function setupOpenMRS() {
  const moduleName = "@mtrh/cardilogy-app";

  const options = {
    featureName: "login",
    moduleName,
  };

  defineConfigSchema(moduleName, {});

  return {
    lifecycle: getAsyncLifecycle(() => import("./root.component"), options),
    activate: "mtrh-cardiology",
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };

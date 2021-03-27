import {
  getAsyncExtensionLifecycle,
  getAsyncLifecycle,
} from "@openmrs/esm-react-utils";
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
    featureName: "mtrh-reports",
    moduleName,
  };

  defineConfigSchema(moduleName, {});

  return {
    lifecycle: getAsyncLifecycle(() => import("./root.component"), options),
    activate: "mtrh-cardiology",
    extensions: [
      {
        id: "mtrh-reports",
        slot: "home-page-buttons",
        load: getAsyncExtensionLifecycle(
          () => import("./links/report-links.component"),
          options
        ),
      },
    ],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };

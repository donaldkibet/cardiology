import {
  registerBreadcrumbs,
  defineConfigSchema,
  getAsyncLifecycle
} from "@openmrs/esm-framework";
import { backendDependencies } from "./openmrs-backend-dependencies";
import { configSchema } from "./config-schema";

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

function setupOpenMRS() {
  const moduleName = "@openmrs/esm-patient-chart-widgets";
  const parent = `${window.spaBase}/patient/:patient/chart`;

  defineConfigSchema(moduleName, configSchema);

  registerBreadcrumbs([
    {
      path: `${parent}/encounters`,
      title: "Encounters",
      parent
    },
    {
      path: `${parent}/summary`,
      title: "Summary",
      parent
    },
    {
      path: `${parent}/attachments`,
      title: "Attachments",
      parent
    },
    {
      path: `${parent}/results`,
      title: "Results",
      parent
    },
    {
      path: `${parent}/conditions`,
      title: "Conditions",
      parent
    },
    {
      path: `${parent}/immunizations`,
      title: "Immunizations",
      parent
    },
    {
      path: `${parent}/programs`,
      title: "Programs",
      parent
    },
    {
      path: `${parent}/allergies`,
      title: "Allergies",
      parent
    },
    {
      path: `${parent}/appointments`,
      title: "Appointments",
      parent
    }
  ]);

  return {
    pages: [],
    extensions: [
      {
        id: "attachments-overview-widget",
        slot: "attachments-overview-widget-ext",
        load: getAsyncLifecycle(
          () => import("./widgets/attachments/attachments-overview.component"),
          {
            featureName: "attachments-overview",
            moduleName
          }
        )
      },
      {
        id: "summary-menu-item",
        slot: "patient-chart-nav-menu",
        load: getAsyncLifecycle(() => import("./menu-items/summary-link"), {
          featureName: "summary-menu-item",
          moduleName
        })
      },
      {
        id: "results-menu-item",
        slot: "patient-chart-nav-menu",
        load: getAsyncLifecycle(() => import("./menu-items/results-link"), {
          featureName: "results-menu-item",
          moduleName
        })
      },
      {
        id: "capture-photo",
        slot: "capture-patient-photo",
        load: getAsyncLifecycle(
          () => import("./widgets/attachments/capture-photo.component"),
          {
            featureName: "capture-photo-widget",
            moduleName
          }
        )
      }
    ]
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };

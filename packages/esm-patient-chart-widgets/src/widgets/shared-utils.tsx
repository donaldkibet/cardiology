import isEmpty from "lodash-es/isEmpty";
import { newWorkspaceItem } from "@openmrs/esm-framework";

export interface DataCaptureComponentProps {
  entryStarted: () => void;
  entrySubmitted: () => void;
  entryCancelled: () => void;
  closeComponent: () => void;
}

export function openWorkspaceTab<
  TProps = DataCaptureComponentProps,
  TParams = any
>(
  componentToAdd: React.FC<TProps>,
  componentName: string,
  params?: TParams,
  requiresVisit = true
): void {
  newWorkspaceItem({
    component: componentToAdd,
    name: componentName,
    props: {
      match: { params: params ? params : {} }
    },
    inProgress: false,
    validations: (workspaceTabs: Array<{ component: React.FC }>) =>
      workspaceTabs.findIndex(tab => tab.component === componentToAdd)
  });
}

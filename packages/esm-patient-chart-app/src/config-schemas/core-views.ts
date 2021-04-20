export interface DashbardGridConfig {
  columns: number;
  type: "grid";
}

export interface DashboardTabConfig {
  type: "tabs";
}

export type DashbardLayoutConfig = DashbardGridConfig | DashboardTabConfig;

export interface DashboardConfig {
  name: string;
  slot: string;
  title: string;
  config: DashbardLayoutConfig;
}

export const defaultDashboardDefinitions: Array<DashboardConfig> = [
  {
    name: "summary",
    slot: "patient-chart-summary-dashboard-slot",
    config: { columns: 4, type: "grid" },
    title: "Summary"
  }
];

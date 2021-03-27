import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VisitReports from "./widgets/visits/visits-reports.component";

export default function Root() {
  return (
    <BrowserRouter basename={window.getOpenmrsSpaBase()}>
      <h2 style={{ padding: "3.5rem 2rem 2rem 2rem" }}>
        <VisitReports />
      </h2>
    </BrowserRouter>
  );
}

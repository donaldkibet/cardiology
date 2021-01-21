import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

export default function Root() {
  return (
    <BrowserRouter basename={window.getOpenmrsSpaBase()}>
      <h2 style={{ marginTop: "3rem" }}>Cardiology App</h2>
    </BrowserRouter>
  );
}

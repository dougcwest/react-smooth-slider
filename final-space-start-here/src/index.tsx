import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "fontsource-roboto";

ReactDOM.render(
  <App
    listings={false}
    activateListings={function (): void {
      throw new Error("Function not implemented.");
    }}
    collections={false}
    activateCollections={function (): void {
      throw new Error("Function not implemented.");
    }}
    releases={false}
    activateReleases={function (): void {
      throw new Error("Function not implemented.");
    }}
  />,
  document.getElementById("root")
);

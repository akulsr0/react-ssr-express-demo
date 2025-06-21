import { createElement } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const wait = (time = 2000) =>
  new Promise((resolve) => setTimeout(resolve, time));

console.log(
  `%cArtifical delay of 5s before hydrating our app, 
consider it as if we are importing some large modules. 
As of now we cannot interact with our app`,
  "font-size: 24px; color: darkgoldenrod;"
);

// Artifical delay of 5s before hydrating our app
wait(5000).then(() => {
  hydrateRoot(document.getElementById("root"), createElement(App));
  console.log(
    "%cHydration done: can interact with our app now",
    "font-size: 24px; color: green;"
  );
});

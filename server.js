import { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.js";

import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const clientShell = fs.readFileSync(
  path.resolve(import.meta.dirname, "dist/index.html"),
  "utf-8"
);

const app = express();

app.get("/", (req, res) => {
  console.log(`SERVER_LOGGER: [${new Date().toISOString()}] - GET /`);

  const [beforeReactAppHtmlString, afterReactAppHtmlString] =
    clientShell.split("<!--ROOT-->");
  res.write(beforeReactAppHtmlString);
  const reactAppHtmlString = renderToString(createElement(App));
  res.write(reactAppHtmlString);
  res.write(afterReactAppHtmlString);
  res.end();
});

app.use("/assets", express.static("dist/assets"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`SERVER_LOGGER: Server started at http://localhost:${PORT}/`)
);

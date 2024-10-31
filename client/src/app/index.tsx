import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { useAsync } from "react-use";
import { call } from "ramda";

import PageSpin from "shared/ui/pageSpin";

import { postInstallHooks, preInstallHooks } from "./hooks";
import { withProviders } from "./providers";

import "./index.scss";
import { browserRouter } from "./config";

const App = React.memo(function App() {
  const { value: configModule } = useAsync(async () => import("./config"));

  return <RouterProvider fallbackElement={<PageSpin />} router={browserRouter} />;
});

export function mountApp(): void {
  const root = document.getElementById("root");
  if (!root) throw new Error("root not found");

  preInstallHooks.forEach(call);

  const AppInstance = withProviders(App);

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <AppInstance />
    </React.StrictMode>,
  );

  postInstallHooks.forEach(call);
}

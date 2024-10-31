import type React from "react";

export type AppProvider = (App: React.FC) => () => React.JSX.Element;

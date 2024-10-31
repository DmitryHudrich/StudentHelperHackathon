import { configure } from "mobx";

import type { InstallationHook } from "./interfaces";

export const mobxHook: InstallationHook = () => configure({ enforceActions: "never" });

import type { InstallationHook } from "./interfaces";
import { mobxHook } from "./mobxHook";
import { openApiSetup } from "./openApiSetup";

export const preInstallHooks: InstallationHook[] = [mobxHook, openApiSetup];

export const postInstallHooks: InstallationHook[] = [];

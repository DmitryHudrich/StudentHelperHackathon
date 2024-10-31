import { OpenAPI } from "api";

import { BASE_API_HOST } from "shared/config/const";

import type { InstallationHook } from "./interfaces";

export const openApiSetup: InstallationHook = () => {
  OpenAPI.BASE = BASE_API_HOST;
};

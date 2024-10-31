import { pipe } from "ramda";

import type { AppProvider } from "./types";
import { withAntD } from "./withAntD";

export const withProviders: AppProvider = pipe(withAntD);

import { isNil } from "ramda";

import { useInjectService } from "shared/lib/useInjectService";

import type { Theme } from "../../interfaces";

import { ThemeDetailsService } from "./service";

export function useThemeDetails(): Theme {
  const themeDetailsService = useInjectService(ThemeDetailsService);

  const themeDetails = themeDetailsService.themeDetails;

  if (isNil(themeDetails)) throw new Error("universityDetails not found");

  return themeDetails;
}

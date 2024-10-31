import { memo } from "react";

import { ThemeView, useThemeDetails } from "entities/theme";

export const ThemeDetailsFeature = memo(function ThemeDetailsFeature() {
  const theme = useThemeDetails();
  return <ThemeView.Article theme={theme} />;
});

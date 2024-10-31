import React from "react";

import { BranchDetailsFeature } from "features/branch/details";
import { ThemeListFeature } from "features/theme/list";

export const BranchDetailsWidget = React.memo(function BranchDetailsWidget() {
  return (
    <>
      <BranchDetailsFeature />
      <ThemeListFeature />
    </>
  );
});

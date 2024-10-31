import React from "react";

import { BranchListFeature } from "features/branch/list";
import { UniversityDetailsFeature } from "features/university/details";

export const UniversityDetailsWidget = React.memo(function UniversityDetailsWidget() {
  return (
    <>
      <UniversityDetailsFeature />
      <BranchListFeature />
    </>
  );
});

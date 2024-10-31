import { memo } from "react";

import { BranchView, useBranchDetails } from "entities/branch";

export const BranchDetailsFeature = memo(function BranchDetailsFeature() {
  const branch = useBranchDetails();
  return <BranchView.Panel branch={branch} />;
});

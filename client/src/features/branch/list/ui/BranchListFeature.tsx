import { memo } from "react";
import { Flex } from "antd";

import { BranchView } from "entities/branch";
import { useUniversityDetails } from "entities/university";

export const BranchListFeature = memo(function BranchListFeature() {
  const { id, branches } = useUniversityDetails();
  return (
    <Flex wrap gap={20} justify="space-between">
      {branches.map((branch) => (
        <BranchView.Card key={branch.id} branch={branch} universityId={id} />
      ))}
    </Flex>
  );
});

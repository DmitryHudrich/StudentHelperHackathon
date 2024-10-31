import { memo } from "react";
import { Flex } from "antd";

import { useBranchDetails } from "entities/branch";
import { ThemeView } from "entities/theme";
import { useUniversityDetails } from "entities/university";

export const ThemeListFeature = memo(function ThemeListFeature() {
  const { id: universityId } = useUniversityDetails();
  const { id: branchId, themes } = useBranchDetails();
  return (
    <Flex wrap gap={20} justify="space-between">
      {themes.map((theme) => (
        <ThemeView.Card key={theme.id} branchId={branchId} theme={theme} universityId={universityId} />
      ))}
    </Flex>
  );
});

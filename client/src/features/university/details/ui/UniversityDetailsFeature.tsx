import { memo } from "react";

import { UniversityView, useUniversityDetails } from "entities/university";

export const UniversityDetailsFeature = memo(function UniversityDetailsService() {
  const university = useUniversityDetails();
  return <UniversityView.Panel university={university} />;
});

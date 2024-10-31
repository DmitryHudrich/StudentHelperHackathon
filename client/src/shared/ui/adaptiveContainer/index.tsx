import React from "react";

import { useBreakpoint } from "shared/ui/breakpointProvider";

interface AdaptiveContainerInterface {
  mobile?: React.ReactNode;
  tablet?: React.ReactNode;
  tabletAndDesktop?: React.ReactNode;
  desktop?: React.ReactNode;
}

function AdaptiveContainer({ mobile, tablet, tabletAndDesktop, desktop }: AdaptiveContainerInterface) {
  const { md, lg, xl, xxl } = useBreakpoint();

  if (xxl ?? xl) return <>{desktop ?? tabletAndDesktop}</>;
  if (md ?? lg) return <>{tablet ?? tabletAndDesktop}</>;
  return <>{mobile}</>;
}

export default React.memo(AdaptiveContainer);

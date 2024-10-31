/* eslint-disable import/no-internal-modules */
import React from "react";

import AdaptiveContainer from "shared/ui/adaptiveContainer";

import { DesktopView } from "./destopView";
import { MobileView } from "./mobileView";
import type { AuthLayoutProps } from "./type";

export const AuthLayout = React.memo(function AuthLayout({ content }: AuthLayoutProps) {
  return (
    <AdaptiveContainer mobile={<MobileView content={content} />} tabletAndDesktop={<DesktopView content={content} />} />
  );
});

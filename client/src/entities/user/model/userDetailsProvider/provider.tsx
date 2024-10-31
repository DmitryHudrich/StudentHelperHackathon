import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate } from "react-router-dom";

import { useInjectService } from "shared/lib/useInjectService";
import { AppRoutes } from "shared/model/services";

import { UserDetailsService } from "./service";
import PageSpin from "shared/ui/pageSpin";

export const UserDetailsProvider = React.memo(function UserProfileProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const userDetailsService = useInjectService(UserDetailsService);

  if (!userDetailsService.userDetails) return <PageSpin />;

  return <ErrorBoundary fallback={<Navigate replace to={AppRoutes.getAuthUrl()} />}>{children}</ErrorBoundary>;
});

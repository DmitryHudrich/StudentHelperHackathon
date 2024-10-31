import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate } from "react-router-dom";
import { useAsync } from "react-use";

import { useInjectService } from "shared/lib/useInjectService";
import { AppRoutes } from "shared/model/services";
import PageSpin from "shared/ui/pageSpin";

import { UniversityListService } from "./service";

export const UniversityListProvider = React.memo(function UniversityListProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const universityListService = useInjectService(UniversityListService);

  const { loading } = useAsync(async () => universityListService.loadUniversityList.bind(universityListService)(), []);

  if (loading) return <PageSpin />;

  return <ErrorBoundary fallback={<Navigate replace to={AppRoutes.getHomeUrl()} />}>{children}</ErrorBoundary>;
});

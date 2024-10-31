import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import { useAsync } from "react-use";

import { useInjectService } from "shared/lib/useInjectService";
import { AppRoutes } from "shared/model/services";
import PageSpin from "shared/ui/pageSpin";

import { UniversityDetailsService } from "./service";

export const UniversityDetailsProvider = React.memo(function UniversityDetailsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { universityId } = useParams();

  const universityDetailsService = useInjectService(UniversityDetailsService);
  const { loading } = useAsync(async () => {
    if (universityId === undefined) throw new Error("universityId is undefined");
    return universityDetailsService.loadUniversityDetails(Number(universityId));
  }, []);

  if (loading) return <PageSpin />;

  return <ErrorBoundary fallback={<Navigate replace to={AppRoutes.getHomeUrl()} />}>{children}</ErrorBoundary>;
});

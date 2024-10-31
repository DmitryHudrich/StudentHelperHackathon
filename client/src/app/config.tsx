import { Outlet } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import { NotFoundPage } from "pages/notFound";

import { Header, HeaderProvider } from "widgets/header";

import { UniversityListProvider } from "entities/university";
import { UserDetailsProvider } from "entities/user";

import { AppRoutes } from "shared/model/services";
import { Layout } from "shared/ui/layout";

export const browserRouter = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: AppRoutes.getHomeUrl(),
    element: (
      <UserDetailsProvider>
        <UniversityListProvider>
          <HeaderProvider>
            <Layout.Main content={<Outlet />} footer={<Layout.Footer />} header={<Header />} />
          </HeaderProvider>
        </UniversityListProvider>
      </UserDetailsProvider>
    ),
    children: [
      { index: true, lazy: async () => import("pages/home") },
      { path: AppRoutes.getBranchDetailsUrl(), lazy: async () => import("pages/branch") },
      { path: AppRoutes.getUniversityDetailsUrl(), lazy: async () => import("pages/university") },
      { path: AppRoutes.getThemeDetailsUrl(), lazy: async () => import("pages/theme/details") },
      { path: AppRoutes.getCreateThemeUrl(), lazy: async () => import("pages/theme/create") },
      { path: AppRoutes.getProfileUrl(), lazy: async () => import("pages/profile") },
    ],
  },
  {
    path: AppRoutes.getAuthUrl(),
    element: <Layout.Auth content={<Outlet />} />,
    children: [
      { index: true, lazy: async () => import("pages/auth/login") },
      { path: AppRoutes.getRegisterUrl(), lazy: async () => import("pages/auth/register") },
    ],
  },
]);

import React from "react";
import { useTitle } from "react-use";
import { Typography } from "antd";

import { useHeader } from "widgets/header";

import { ThemeDetailsFeature } from "features/theme/details";

import { AppTitles } from "shared/model/services";
import { Layout } from "shared/ui/layout";

import { ThemeDetailsProvider } from "../../../entities/theme";

function ThemeDetailsPage() {
  useTitle(AppTitles.getThemeTitle());
  useHeader(<Typography.Title level={3}>{AppTitles.getThemeTitle()}</Typography.Title>);

  return (
    <ThemeDetailsProvider>
      <Layout.Content>
        <Typography.Title level={2}>{AppTitles.getThemeTitle()}</Typography.Title>
        <ThemeDetailsFeature />
      </Layout.Content>
    </ThemeDetailsProvider>
  );
}

export const Component = React.memo(ThemeDetailsPage);

import React from "react";
import { useTitle } from "react-use";
import { Typography } from "antd";

import { useHeader } from "widgets/header";

import { AppTitles } from "shared/model/services";
import { Layout } from "shared/ui/layout";

import { CreateThemeFeature } from "../../../features/theme/create";

function ThemeCreatesPage() {
  useTitle(AppTitles.getCreateThemeTitle());
  useHeader(<Typography.Title level={3}>{AppTitles.getCreateThemeTitle()}</Typography.Title>);

  return (
    <Layout.Content>
      <Typography.Title level={2}>{AppTitles.getCreateThemeTitle()}</Typography.Title>
      <CreateThemeFeature />
    </Layout.Content>
  );
}

export const Component = React.memo(ThemeCreatesPage);

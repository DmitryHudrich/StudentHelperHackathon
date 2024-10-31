import React from "react";
import { useTitle } from "react-use";
import { Typography } from "antd";

import { useHeader } from "widgets/header";
import { HomeWidget } from "widgets/home/index.";

import { AppTitles } from "shared/model/services";
import { Layout } from "shared/ui/layout";

function HomePage() {
  useTitle(AppTitles.getHomeTitle());
  useHeader(<Typography.Title level={3}>{AppTitles.getHomeTitle()}</Typography.Title>);

  return (
    <Layout.Content>
      <Typography.Title level={2}>{AppTitles.getHomeTitle()}</Typography.Title>
      <HomeWidget />
    </Layout.Content>
  );
}

export const Component = React.memo(HomePage);

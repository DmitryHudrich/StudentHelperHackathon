import React from "react";
import { useTitle } from "react-use";
import { Typography } from "antd";

import { useHeader } from "widgets/header";

import { AppTitles } from "shared/model/services";
import { Layout } from "shared/ui/layout";

import { UserDetailsWidget } from "../../widgets/userDetails";

function ProfilePage() {
  useTitle(AppTitles.getHomeTitle());
  useHeader(<Typography.Title level={3}>{AppTitles.getProfileTitle()}</Typography.Title>);

  return (
    <Layout.Content>
      <Typography.Title level={2}>{AppTitles.getProfileTitle()}</Typography.Title>
      <UserDetailsWidget />
    </Layout.Content>
  );
}

export const Component = React.memo(ProfilePage);

import React from "react";
import { useTitle } from "react-use";
import { Typography } from "antd";

import { useHeader } from "widgets/header";
import { UniversityDetailsWidget } from "widgets/universityDetails";

import { UniversityDetailsProvider } from "entities/university";

import { AppTitles } from "shared/model/services";
import { Layout } from "shared/ui/layout";

function UniversityPage() {
  useTitle(AppTitles.getUniversityTitle());
  useHeader(<Typography.Title level={3}>{AppTitles.getUniversityTitle()}</Typography.Title>);

  return (
    <UniversityDetailsProvider>
      <Layout.Content>
        <Typography.Title level={2}>{AppTitles.getUniversityTitle()}</Typography.Title>
        <UniversityDetailsWidget />
      </Layout.Content>
    </UniversityDetailsProvider>
  );
}

export const Component = React.memo(UniversityPage);

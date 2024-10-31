import React from "react";
import { useTitle } from "react-use";
import { Typography } from "antd";

import { BranchDetailsWidget } from "widgets/branchDetails";
import { useHeader } from "widgets/header";

import { BranchDetailsProvider } from "entities/branch";

import { AppTitles } from "shared/model/services";
import { Layout } from "shared/ui/layout";

function BranchPage() {
  useTitle(AppTitles.getBranchTitle());
  useHeader(<Typography.Title level={3}>{AppTitles.getBranchTitle()}</Typography.Title>);

  return (
    <BranchDetailsProvider>
      <Layout.Content>
        <Typography.Title level={2}>{AppTitles.getBranchTitle()}</Typography.Title>
        <BranchDetailsWidget />
      </Layout.Content>
    </BranchDetailsProvider>
  );
}

export const Component = React.memo(BranchPage);

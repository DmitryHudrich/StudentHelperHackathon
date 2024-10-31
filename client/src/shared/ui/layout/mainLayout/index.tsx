import React from "react";
import { ConfigProvider, Flex, Layout, type ThemeConfig } from "antd";

import styles from "./index.module.scss";

const theme: ThemeConfig = {
  components: {
    Layout: {
      bodyBg: "#647C80",
      headerBg: "#647C80",
      footerBg: "#647C80",
      siderBg: "#647C80",
    },
  },
};

interface MainLayoutProps {
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

export const MainLayout = React.memo(function MainLayout({ content, header, footer }: MainLayoutProps) {
  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ minHeight: "100vh" }}>
        <Flex style={{ width: "100%", height: "100%", minHeight: "100vh" }}>
          {header}
          <Flex
            vertical
            className={styles.mainSection}
            flex={1}
            justify="space-between"
            style={{ height: "100%", minHeight: "100vh" }}
          >
            {content}
          </Flex>
          {footer}
        </Flex>
      </Layout>
    </ConfigProvider>
  );
});

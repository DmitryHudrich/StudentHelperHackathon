import React from "react";
import { Layout as AntdLayout, theme, Typography } from "antd";

import styles from "./index.module.scss";

interface AuthLayoutProps {
  content: React.ReactNode;
}

export const MobileView = React.memo(function MobileView({ content }: AuthLayoutProps) {
  const { token } = theme.useToken();

  return (
    <AntdLayout>
      <AntdLayout.Header style={{ paddingTop: token.paddingLG }}>
        <img alt="" src="/logo192.png" />
      </AntdLayout.Header>
      <AntdLayout.Content>
        <div className={styles.contentWrapper}>{content}</div>
      </AntdLayout.Content>
      <AntdLayout.Footer style={{ backgroundColor: token.colorWhite }}>
        <Typography.Text type="secondary">
          2024 <br /> © Помощник для студентов
        </Typography.Text>
      </AntdLayout.Footer>
    </AntdLayout>
  );
});

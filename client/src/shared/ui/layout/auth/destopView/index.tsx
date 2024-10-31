import React from "react";
import { Col, Layout as AntdLayout, Row, Space, theme, Typography } from "antd";

interface AuthLayoutProps {
  content: React.ReactNode;
}

export const DesktopView = React.memo(function DesktopView({ content }: AuthLayoutProps) {
  const { token } = theme.useToken();

  return (
    <AntdLayout>
      <Row>
        <Col flex="344px">
          <AntdLayout.Sider
            style={{ borderRight: `1px solid ${token.colorBorder}`, padding: token.paddingXL }}
            theme="light"
            width="100%"
          >
            <AntdLayout>
              <AntdLayout.Header>
                <img alt="" src="/assets/WS-Logo.svg" />
              </AntdLayout.Header>
              <AntdLayout.Content>{content}</AntdLayout.Content>
              <AntdLayout.Footer>
                <Space size="large">
                  <Typography.Text type="secondary">
                    2023 <br /> © Work Solutions
                  </Typography.Text>
                  <img alt="" src="/assets/WS-Logo-Copyright.svg" />
                </Space>
              </AntdLayout.Footer>
            </AntdLayout>
          </AntdLayout.Sider>
        </Col>
        <Col flex="auto" style={{ backgroundImage: `url("/assets/auth-background-desk.png")` }} />
      </Row>
    </AntdLayout>
  );
});

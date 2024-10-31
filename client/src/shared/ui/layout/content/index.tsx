import React from "react";
import { Layout, LayoutProps } from "antd";

export const Content = React.memo(function Content({ children, className = "", style = {}, ...props }: LayoutProps) {
  return (
    <Layout.Content className={className} style={{ ...style }} {...props}>
      {children}
    </Layout.Content>
  );
});

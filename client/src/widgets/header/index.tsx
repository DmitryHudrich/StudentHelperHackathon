import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Flex, Layout, Typography } from "antd";

import { UserDetailsService } from "entities/user";

import { useInjectService } from "shared/lib/useInjectService";
import { AppRoutes } from "shared/model/services";

import { NAV_LINKS } from "./config";
import { useHeaderContext } from "./lib";

export const Header = React.memo(function Header() {
  const { node } = useHeaderContext();

  const userDetailsService = useInjectService(UserDetailsService);

  return (
    <Layout.Header>
      <Flex justify="space-between">
        <Flex gap={20}>
          <Avatar shape="square" src="/logo192.png" />
          <Divider type="vertical" />
          {NAV_LINKS.map(({ name, url }) => (
            <Typography.Link key={name}>
              <Link to={url}>{name}</Link>
            </Typography.Link>
          ))}
        </Flex>
        {node}
        <Flex gap={20}>
          {userDetailsService.userDetails ? (
            <>
              <Link to={AppRoutes.getAuthUrl()}>
                <Button type="link">Войти</Button>
              </Link>
              <Link to={AppRoutes.getRegisterUrl()}>
                <Button type="link">Регистрация</Button>
              </Link>
            </>
          ) : (
            <Link to={AppRoutes.getProfileUrl()}>
              <Avatar icon={<UserOutlined />} />
            </Link>
          )}
        </Flex>
      </Flex>
    </Layout.Header>
  );
});

export { useHeader, HeaderProvider } from "./lib";

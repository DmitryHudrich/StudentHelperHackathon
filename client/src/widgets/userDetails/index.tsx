import React from "react";
import { Descriptions, Flex, Typography } from "antd";
import type { DescriptionsItemType } from "antd/lib/descriptions";

import { LogoutFeature } from "features/auth/logout";

import { ContactsView } from "entities/contact";
import { useUserDetails } from "entities/user";

export const UserDetailsWidget = React.memo(function Profile() {
  const userDetails = useUserDetails();

  const items: DescriptionsItemType[] = [
    {
      key: "name",
      label: "Название",
      children: userDetails.state.university.name,
    },
    {
      key: "address",
      label: "Адрес",
      children: userDetails.state.university.address,
    },
    {
      key: "info",
      label: "Информация",
      children: userDetails.state.university.info,
    },
    {
      key: "contacts",
      label: "Контакты",
      children: <ContactsView.List contacts={userDetails.state.university.contacts} />,
    },
  ];

  return (
    <>
      <Flex>
        <Flex vertical>
          <Flex vertical>
            <Typography.Title level={5}>Имя</Typography.Title>
            <Typography.Paragraph>{userDetails.state.fullName}</Typography.Paragraph>
          </Flex>
          <Flex vertical>
            <Typography.Title level={5}>Возраст</Typography.Title>
            <Typography.Paragraph>{userDetails.state.age}</Typography.Paragraph>
          </Flex>
          <Descriptions items={items} title="Учебное заведение" />;
        </Flex>
      </Flex>
      <LogoutFeature />
    </>
  );
});

import { memo } from "react";
import { List, Typography } from "antd";

import type { Contact } from "../interfaces";

interface ContactsListViewProps {
  contacts: Contact[];
}

export const ContactsListView = memo(function ContactsList({ contacts }: ContactsListViewProps) {
  return (
    <List
      dataSource={contacts}
      header={<Typography.Title level={3}>Контакты и ссылки</Typography.Title>}
      itemLayout="horizontal"
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta description={item.content} title={item.name} />
        </List.Item>
      )}
    />
  );
});

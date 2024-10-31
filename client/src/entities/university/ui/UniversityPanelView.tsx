import { memo } from "react";
import { Card, type CardProps, Flex, Image, Typography } from "antd";

import { ContactsView } from "entities/contact/@x";

import type { University } from "../interfaces";

interface UniversityPanelViewProps {
  university: University;
}

export const UniversityPanelView = memo(function UniversityPanelView({
  university,
  ...props
}: UniversityPanelViewProps & CardProps) {
  return (
    <Card {...props} style={{ width: 240, display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <Card.Grid style={{ width: "50%" }}>
        <Image alt={university.name} src={university.image} />
      </Card.Grid>
      <Card.Grid style={{ width: "50%" }}>
        <Card.Meta
          description={
            <Flex vertical gap={10}>
              <Typography.Text>{university.info}</Typography.Text>
              <Typography.Text>Адрес университета: {university.address}</Typography.Text>
            </Flex>
          }
          title={university.name}
        />
      </Card.Grid>
      <Card.Grid style={{ width: "100%" }}>
        <ContactsView.List contacts={university.contacts} />
      </Card.Grid>
    </Card>
  );
});

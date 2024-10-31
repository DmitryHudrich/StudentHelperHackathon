import { memo } from "react";
import { Card, type CardProps, Flex, Image, Typography } from "antd";

import { ContactsView } from "entities/contact/@x";

import type { Branch } from "../interfaces";

interface BranchPanelViewProps {
  branch: Branch;
}

export const BranchPanelView = memo(function BranchPanelView({ branch, ...props }: BranchPanelViewProps & CardProps) {
  return (
    <Card {...props} style={{ width: 240, display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <Card.Grid style={{ width: "50%" }}>
        <Image alt={branch.name} src={branch.image} />
      </Card.Grid>
      <Card.Grid style={{ width: "50%" }}>
        <Card.Meta
          description={
            <Flex vertical gap={10}>
              <Typography.Text>{branch.info}</Typography.Text>
              <Typography.Text>Адрес филиала: {branch.address}</Typography.Text>
            </Flex>
          }
          title={branch.name}
        />
      </Card.Grid>
      <Card.Grid style={{ width: "100%" }}>
        <ContactsView.List contacts={branch.contacts} />
      </Card.Grid>
    </Card>
  );
});

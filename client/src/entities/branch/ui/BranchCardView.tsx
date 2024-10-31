import { memo } from "react";
import { Link } from "react-router-dom";
import { Card, type CardProps } from "antd";

import { AppRoutes } from "shared/model/services";

import type { Branch } from "../interfaces";

interface BranchCardViewProps {
  branch: Branch;
  universityId: number;
}

export const BranchCardView = memo(function BranchCardView({
  branch,
  universityId,
  ...props
}: BranchCardViewProps & CardProps) {
  return (
    <Link to={AppRoutes.getBranchDetailsUrl(true, { universityId, branchId: branch.id })}>
      <Card hoverable cover={<img alt={branch.name} src={branch.image} />} style={{ width: 240 }} {...props}>
        <Card.Meta description={branch.address} title={branch.name} />
      </Card>
    </Link>
  );
});

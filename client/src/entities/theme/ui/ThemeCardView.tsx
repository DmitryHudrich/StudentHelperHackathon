import { memo } from "react";
import { Link } from "react-router-dom";
import { Card, type CardProps } from "antd";

import { AppRoutes } from "shared/model/services";

import type { Theme } from "../interfaces";

interface ThemeCardViewProps {
  theme: Theme;
  universityId: number;
  branchId: number;
}

export const ThemeCardView = memo(function ThemeCardView({
  theme,
  universityId,
  branchId,
  ...props
}: ThemeCardViewProps & CardProps) {
  return (
    <Link to={AppRoutes.getThemeDetailsUrl(true, { universityId, branchId, themeId: theme.id })}>
      <Card hoverable cover={<img alt={theme.name} src={theme.image} />} style={{ width: 240 }} {...props}>
        <Card.Meta description={`Автор: ${theme.author.fullName}`} title={theme.name} />
      </Card>
    </Link>
  );
});

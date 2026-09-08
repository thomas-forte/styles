import { type ReactNode } from "react";

import { Card, type CardProps } from "./Card";
import { CardTitle } from "./CardTitle";
import type { CardTitleAction } from "./CardTitleActions";
import {
  resolveCardActions,
  resolveCardSubtitle,
  resolveCardTitle,
} from "./cardText";

type SteelCardProps = CardProps & {
  title?: ReactNode;
  subtitle?: ReactNode;
  hideHr?: boolean;
  actions?: CardTitleAction[] | ReactNode;
};

export const SteelCard = ({
  color = "primary",
  className,
  children,
  title,
  subtitle,
  hideHr,
  actions,
}: SteelCardProps) => {
  const resolvedTitle = resolveCardTitle(title);
  const resolvedSubtitle = resolveCardSubtitle(subtitle);
  const resolvedActions = resolveCardActions(actions);
  const hasHeader =
    resolvedTitle != null ||
    resolvedSubtitle != null ||
    resolvedActions != null;

  return (
    <Card
      color={color}
      className={className}
    >
      {hasHeader && (
        <CardTitle
          title={resolvedTitle}
          subtitle={resolvedSubtitle}
          hideHr={hideHr}
        >
          {resolvedActions}
        </CardTitle>
      )}
      {children}
    </Card>
  );
};

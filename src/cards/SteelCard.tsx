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
  /** String becomes {@link Title}; nodes render as-is. */
  title?: ReactNode;
  /** String becomes {@link Subtitle}; nodes render as-is. */
  subtitle?: ReactNode;
  /** Skip the header divider. Defaults to `false` when a header is present. */
  hideHr?: boolean;
  /** {@link CardTitleAction} list or a custom node. */
  actions?: CardTitleAction[] | ReactNode;
};

/**
 * {@link Card} with optional title/subtitle/actions header and body `children`.
 * Header is omitted when title, subtitle, and actions are all empty.
 */
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

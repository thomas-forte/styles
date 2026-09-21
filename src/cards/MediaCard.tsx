import { type ReactNode } from "react";

import { Card, type CardProps } from "./Card";
import type { CardTitleAction } from "./CardTitleActions";
import {
  resolveCardActions,
  resolveCardSubtitle,
  resolveCardTitle,
} from "./cardText";

type MediaCardProps = Omit<CardProps, "children"> & {
  /** Leading visual (image, icon, etc.). */
  media: ReactNode;
  /** String becomes {@link Title}; nodes render as-is. */
  title?: ReactNode;
  /** String becomes {@link Subtitle}; nodes render as-is. */
  subtitle?: ReactNode;
  /** {@link CardTitleAction} list or a custom node. */
  actions?: CardTitleAction[] | ReactNode;
};

/** {@link Card} with media + title/subtitle + actions; no body children. */
export const MediaCard = ({
  color = "primary",
  className,
  media,
  title,
  subtitle,
  actions,
}: MediaCardProps) => (
  <Card
    color={color}
    className={className}
  >
    <div className="flex justify-between flex-col md:flex-row">
      <div className="flex gap-4">
        <div>{media}</div>
        <div>
          {resolveCardTitle(title)}
          {resolveCardSubtitle(subtitle)}
        </div>
      </div>
      {resolveCardActions(actions)}
    </div>
  </Card>
);

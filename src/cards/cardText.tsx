import { type ReactNode } from "react";

import { Body } from "../typography/Body";
import { Title } from "../typography/Title";
import { CardTitleActions, type CardTitleAction } from "./CardTitleActions";

export const resolveCardTitle = (value: ReactNode) => {
  if (value == null || value === false) {
    return undefined;
  }
  if (typeof value === "string") {
    return (
      <Title
        text={value}
        as="h4"
      />
    );
  }
  return value;
};

export const resolveCardSubtitle = (value: ReactNode) => {
  if (value == null || value === false) {
    return undefined;
  }
  if (typeof value === "string") {
    return <Body>{value}</Body>;
  }
  return value;
};

export const resolveCardActions = (value: CardTitleAction[] | ReactNode) => {
  if (value == null || value === false) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return <CardTitleActions actions={value} />;
  }
  return value;
};

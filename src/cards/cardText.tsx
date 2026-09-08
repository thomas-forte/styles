import { type ReactNode } from "react";

import { Subtitle } from "../base/Subtitle";
import { Title } from "../base/Title";
import { CardTitleActions, type CardTitleAction } from "./CardTitleActions";

export const resolveCardTitle = (value: ReactNode) => {
  if (value == null || value === false) {
    return undefined;
  }
  if (typeof value === "string") {
    return <Title text={value} />;
  }
  return value;
};

export const resolveCardSubtitle = (value: ReactNode) => {
  if (value == null || value === false) {
    return undefined;
  }
  if (typeof value === "string") {
    return <Subtitle text={value} />;
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

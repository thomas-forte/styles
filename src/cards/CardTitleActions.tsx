import { Fragment, type ReactNode } from "react";

export interface CardTitleAction {
  el: ReactNode;
}

export type CardActionsProps = {
  actions?: CardTitleAction[];
};

export const CardTitleActions = ({ actions = [] }: CardActionsProps) => {
  if (!actions.length) {
    return null;
  }

  return (
    <div className="flex gap-2 justify-end items-start mt-2 md:mt-0">
      {actions.map(({ el }, index) => (
        <Fragment key={index}>{el}</Fragment>
      ))}
    </div>
  );
};

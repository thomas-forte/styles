import { PanelItem, type PanelItemProps } from "./PanelItem";

type PanelProps = {
  items: PanelItemProps[];
};

export const Panel = ({ items }: PanelProps) => (
  <div className="text-sm text-slate-300">
    <ul className="space-y-2">
      {items.map((item, index) => (
        <PanelItem
          key={index}
          title={item.title}
          lines={item.lines}
        />
      ))}
    </ul>
  </div>
);

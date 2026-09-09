export type PanelItemProps = {
  title?: string;
  lines?: Record<string, string>;
};

export const PanelItem = ({ title, lines }: PanelItemProps) => (
  <li className="rounded-md border border-styles-primary-border bg-slate-950/50 px-3 py-2">
    {title && (
      <p>
        <span className="font-medium text-slate-200">{title}</span>
      </p>
    )}
    {lines &&
      Object.entries(lines).map(([key, value]) => (
        <p key={key}>
          <span className="text-slate-400">{key}: </span>
          {value}
        </p>
      ))}
  </li>
);

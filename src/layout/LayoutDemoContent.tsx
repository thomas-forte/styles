import { Breadcrumbs } from "./Breadcrumbs";
import { Panel } from "./Panel";

export const LayoutDemoContent = () => (
  <div className="space-y-4">
    <div>
      <Breadcrumbs
        items={[
          { name: "One", to: "/styles" },
          { name: "Two" },
          { name: "Three", to: "/styles" },
          { name: "Four", current: true },
        ]}
      />
    </div>

    <div>
      <Panel
        items={[
          {
            title: "Panel item",
            lines: { status: "ok", count: "3" },
          },
          {
            title: "Empty Panel item",
          },
          {
            lines: { title: "not included", properties: "2" },
          },
        ]}
      />
    </div>

    <p className="text-sm text-slate-400">
      Not shown: Page (wraps this gallery), PanelItem (helper of Panel).
    </p>
  </div>
);

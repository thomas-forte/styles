import { Card } from "./Card";
import { MediaCard } from "./MediaCard";
import { SteelCard } from "./SteelCard";

export const CardsDemoContent = () => {
  const media = (
    <img
      src="favicon_io/android-chrome-512x512.png"
      className="size-28 invert"
      alt=""
    />
  );

  const actions = [
    {
      el: (
        <button className="text-sm rounded bg-amber-400/55 px-2 py-1 cursor-pointer">
          with an action
        </button>
      ),
    },
    {
      el: (
        <button className="text-sm rounded bg-amber-400/30 px-2 py-1 cursor-not-allowed">
          with another action
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-1">
        <Card color="primary">primary (default)</Card>
        <Card color="cyan">cyan</Card>
        <Card color="amber">amber</Card>
        <Card color="rose">rose</Card>
      </div>

      <div className="flex flex-col gap-1">
        <MediaCard
          media={media}
          title="Media Card"
          subtitle="with subtitle"
          actions={actions}
        />
        <MediaCard
          color="cyan"
          media={media}
          title="Media Card"
          subtitle="with subtitle"
        />
        <MediaCard
          color="amber"
          media={media}
          title="Media Card"
        />
        <MediaCard
          color="rose"
          media={media}
          subtitle="Media Card"
        />
      </div>

      <div className="flex flex-col gap-1">
        <SteelCard
          title="SteelCard title"
          subtitle="SteelCard subtitle"
        />
        <SteelCard
          color="cyan"
          title="SteelCard title"
          subtitle="SteelCard subtitle"
          hideHr
        />
        <SteelCard
          color="amber"
          title="SteelCard title"
          actions={actions}
        />
        <SteelCard
          color="rose"
          subtitle="SteelCard subtitle"
        />
      </div>
    </div>
  );
};

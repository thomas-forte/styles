import { useState } from "react";

import { Clock } from "./Clock";
import { ConsoleArray } from "./ConsoleArray";
import { ConsoleBox } from "./ConsoleBox";
import { CopyBox } from "./CopyBox";

export const DataDemoContent = () => {
  const [consoleSelected, setConsoleSelected] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <CopyBox
          text="gray (default)"
          showText
          color="gray"
        />
        <CopyBox
          text="emerald"
          showText
          color="emerald"
        />
        <CopyBox
          text="cyan"
          showText
          color="cyan"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <CopyBox
          text="show text"
          showText
        />
        <CopyBox text="dont show text" />
      </div>

      <div>
        <ConsoleBox wrapper="array">
          <ConsoleArray
            array={["alpha", "beta", "gamma"]}
            selectedItem={consoleSelected}
            showCopy
            onSelect={setConsoleSelected}
            display={(item) => item}
          />
        </ConsoleBox>
      </div>

      <div className="size-40">
        <Clock />
      </div>
    </div>
  );
};

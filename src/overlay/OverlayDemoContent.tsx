import { useState } from "react";

import { Button } from "../buttons/Button";
import { Dialogify } from "./Dialogify";

export const OverlayDemoContent = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setDialogOpen(true)}>Open Dialogify</Button>
      <Dialogify
        title="Dialogify demo"
        description="Overlay primitive"
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <p className="mt-2 text-sm text-slate-300">Dialog body content.</p>
        <div className="mt-4">
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
        </div>
      </Dialogify>
    </>
  );
};

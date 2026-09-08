import { useEffect, useState } from "react";

import {
  ClipboardDocumentCheckIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/solid";

type CopyBoxProps = {
  text: string;
  className?: string;
  showText?: boolean;
  color?: CopyBoxColor;
};

type CopyBoxColor = "gray" | "emerald" | "cyan";

const COLOR_CLASSES: Record<CopyBoxColor, string> = {
  gray: "text-gray-600 hover:text-gray-100",
  emerald: "text-emerald-300 hover:text-emerald-400",
  cyan: "text-cyan-300 hover:text-cyan-400",
};

const BASE_CLASS = "cursor-pointer inline-flex items-center gap-1";

export const CopyBox = ({
  text,
  className = "",
  showText,
  color = "gray",
}: CopyBoxProps) => {
  const [copied, setCopied] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCopied("");
    }, 3000);
  }, [copied]);

  const handleCopy = async () => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(text);
      setCopied(text);
    }
  };

  const classes = `${BASE_CLASS} ${COLOR_CLASSES[color]} ${className}`;

  return (
    <button
      className={classes}
      onClick={handleCopy}
    >
      {copied ? (
        <ClipboardDocumentCheckIcon
          className="size-[1.2em]"
          aria-hidden="true"
        />
      ) : (
        <>
          {showText && <span>{text}</span>}
          <DocumentDuplicateIcon
            className="size-[1.2em]"
            aria-hidden="true"
            title="Copy"
          />
        </>
      )}
    </button>
  );
};

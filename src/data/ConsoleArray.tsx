import { CopyBox } from "./CopyBox";

type ConsoleArrayProps<T> = {
  array: T[];
  selectedItem?: T | null;
  showCopy?: boolean;
  onSelect?: (item: T) => void;
  display: (item: T) => string;
};

export const ConsoleArray = <T,>({
  array,
  selectedItem,
  showCopy,
  onSelect,
  display,
}: ConsoleArrayProps<T>) => {
  return (
    <>
      {array.map((item: T, index: number) => (
        <div
          key={index}
          className="ml-6 flex items-center"
        >
          '
          <span
            className={`hover:text-white/80 cursor-pointer ${
              selectedItem === item ? "text-cyan-500 font-bold" : ""
            }`}
            onClick={() => {
              onSelect?.(item);
            }}
          >
            {display(item)}
          </span>
          ',
          {showCopy && (
            <CopyBox
              text={display(item)}
              color="emerald"
              className="ml-1"
            />
          )}
        </div>
      ))}
    </>
  );
};

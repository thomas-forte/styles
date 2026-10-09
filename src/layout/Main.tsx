type MainProps = {
  children: React.ReactNode;
};

const BASE_CLASSES = "mx-auto w-full max-w-6xl sm:px-4 pb-10 pt-6";

/** Primary main container. */
export const Main = ({ children }: MainProps) => (
  <main className={BASE_CLASSES}>{children}</main>
);

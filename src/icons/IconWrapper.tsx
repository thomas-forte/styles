export const IconWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={className}
    aria-hidden
  >
    {children}
  </span>
);

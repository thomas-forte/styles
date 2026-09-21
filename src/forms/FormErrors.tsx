export type FormErrorsProps = {
  /** `[field, message]` pairs. Empty or omitted renders nothing. */
  errors?: string[][];
};

/** Field error list for forms. */
export const FormErrors = ({ errors = [] }: FormErrorsProps) => {
  if (!errors.length) {
    return null;
  }

  return (
    <div className="my-2 flex flex-col">
      {errors.map(([key, value], index) => (
        <p
          key={index}
          className="text-sm font-medium text-rose-300"
        >
          <span className="font-bold capitalize">{key}:</span> {value}
        </p>
      ))}
    </div>
  );
};

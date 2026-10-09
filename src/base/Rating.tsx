import { StarIcon } from "@heroicons/react/24/solid";

export type RatingProps = {
  rating: number;
  base?: number;
};

/** Display a rating with stars. */
export const Rating = ({ rating, base = 5 }: RatingProps) => {
  return (
    <div
      className="flex"
      title={`Rating: ${rating}/${base}`}
    >
      {Array.from({ length: base }).map((_, index) => (
        <StarIcon
          key={index}
          className={`size-4 ${index < rating ? "text-orange-500" : "text-slate-300/85"}`}
        />
      ))}
    </div>
  );
};

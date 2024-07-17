import { useMemo } from "react";
import styles from "./star-rating.module.css";
/* Star vector from  https://heroicons.com/solid */

export default function StarRating({
  rating,
}: {
  rating: string | number | undefined;
}) {
  const number = useMemo(() => {
    if (!rating) return NaN;
    return typeof rating === "string" ? parseInt(rating) : rating;
  }, [rating]);

  if (Number.isNaN(number)) return null;

  const stars = Array(number)
    .fill(null)
    .map((_x, idx) => (
      <svg
        key={idx}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={styles[`delay${idx}`]}
      >
        <path
          fill-rule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clip-rule="evenodd"
        />
      </svg>
    ));

  // console.log(stars);

  return (
    <div className={styles.starRating}>
      <p className="sr-only">{rating} stars</p>
      {stars}
    </div>
  );
}

{
  /* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 11 17 14">
	<g transform="scale(0.5, 0.9)">
		<path fill="#E10A0A" d="M15.795 27.709l-15.347-16.906h30.694l-15.347 16.906z"></path>
	</g>
</svg> */
}

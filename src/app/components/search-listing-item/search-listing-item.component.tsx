import { Holiday } from "@/types/booking";
import Link from "next/link";
import styles from "./search-listing-item.module.css";

export default function SearchListingItemComponent({
  holiday,
}: {
  holiday: Holiday;
}) {
  return (
    <article className={styles.searchListingItem}>
      {/* <img
        src={holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}
        alt={
          holiday.hotel.content.images[0].IMAGE_DESCRIPTION ??
          `Image of ${holiday.hotel.name}`
        }
      /> */}
      <h1>
        {holiday.hotel.name} - {holiday.hotel.content.starRating} Star
      </h1>
      <h2>{holiday.hotel.boardBasis}</h2>
      <ul>
        {holiday.hotel.content.atAGlance.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <h3>£{holiday.pricePerPerson}pp</h3>
      <h4>Total price £{holiday.totalPrice}</h4>
      <Link href="#">View details</Link>
    </article>
  );
}

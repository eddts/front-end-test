import StarRating from "@/app/components/star-rating/star-rating.component";
import { Holiday } from "@/types/booking";
import Image from "next/image";
import Link from "next/link";
import styles from "./search-listing-item.module.css";

export default function SearchListingItemComponent({
  holiday,
}: {
  holiday: Holiday;
}) {
  return (
    <article className={styles.container}>
      <figure className={styles.figure}>
        <Image
          src={`https:${holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}`}
          alt={
            holiday.hotel.content.images[0].IMAGE_DESCRIPTION ??
            `Image of ${holiday.hotel.name}`
          }
          fill
        />
      </figure>
      <div className={styles.body}>
        <h1 className={styles.title}>{holiday.hotel.name}</h1>
        <h2 className={styles.subtitle}>{holiday.hotel.boardBasis}</h2>
        <ul className={styles.list}>
          {holiday.hotel.content.atAGlance.map((item, idx) => (
            <li key={idx} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.actions}>
        <div className={styles.rating}>
          <StarRating rating={holiday.hotel.content.starRating} />
        </div>
        <div>
          <h3 className={styles.pricePP}>£{holiday.pricePerPerson}pp</h3>
          <p className={styles.priceTotal}>Total: £{holiday.totalPrice}</p>
          <Link className={`btn`} href="#">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}

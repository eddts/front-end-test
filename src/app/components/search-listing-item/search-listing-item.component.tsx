import StarRating from "@/app/components/star-rating/star-rating.component";
import { Holiday } from "@/types/booking";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import styles from "./search-listing-item.module.css";

export default function SearchListingItemComponent({
  holiday,
}: {
  holiday: Holiday;
}) {
  const atAGlance = useMemo(
    () => holiday.hotel.content.atAGlance.slice(0, 3),
    [holiday.hotel.content.atAGlance]
  );

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
          sizes="33vw"
        />
      </figure>
      <div className={styles.body}>
        <h1 className={styles.title}>{holiday.hotel.name}</h1>
        <p className={styles.text}>{holiday.hotel.content.parentLocation}</p>
        <h2 className={styles.subtitle}>{holiday.hotel.boardBasis}</h2>
        <ul className={styles.list}>
          {atAGlance.map((item, idx) => (
            <li
              key={idx}
              className={styles.listItem}
              dangerouslySetInnerHTML={{ __html: item }}
            ></li>
          ))}
        </ul>
      </div>
      <div className={styles.actions}>
        <div className={styles.rating}>
          <StarRating rating={holiday.hotel.content.starRating} />
        </div>
        <div>
          <h3 className={styles.pricePP}>
            £{holiday.pricePerPerson.toFixed(2)}pp
          </h3>
          <p className={styles.priceTotal}>
            Total: £{holiday.totalPrice.toFixed(2)}
          </p>
          <Link className={`btn`} href="#">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}

import { BookingResponse } from "@/types/booking";
import { Rooms } from "@/utils/composition.service";
import styles from "./search-results.module.css";

async function getData(params: {
  [key: string]: string | string[] | undefined;
}) {
  const body = {
    bookingType: params.bookingType,
    direct: false,
    location: params.location,
    departureDate: params.departureDate,
    duration: params.duration,
    gateway: params.gateway,
    partyCompositions: Rooms.parseAndConvert([
      params.partyCompositions as string,
    ]),
  };

  const res = await fetch(
    "https://www.virginholidays.co.uk/cjs-search-api/search",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SearchResultsComponent({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const results: BookingResponse = await getData(searchParams);

  const { holidays } = results;

  if (!holidays.length) return <div>No results</div>;

  return (
    <section>
      <h2>{holidays.length} results found</h2>

      {/* <pre>{JSON.stringify(results, undefined, 2)}</pre> */}

      <ol>
        {holidays.map((holiday, idx: number) => {
          return (
            <li key={idx}>
              <article className={styles.searchResults}>
                <img
                  src={holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}
                  alt={
                    holiday.hotel.content.images[0].IMAGE_DESCRIPTION ??
                    `Image of ${holiday.hotel.name}`
                  }
                />
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
                <h4>Total price £{holiday.totalPrice}quid</h4>
                <button>View details</button>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

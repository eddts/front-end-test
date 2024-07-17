import { Holiday } from "@/types/booking";
import { HolidayFilterModel } from "@/types/filter";
import {
  useHotelFacilitiesFilters,
  useHotelStarRatingFilters,
} from "@/utils/client.hooks";
import {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  SetStateAction,
  useCallback,
} from "react";
import styles from "./search-filters.module.css";

// https://www.30secondsofcode.org/js/s/toggle-array-element/
const toggleElement = <T,>(arr: T[], val: T) =>
  arr.includes(val) ? arr.filter((el) => el !== val) : [...arr, val];

export default function SearchFiltersComponent({
  holidays,
  filters,
  setFilters,
}: {
  filters: HolidayFilterModel;
  setFilters: Dispatch<SetStateAction<HolidayFilterModel>>;
  holidays: Holiday[];
}) {
  const facilitiesFilters = useHotelFacilitiesFilters(holidays);
  const starRatingFilters = useHotelStarRatingFilters();

  const onBlurPrice = useCallback(
    (e: FocusEvent<HTMLInputElement, Element>) => {
      setFilters((prevState) => {
        return {
          ...prevState,
          pricePerPerson: {
            ...prevState.pricePerPerson,
            [e.target.name]: parseInt(e.target.value),
          },
        };
      });
    },
    [setFilters]
  );

  const onCheck = useCallback(
    (
      e: ChangeEvent<HTMLInputElement>,
      key: "starRating" | "hotelFacilities"
    ) => {
      setFilters((prevState) => {
        return {
          ...prevState,
          [key]: toggleElement(prevState[key], e.target.value),
        };
      });
    },
    [setFilters]
  );

  const onCheckStarRating = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onCheck(e, "starRating"),
    [onCheck]
  );

  const onCheckHotelFacilities = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onCheck(e, "hotelFacilities"),
    [onCheck]
  );

  return (
    <>
      <h1 className={styles.title}>Filter holidays</h1>

      <section className={styles.section}>
        <h2>Price per person</h2>
        <label className={styles.input} htmlFor="min">
          Min
          <input name="min" id="min" type="number" onBlur={onBlurPrice} />
        </label>
        <label className={styles.input} htmlFor="max">
          Max
          <input name="max" id="max" type="number" onBlur={onBlurPrice} />
        </label>
      </section>

      <section className={styles.section}>
        <h2>Star rating</h2>

        {starRatingFilters.map((filter) => (
          <label
            key={filter.value}
            className={styles.checkbox}
            htmlFor={filter.value}
          >
            {filter.label}
            <input
              type="checkbox"
              name={filter.value}
              id={filter.value}
              value={filter.value}
              onChange={onCheckStarRating}
            />
          </label>
        ))}
      </section>

      {facilitiesFilters.length > 0 && (
        <section className={styles.section}>
          <h2>Hotel facilities</h2>
          {facilitiesFilters.map((filter) => (
            <label
              key={filter.value}
              className={styles.checkbox}
              htmlFor={filter.value}
            >
              {filter.label}
              <input
                type="checkbox"
                name={filter.value}
                id={filter.value}
                value={filter.value}
                onChange={onCheckHotelFacilities}
              />
            </label>
          ))}
        </section>
      )}
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </>
  );
}

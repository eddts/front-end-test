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
  resetFilters,
  hasActiveFilters,
}: {
  holidays: Holiday[];
  filters: HolidayFilterModel;
  setFilters: Dispatch<SetStateAction<HolidayFilterModel>>;
  resetFilters: () => void;
  hasActiveFilters: boolean;
}) {
  const facilitiesFilters = useHotelFacilitiesFilters(holidays);
  const starRatingFilters = useHotelStarRatingFilters();

  const onChangePrice = useCallback(
    (e: FocusEvent<HTMLInputElement, Element>) => {
      setFilters((prevState) => {
        return {
          ...prevState,
          pricePerPerson: {
            ...prevState.pricePerPerson,
            [e.target.name]: e.target.value ? parseInt(e.target.value) : null,
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
      <div className={styles.header}>
        <h1 className={styles.title}>Filter by...</h1>
        {hasActiveFilters && (
          <button className={`text-link ${styles.btn}`} onClick={resetFilters}>
            Clear filters
          </button>
        )}
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Price per person</h2>
        <div className={styles.inputGroup}>
          <div>
            <label className={styles.inputLabel} htmlFor="min">
              Min (£)
            </label>
            <input
              className={styles.input}
              name="min"
              id="min"
              type="number"
              value={filters.pricePerPerson.min ?? ""}
              onChange={onChangePrice}
            />
          </div>

          <div>
            <label className={styles.inputLabel} htmlFor="max">
              Max (£)
            </label>
            <input
              className={styles.input}
              name="max"
              id="max"
              type="number"
              value={filters.pricePerPerson.max ?? ""}
              onChange={onChangePrice}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Star rating</h2>

        {starRatingFilters.map((filter) => (
          <label
            key={filter.value}
            className={styles.checkboxLabel}
            htmlFor={filter.value}
          >
            <input
              type="checkbox"
              className={styles.checkbox}
              name={filter.value}
              id={filter.value}
              value={filter.value}
              checked={filters.starRating.includes(filter.value)}
              onChange={onCheckStarRating}
            />
            {filter.label}
          </label>
        ))}
      </section>

      {facilitiesFilters.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hotel facilities</h2>
          {facilitiesFilters.map((filter) => (
            <label
              key={filter.value}
              className={styles.checkboxLabel}
              htmlFor={filter.value}
            >
              <input
                type="checkbox"
                className={styles.checkbox}
                name={filter.value}
                id={filter.value}
                value={filter.value}
                checked={filters.hotelFacilities.includes(filter.value)}
                onChange={onCheckHotelFacilities}
              />
              {filter.label}
            </label>
          ))}
        </section>
      )}
    </>
  );
}

"use client";

import NoResults from "@/app/components/no-results/no-results.component";
import SearchFiltersComponent from "@/app/components/search-filters/search-filters.component";
import SearchListingItemComponent from "@/app/components/search-listing-item/search-listing-item.component";
import { Holiday } from "@/types/booking";
import { useHolidayFilter } from "@/utils/client.hooks";
import styles from "./search-listing.module.css";

export default function SearchListingComponent({
  holidays,
}: {
  holidays: Holiday[];
}) {
  const {
    holidays: filteredHolidays,
    filters,
    setFilters,
    resetFilters,
  } = useHolidayFilter(holidays);

  return (
    <>
      <div className={styles.grid}>
        <nav className={styles.nav}>
          <SearchFiltersComponent
            filters={filters}
            setFilters={setFilters}
            holidays={holidays}
          />
        </nav>

        <div>
          <h2 className={styles.title}>
            {filteredHolidays.length} results found
          </h2>
          {filteredHolidays.length > 0 ? (
            <ol className={styles.list}>
              {filteredHolidays.map((holiday, idx: number) => {
                return (
                  <li key={idx}>
                    <SearchListingItemComponent holiday={holiday} />
                  </li>
                );
              })}
            </ol>
          ) : (
            <NoResults onClear={resetFilters} />
          )}
        </div>
      </div>
    </>
  );
}

"use client";

import NoResults from "@/app/components/no-results/no-results.component";
import SearchFiltersComponent from "@/app/components/search-filters/search-filters.component";
import SearchListingItemComponent from "@/app/components/search-listing-item/search-listing-item.component";
import { Holiday } from "@/types/booking";
import { HolidayFilterModel } from "@/types/filter";
import { useHolidayFilter } from "@/utils/hooks";
import { useCallback, useState } from "react";
import styles from "./search-listing.module.css";

export default function SearchListingComponent({
  holidays,
}: {
  holidays: Holiday[];
}) {
  const [holidayFilters, setHolidayFilters] =
    useState<HolidayFilterModel | null>(null);
  const resetHolidayFilters = useCallback(() => setHolidayFilters(null), []);
  const filteredHolidays = useHolidayFilter(holidays, holidayFilters);

  if (filteredHolidays.length < 1)
    return (
      <NoResults
        showClear={holidayFilters !== null}
        onClear={resetHolidayFilters}
      />
    );

  return (
    <>
      <h2>{filteredHolidays.length} results found</h2>

      {/* <pre>{JSON.stringify(results, undefined, 2)}</pre> */}
      <SearchFiltersComponent
        holidays={holidays}
        onChange={setHolidayFilters}
      />

      <ol className={styles.searchListing}>
        {filteredHolidays.map((holiday, idx: number) => {
          return (
            <li key={idx}>
              <SearchListingItemComponent holiday={holiday} />
            </li>
          );
        })}
      </ol>
    </>
  );
}

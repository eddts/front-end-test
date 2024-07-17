import { Holiday } from "@/types/booking";
import { FilterOption, HolidayFilterModel } from "@/types/filter";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";

const defaultState = {
  pricePerPerson: {
    min: null,
    max: null,
  },
  hotelFacilities: [],
  starRating: [],
};

export const useHolidayFilter = (
  holidays: Holiday[]
): {
  holidays: Holiday[];
  filters: HolidayFilterModel;
  hasActiveFilters: boolean;
  setFilters: Dispatch<SetStateAction<HolidayFilterModel>>;
  resetFilters: () => void;
} => {
  const [filters, setFilters] = useState<HolidayFilterModel>(defaultState);
  const resetFilters = useCallback(
    () => setFilters(defaultState),
    [setFilters]
  );
  // In practice would do some comparison of the defaultState for scalability
  const hasActiveFilters = useMemo(() => {
    return (
      filters.starRating.length > 0 ||
      filters.hotelFacilities.length > 0 ||
      filters.pricePerPerson.min !== null ||
      filters.pricePerPerson.max !== null
    );
  }, [filters]);

  // Do filtering - this is incredibly simplistic and specific, obviously would identify types of filter and abstract
  const filteredHolidays: Holiday[] = holidays.filter((holiday) => {
    let include = [];

    if (filters.pricePerPerson.min !== null) {
      include.push(holiday.pricePerPerson >= filters.pricePerPerson.min);
    }

    if (filters.pricePerPerson.max !== null) {
      include.push(holiday.pricePerPerson <= filters.pricePerPerson.max);
    }

    // Candidate for refactor - cyclomatic complexity
    if (filters.hotelFacilities.length > 0) {
      include.push(
        filters.hotelFacilities.every((item) =>
          holiday.hotel.content.hotelFacilities.includes(item)
        )
      );
    }

    if (filters.starRating.length > 0) {
      include.push(
        filters.starRating.includes(`${holiday.hotel.content.starRating}`)
      );
    }

    return include.every(Boolean);
  });

  return {
    holidays: filteredHolidays,
    filters,
    setFilters,
    resetFilters,
    hasActiveFilters,
  };
};

export const useHotelFacilitiesFilters = (
  holidays: Holiday[]
): FilterOption[] => {
  // Get flat array of all values from holidays
  const k = holidays.map((hol) => hol.hotel.content.hotelFacilities).flat();
  // Dedupe array using Set
  const set = new Set(k);
  const result: FilterOption[] = [];
  // Build up our filter options
  set.forEach((value) => {
    result.push({ label: value, value: value });
  });
  return result;
};

export const useHotelStarRatingFilters = (): FilterOption[] => {
  return [
    {
      label: "1 star",
      value: "1",
    },
    {
      label: "2 star",
      value: "2",
    },
    {
      label: "3 star",
      value: "3",
    },
    {
      label: "4 star",
      value: "4",
    },
    {
      label: "5 star",
      value: "5",
    },
  ];
};

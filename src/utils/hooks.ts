import { Holiday } from "@/types/booking";
import { HolidayFilterModel } from "@/types/filter";
import { SearchBody, SearchParams } from "@/types/search";
import { Rooms } from "@/utils/composition.service";

export const useSearchBody: (params: SearchParams) => SearchBody = (params) => {
  return {
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
};

export const useHolidayFilter: (
  holidays: Holiday[],
  filters: HolidayFilterModel | null
) => Holiday[] = (holidays, filters) => {
  if (!filters) return holidays;

  return [];
};

import { Holiday } from "@/types/booking";
import { HolidayFilterModel } from "@/types/filter";
import { SearchBody, SearchParams } from "@/types/search";
import { Rooms } from "@/utils/composition.service";
import slugify from "slugify";

export const useSearchBody = (params: SearchParams): SearchBody => {
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

export const useHolidayFilter = (
  holidays: Holiday[],
  filters: HolidayFilterModel | null
): Holiday[] => {
  if (!filters) return holidays;

  return [];
};

export const useHotelFacilitiesFilters = (
  holidays: Holiday[]
): { label: string; value: string }[] => {
  const k = holidays.map((hol) => hol.hotel.content.hotelFacilities);
  const set = new Set(k.flat());
  const result: { label: string; value: string }[] = [];
  set.forEach((value) => {
    result.push({ label: value, value: slugify(value) });
  });
  return result;
};

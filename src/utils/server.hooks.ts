import { SearchBody, SearchParams } from "@/types/search";
import { Rooms } from "@/utils/composition.service";

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

import { PartyComposition } from "@/types/booking";

export type SearchParam = string | string[] | undefined;

export interface SearchParams {
  [key: string]: SearchParam;
}

export interface SearchBody {
  bookingType: SearchParam;
  direct: boolean;
  location: SearchParam;
  departureDate: SearchParam;
  duration: SearchParam;
  gateway: SearchParam;
  partyCompositions: PartyComposition[] | undefined;
}

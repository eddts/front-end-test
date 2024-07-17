export interface HolidayFilterModel {
  pricePerPerson: {
    min: number | null;
    max: number | null;
  };
  hotelFacilities: string[];
  starRating: string[];
}

export interface FilterOption {
  label: string;
  value: string;
}

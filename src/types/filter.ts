export interface HolidayFilterModel {
  pricePerPerson: {
    min: number;
    max: number;
  };
  hotelFacilities: string[];
  starRating: {
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    5: boolean;
  };
}

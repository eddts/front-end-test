import { filterHolidays } from "@/utils/client.hooks";
import { DEFAULT_HOLIDAY_FILTER_MODEL } from "@/utils/constants";
import holidays from "../fixtures/holidays.json";

describe("Client hooks", () => {
  describe("filterHolidays", () => {
    it("should not filter when no filters are set", () => {
      const filtered = filterHolidays(holidays, DEFAULT_HOLIDAY_FILTER_MODEL);
      expect(filtered).to.deep.equal(holidays);
    });

    it("should exclusively filter holidays by facility", () => {
      const filtered = filterHolidays(holidays, {
        ...DEFAULT_HOLIDAY_FILTER_MODEL,
        hotelFacilities: ["Restaurant", "Bar"],
      });
      expect(filtered.length).to.equal(4);
    });

    it("should inclusively filter holidays by star rating", () => {
      let filtered = filterHolidays(holidays, {
        ...DEFAULT_HOLIDAY_FILTER_MODEL,
        starRating: ["3"],
      });
      expect(filtered.length).to.equal(3);

      filtered = filterHolidays(holidays, {
        ...DEFAULT_HOLIDAY_FILTER_MODEL,
        starRating: ["3", "5"],
      });
      expect(filtered.length).to.equal(5);
    });

    it("should filter holidays by minimum price", () => {
      let filtered = filterHolidays(holidays, {
        ...DEFAULT_HOLIDAY_FILTER_MODEL,
        pricePerPerson: {
          min: 2000,
          max: null,
        },
      });

      expect(filtered.length).to.equal(1);
    });

    it("should filter holidays by maximum price", () => {
      let filtered = filterHolidays(holidays, {
        ...DEFAULT_HOLIDAY_FILTER_MODEL,
        pricePerPerson: {
          min: null,
          max: 2000,
        },
      });

      expect(filtered.length).to.equal(5);
    });
  });
});

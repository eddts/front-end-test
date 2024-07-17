import { Holiday } from "@/types/booking";
import { HolidayFilterModel } from "@/types/filter";
import styles from "./search-filters.module.css";

export default async function SearchFiltersComponent({
  onChange,
  holidays,
}: {
  onChange: (filters: HolidayFilterModel) => void;
  holidays: Holiday[];
}) {
  return (
    <nav className={styles.searchFilters}>
      <h1 className={styles.title}>Filter holidays</h1>

      <section className={styles.section}>
        <h2>Price per person</h2>
        <label className={styles.input} htmlFor="min">
          Min
          <input name="min" id="min" type="number" />
        </label>
        <label className={styles.input} htmlFor="max">
          Max
          <input name="max" id="max" type="number" />
        </label>
      </section>

      <section className={styles.section}>
        <h2>Hotel facilities</h2>
      </section>

      <section className={styles.section}>
        <h2>Star rating</h2>
        <label className={styles.checkbox} htmlFor="1star">
          1 star
          <input type="checkbox" name="1star" id="1star" />
        </label>
        <label className={styles.checkbox} htmlFor="2star">
          2 star
          <input type="checkbox" name="2star" id="2star" />
        </label>
        <label className={styles.checkbox} htmlFor="3star">
          3 star
          <input type="checkbox" name="3star" id="3star" />
        </label>
        <label className={styles.checkbox} htmlFor="4star">
          4 star
          <input type="checkbox" name="4star" id="4star" />
        </label>
        <label className={styles.checkbox} htmlFor="5star">
          5 star
          <input type="checkbox" name="5star" id="5star" />
        </label>
      </section>
    </nav>
  );
}

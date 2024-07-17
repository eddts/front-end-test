import SearchResultsComponent from "@/app/components/search-results/search-results.component";
import Loading from "@/app/results/loading";
import { SearchParams } from "@/types/search";
import { Suspense } from "react";
import styles from "./page.module.css";

export default function Results({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <>
      <h1 className={styles.title}>Search results</h1>

      <Suspense fallback={<Loading />}>
        <SearchResultsComponent searchParams={searchParams} />
      </Suspense>
    </>
  );
}

import SearchListingComponent from "@/app/components/search-listing/search-listing.component";
import { BookingResponse } from "@/types/booking";
import { SearchBody, SearchParams } from "@/types/search";
import { useSearchBody } from "@/utils/server.hooks";

async function getData(body: SearchBody) {
  const res = await fetch(
    "https://www.virginholidays.co.uk/cjs-search-api/search",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SearchResultsComponent({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const body = useSearchBody(searchParams);
  const { holidays }: BookingResponse = await getData(body);

  return <SearchListingComponent holidays={holidays} />;
}

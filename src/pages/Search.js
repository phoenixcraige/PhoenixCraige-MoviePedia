import { default as useFetch } from "../hooks/useFetch.js";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Index.js";

export function Search({ apiPath }) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-grey-700 dark:text-white">
          {movies.length === 0
            ? `no result found for ${queryTerm}`
            : `result for ${queryTerm}:`}
        </p>
      </section>
      <section className="max-w-7xl m-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}

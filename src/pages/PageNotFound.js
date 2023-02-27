import { Link } from "react-router-dom";
import PageNotFoundImg from "../assets/error.png";

export function PageNotFound() {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4  ">
          {/* <p className="text-5xl text-grey-700 font-bold my-6 dark:text-white">
            404, Ooops
          </p> */}
          <div className="max-w-sm">
            <img
              className="rounded"
              src={PageNotFoundImg}
              alt="page not found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-64 text-xl text-white bg-gradient-to-r from-cyan-500 via-cyan-700 to-blue-500 ... rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

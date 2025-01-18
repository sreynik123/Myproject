import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchMovie } from "../features/movie/movieAction";
import Appbutton from "../component/Appbutton"
import { decrement, increment } from "../features/counter/CounterSilce";

export default function Home1() {
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.movie)

  useEffect(() => {
    dispatch(fetchMovie())
  }, [])

  function onIncreasement() {
    console.log("Increasement")
    dispatch(increment())
  }
  const onDecresement = () => {
    console.log("Decresement")
    dispatch(decrement())
  }
  return (
    <main>
      <div className=" px-4 py-2  grid grid-cols-2 gap-2 p-4 bg-white ">
        <Appbutton onClick={onIncreasement} icon={<FaPlus />} />
        <Appbutton onClick={onDecresement} icon={<FaMinus />} />
      </div>
      <hr />
      <ul className=" bg-white p-5   grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3 shadow-2xl">
        {data.results &&
          data.results.map((movie) => (
            <li className="w-full mx-auto group sm:max-w-sm" >
              <a href="#">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  loading="lazy"
                  alt={movie.original_title}
                  className="w-full rounded-lg"
                />
                <div className="mt-3 space-y-2">
                  <span className="block text-indigo-600 text-sm">
                    {movie.release_date}
                  </span>
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {movie.original_title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                    {movie.overview}
                  </p>
                </div>
              </a>
            </li>
          ))}
      </ul>
      
    </main>
  )
}

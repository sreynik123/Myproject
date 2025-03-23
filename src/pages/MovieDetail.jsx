import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchMovieDatail } from "../features/movie/MovieAction";

export default function MovieDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.movie);
  useEffect(() => {
    console.log("Movie Detail UseEffect");
    dispatch(fetchMovieDatail(params.id));
    console.log ()
  }, []);

 
  return (
    <section
    style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/w1066_and_h600/${detail.backdrop_path})`
    }}
    
    
    className="relative overflow-hidden shadow-sm transition hover:shadow-lg">
   
  
    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
      <div className="p-4 sm:p-6">
        <time datetime="2022-10-10" className="block text-xs text-white/90">{detail.original_title} </time>
    
        <a target="_blank"
        href={detail.homepage}>
          <h3 className="mt-0.5 text-lg text-white">View Movie</h3>
        </a>
  
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
        {detail.overview}
         
        </p>
      </div>
    </div>
  </section>
  );
}

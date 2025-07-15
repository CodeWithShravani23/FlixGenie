import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice"

const useVdoTrailer = (movieid) => {

  const dispatch = useDispatch();
  const vdoTrailer =useSelector(store=>store.movie.movieTrailer)
  console.log("hook loaded");

  const getVdoTrailer = async () => {
    try {
      const data = await fetch(
        `https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy/?path=/movie/${movieid}/videos&language=en-US`
      );


      const json = await data.json();
      // console.log(json.results);
      // dispatch(addMovies(json.results));
      const filterData = json.results.filter(results => results.type === "Trailer")
      dispatch(addTrailer(filterData[0]))
      console.log(filterData[0]);
    } catch (error) {
      console.error("🔥 Fetch error: ", error);
    }
  };

  useEffect(() => {
   !vdoTrailer && getVdoTrailer();
  }, []);





}
export default useVdoTrailer;
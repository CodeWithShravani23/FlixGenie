import { useEffect } from "react";
import { options} from "../utils/constant";
import { useDispatch } from "react-redux";
import {addTrailer} from "../utils/movieSlice"

const useVdoTrailer =(movieid)=>{
 
  const dispatch=useDispatch();
    console.log("hook loaded");

    const getVdoTrailer = async () => {  
      try {
       const data = await fetch(
  `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
  options
);

        const json = await data.json();
        // console.log(json.results);
        // dispatch(addMovies(json.results));
      const filterData=json.results.filter(results=>results.type==="Trailer")
      dispatch(addTrailer(filterData[0]))
      console.log(filterData[0]);
      } catch (error) {
        console.error("🔥 Fetch error: ", error);
      }
    };
    
    useEffect(()=>{
        getVdoTrailer();
    },[]);





}
export default useVdoTrailer;
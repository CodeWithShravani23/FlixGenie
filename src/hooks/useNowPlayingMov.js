import { useDispatch } from "react-redux";
import { url } from "../utils/constant"
import { useEffect } from "react";
import { addMovies } from "../utils/movieSlice";

const useNowPlayingMov = () => {
  const dispatch = useDispatch();
  const getNowPlayingMov = async () => {

    try {
      const data = await fetch(url);
      const json = await data.json();
     
      dispatch(addMovies(json.results));
    } catch (error) {
      console.error("🔥 Fetch error: ", error);
    }
  };

  useEffect(() => {
    getNowPlayingMov();
  }, []);
}
export default useNowPlayingMov;

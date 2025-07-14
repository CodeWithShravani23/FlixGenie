import { useDispatch } from "react-redux";
import { upurl } from "../utils/constant"
import { useEffect } from "react";
import { addUpcoming } from "../utils/movieSlice";

const useUpcomingMov = () => {
  const dispatch = useDispatch();
  const getUpcomingMov = async () => {
    try {
      const data = await fetch(upurl);
      const json = await data.json();
    
      dispatch(addUpcoming(json.results));
    } catch (error) {
      console.error("🔥 Fetch error: ", error);
    }
  };

  useEffect(() => {
    getUpcomingMov();
  }, []);
}
export default useUpcomingMov;
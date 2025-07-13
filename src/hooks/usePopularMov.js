import { useDispatch } from "react-redux";
import { popurl } from "../utils/constant"
import { useEffect } from "react";
import { addPopular } from "../utils/movieSlice";

const usePopularMov = () => {
    const dispatch = useDispatch();
    const getPopularMov = async () => {

        try {
            const data = await fetch(popurl);
            const json = await data.json();
            console.log(json.results);
            dispatch(addPopular(json.results));
        } catch (error) {
            console.error("🔥 Fetch error: ", error);
        }
    };

    useEffect(() => {
        getPopularMov();
    }, []);
}
export default usePopularMov;
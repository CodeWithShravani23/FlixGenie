import { useDispatch } from "react-redux";
import { options, url } from "../utils/constant"
import { useEffect } from "react";
import { addMovies } from "../utils/movieSlice";

const useNowPlayingMov=()=>{
    const dispatch=useDispatch();
const getNowPlayingMov=async()=>{
    const data= await fetch(url, options);
    const json = await data.json();
    console.log(json.results);
    dispatch(addMovies(json.results));
}
useEffect(()=>{
    getNowPlayingMov();
},[]);
}
export default useNowPlayingMov;

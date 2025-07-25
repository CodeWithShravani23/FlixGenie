import React from 'react';
import { imgUrl } from '../utils/constant';
import { useNavigate } from "react-router-dom";
const MovieCard = ({ posterPath, title,id }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };
  if (!posterPath) return null;


  return (
    <div onClick={handleClick}
      className="group relative rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:z-10"
    >
      <img
        src={imgUrl + posterPath}
        alt={title || 'Movie poster'}
        loading="lazy"
        className="w-full h-full object-cover aspect-[2/3] rounded-2xl"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-0 w-full px-4 pb-4 pt-2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        <p className="text-white text-sm sm:text-base font-semibold line-clamp-2 drop-shadow-md">
          {title}
        </p>
        <div className="flex items-center text-xs text-gray-300 mt-1 gap-3">
          <span className="text-yellow-400 font-medium">★ 4.5</span>
          <span className="bg-white/10 text-white px-1.5 py-0.5 rounded-md text-[10px]">
            HD
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

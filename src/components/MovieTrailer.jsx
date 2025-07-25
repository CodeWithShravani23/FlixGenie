import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieTrailer = () => {
  const { id } = useParams();
  const [trailerKey, setTrailerKey] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const videoRes = await fetch(
          `https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy/?path=/movie/${id}/videos&language=en-US`
        );
        const videoData = await videoRes.json();
        const trailer = videoData.results.find((vid) => vid.type === "Trailer");
        if (trailer) setTrailerKey(trailer.key);

        const detailRes = await fetch(
          `https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy/?path=/movie/${id}&language=en-US`
        );
        const detailData = await detailRes.json();
        setMovieDetails(detailData);
      } catch (error) {
        console.error("🚨 Failed to load movie data:", error);
      }
    };

    if (id) fetchTrailer();
  }, [id]);

  return (
    <div className="top-0 left-0 w-screen h-screen bg-black z-50 flex flex-col">
     

      {/* Trailer Section */}
      <div className="w-full h-[60%] relative">
        {trailerKey ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0`}
            title="Movie Trailer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-white text-center pt-10 text-lg">Loading trailer...</p>
        )}
      </div>

      {/* Description Section */}
      <div className="w-full h-[40%] overflow-y-auto px-6 py-4 text-white bg-gradient-to-b from-black via-zinc-900 to-black">
        <h2 className="text-3xl font-bold mb-3">
          {movieDetails?.title || 'Loading Title...'}
        </h2>
        <p className="text-base leading-relaxed text-gray-300">
          {movieDetails?.overview || 'Fetching movie description...'}
        </p>
      </div>
       <Link
        to="/"
        className=" left-4 w-40 bg-red-600 text-white px-4 py-2 mx-3 my-3 rounded z-50"
      >
        ← Back to ShowGenie
      </Link>
    </div>
  );
};

export default MovieTrailer;











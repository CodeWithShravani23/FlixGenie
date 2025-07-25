import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieTrailer = () => {
  const { id } = useParams();
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy/?path=/movie/${id}/videos&language=en-US`
        );
        const data = await response.json();
        const trailer = data.results.find((vid) => vid.type === "Trailer");
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error("🚨 Trailer fetch failed:", error);
      }
    };

    if (id) {
      fetchTrailer();
    }
  }, [id]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 overflow-hidden bg-black">
      {trailerKey ? (
        <iframe
          className="absolute top-0 left-0 w-[100vw] h-[100vh]"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
          title="YouTube Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-white text-xl text-center mt-10">Loading trailer...</p>
      )}
    </div>
  );
};

export default MovieTrailer;






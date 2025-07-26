import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';


const MovieTrailer = () => {
  const { id } = useParams();
  const [trailerKey, setTrailerKey] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const playerRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const videoRes = await fetch(
          `https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy/?path=/movie/${id}/videos&language=en-US`
        );
        const videoData = await videoRes.json();
        const trailer = videoData.results.find((vid) => vid.type === 'Trailer');
        if (trailer) setTrailerKey(trailer.key);


        const detailRes = await fetch(
          `https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy/?path=/movie/${id}&language=en-US`
        );
        const detailData = await detailRes.json();
        setMovieDetails(detailData);

      } catch (error) {
        console.error('🚨 Failed to load movie data:', error);
      }
    };

    if (id) fetchTrailer();
  }, [id]);

  // Load YouTube IFrame API
  useEffect(() => {
    const loadYouTubeAPI = () => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };

    if (!window.YT) loadYouTubeAPI();
    else if (trailerKey && window.YT.Player) createPlayer();

    window.onYouTubeIframeAPIReady = () => {
      if (trailerKey) createPlayer();
    };
  }, [trailerKey]);

  const createPlayer = () => {
    const newPlayer = new window.YT.Player('yt-player', {
      events: {
        onReady: (event) => {
          event.target.mute();
          event.target.playVideo();
          playerRef.current = event.target;
          setPlayerReady(true);
          setIsMuted(true);
        },
      },
    });
  };

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 overflow-hidden bg-black">
      {/* YouTube Trailer */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        {trailerKey ? (
          <iframe
            id="yt-player"
            className="w-[150vw] h-[84.375vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={`https://www.youtube.com/embed/${trailerKey}?&mute=1&controls=0&loop=1&playlist=${trailerKey}&modestbranding=1&rel=0&disablekb=1&enablejsapi=1&fs=0&showinfo=0&iv_load_policy=3`}
            title="Movie Trailer"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black/80 text-white text-xl font-semibold">
            Trailer not available 😔
          </div>
        )}
      </div>


      {/* Overlay Content */}
     {/* Overlay Content */}
{/* Overlay Content */}
<div className="absolute inset-0 flex flex-col justify-between px-4 py-6 text-white">
  {/* ✅ Mobile view: Top Title + Description */}
  <div className="block md:hidden">
    <h2 className="text-2xl font-bold mb-2">{movieDetails?.title || 'Loading Title...'}</h2>
    <p className="text-sm max-h-28 overflow-y-auto text-gray-300 leading-relaxed">
      {movieDetails?.overview || 'Fetching movie description...'}
    </p>
  </div>

  {/* ✅ Bottom content: common buttons + desktop text */}
  <div className="mt-auto">
    {/* 🖥️ Desktop view: Bottom Title + Description */}
    <div className="hidden md:block mb-4">
      <h2 className="text-4xl font-bold">{movieDetails?.title || 'Loading Title...'}</h2>
      <div className="max-h-40 w-3/4 overflow-y-auto pr-2 text-gray-300 text-base leading-relaxed">
        {movieDetails?.overview || 'Fetching movie description...'}
      </div>
    </div>

    {/* 🔊 Mute + ⬅ Back Button (Always visible) */}
    <div className="flex items-center gap-4">
      {playerReady && (
        <button
          onClick={toggleMute}
          className="text-white hover:text-green-400 transition text-2xl"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <FiVolumeX /> : <FiVolume2 />}
        </button>
      )}
      <Link
        to="/"
        className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded text-white transition"
      >
        ← Back
      </Link>
    </div>
  </div>
</div>

    </div>
  );
};

export default MovieTrailer;














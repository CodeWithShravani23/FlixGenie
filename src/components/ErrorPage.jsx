import React from "react";
import { Link } from "react-router-dom"; // optional if using routing
import popcorn from "../assets/popcorn.png"; // replace with any fun image or emoji

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white bg-black px-4">
      <img
        src={popcorn}
        alt="popcorn"
        className="w-32 h-32 mb-6 animate-bounce"
      />

      <h1 className="text-5xl font-bold mb-4 text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Lost in the Stream 🍿</h2>
      <p className="mb-6 text-gray-400">
        The page you're looking for didn’t make it through the binge-watch queue.
      </p>

      <Link to="/" className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-md font-bold transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;

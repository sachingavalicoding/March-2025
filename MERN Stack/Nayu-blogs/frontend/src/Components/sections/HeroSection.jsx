import { Link } from "react-router-dom";
import React from "react";
const HeroSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-center py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to <span className="text-blue-500">Nayu Blogs</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg">
          Explore the latest blogs on technology, programming, and more!
        </p>
        <Link
          to="/blogs"
          className="mt-6 inline-block bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Explore Blogs
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

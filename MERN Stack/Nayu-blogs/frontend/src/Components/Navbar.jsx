import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import React from "react";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]); 

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
          Nayu Blogs
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-900 dark:text-white">Home</Link>
          <Link to="/blogs" className="text-gray-900 dark:text-white">Blogs</Link>
          <Link to="/addblog" className="text-gray-900 dark:text-white">Add Blog</Link>
          
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
          >
            {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-700" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

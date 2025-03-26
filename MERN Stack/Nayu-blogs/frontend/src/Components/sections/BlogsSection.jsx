import { useState, useEffect } from "react";
import React from "react";
import image1 from "/images/default.png";
import axios from "axios";
const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from backend (or use static data for now)
  //   useEffect(() => {
  //     setBlogs([
  //       {
  //         id: 1,
  //         title: "Mastering React Hooks",
  //         description: "Learn how to use React Hooks efficiently in your projects.",
  //         image: image1
  //       },
  //       {
  //         id: 2,
  //         title: "Understanding Node.js",
  //         description: "A beginner's guide to backend development with Node.js.",
  //         image: image1
  //       },
  //       {
  //         id: 3,
  //         title: "CSS Tricks for Developers",
  //         description: "Enhance your frontend skills with these CSS tips.",
  //         image: image1
  //       },
  //       {
  //         id: 4,
  //         title: "MongoDB Best Practices",
  //         description: "Optimize your MongoDB queries for better performance.",
  //         image: image1
  //       },
  //     ]);
  //   }, []);
  // Fetch blogs from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs") // Adjust this URL as per your backend
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);
  return (
    <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">All Blogs</h1>
    <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
      Explore our latest blog posts.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog._id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <img src={blog.image || image1} alt={blog.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              {blog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{blog.description.slice(0, 100)}...</p>
            <Link
              to={`/blogs/${blog._id}`}
              className="mt-2 inline-block text-blue-600 dark:text-blue-400"
            >
              Read More →
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-300">No blogs available.</p>
      )}
    </div>
  </div>
  );
};

export default BlogsSection;

import { Link } from "react-router-dom";
import image1 from "/images/default.png";
import React from "react";
const RecentBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Mastering React Hooks",
      description: "Learn how to use React Hooks efficiently in your projects.",
      image: image1,
    },
    {
      id: 2,
      title: "Understanding Node.js",
      description: "A beginner's guide to backend development with Node.js.",
      image: image1,
    },
    {
      id: 3,
      title: "CSS Tricks for Developers",
      description: "Enhance your frontend skills with these CSS tips.",
      image: image1,
    },
  ];

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Recent Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              {blog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{blog.description}</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <Link
          to="/blogs"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          View More Blogs
        </Link>
      </div>
    </div>
  </section>
  );
};

export default RecentBlogs;

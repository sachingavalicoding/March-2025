import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  if (!blog) return <p className="text-center text-gray-600 dark:text-gray-300">Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full max-h-[500px] object-cover rounded-md my-6" />
      <p className="text-gray-600 dark:text-gray-300 text-lg">{blog.description}</p>
    </div>
  );
};

export default BlogDetails;

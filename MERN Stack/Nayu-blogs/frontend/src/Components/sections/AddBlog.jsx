import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !image) {
      alert("All fields are required!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/blogs", { title, description, image });
      navigate("/blogs");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Add New Blog</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <label className="block text-gray-700 dark:text-gray-300">Title:</label>
        <input
          type="text"
          className="w-full p-2 border rounded mt-2 bg-gray-100 dark:bg-gray-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="block text-gray-700 dark:text-gray-300 mt-4">Description:</label>
        <textarea
          className="w-full p-2 border rounded mt-2 bg-gray-100 dark:bg-gray-700"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="block text-gray-700 dark:text-gray-300 mt-4">Image URL:</label>
        <input
          type="text"
          className="w-full p-2 border rounded mt-2 bg-gray-100 dark:bg-gray-700"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit" className="mt-6 w-full bg-blue-600 text-white p-2 rounded">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;

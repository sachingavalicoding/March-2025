import { useState } from "react";
import axios from "axios"; // Import Axios

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/web/user/add", formData);
      
      console.log(response.data); 
      alert(response.data.message); 
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
      alert("Signup failed! " + (error.response?.data?.message || "Try again later."));
    }
  };

  return (
    <section className="mt-24 w-full bg-slate-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Signup
        </button>
      </form>
    </section>
  );
};

export default Signup;

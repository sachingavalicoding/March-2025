import axios from "axios";
import { useEffect, useState } from "react";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/web/user/getall");
        
        if (response.data.status === 1) {
          setUsers(response.data.data); // Assuming 'data' contains the list of users
        } else {
          console.log("Failed to fetch users:", response.data.message);
        }
      } catch (error) {
        console.log("ERROR IN FETCHING USERS:", error);
      }
    };

    fetching();
  }, []);

  return (
    <div className="w-full bg-slate-100 px-6 py-4 flex gap-4 flex-wrap">
      <ul>
        {users.map((user) => (
          <li key={user._id}> {/* Use `_id` instead of `id` */}
            {user.username} - {user.email} {/* Display user details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUser;

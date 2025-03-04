import React, { useState, useEffect } from "react";
import { User, Calendar, MapPin, Settings } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createOrUpdateUser } from "../http/userService";
import { getRefData } from "../http/refService";

function UserAccess() {
  const [userId, setUserId] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [expirationDate, setExpirationDate] = useState("");
  const [locations, setLocations] = useState([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    fetchLocations();
  }, []);

  async function fetchLocations() {
    try {
      const data = await getRefData("location"); // Call API function
      if (data.length > 0) {
        setLocations(data);
      } else {
        toast.error("Failed to fetch locations");
      }
    } catch (err) {
      toast.error("Failed to fetch locations");
      console.error("Error fetching locations:", err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      user_id: userId,
      is_active: isActive,
      date_of_expiration: expirationDate,
      location: locations,
      role,
    };

    try {
      const response = await createOrUpdateUser(userData);
      console.log("User Access Data Submitted:", response);
      toast.success("User data submitted successfully!");
    } catch (error) {
      console.error("Error submitting user data:", error);
      toast.error("Error submitting user data!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex flex-col">
      {/* Admin Form Section */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-5 space-y-2">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-[#820C59]">Admin Control</h1>
              <p className="mt-2 text-gray-600">Manage user access rights</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {/* User ID */}
                <div className="relative">
                  <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200"
                    placeholder="User ID"
                    required
                  />
                  <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                {/* Expiration Date */}
                <div className="relative">
                  <input
                    type="date"
                    id="expirationDate"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    className="peer w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200 text-gray-500"
                    required
                  />
                  <Calendar className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Role Selection */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-2"></label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200 text-gray-500"
                  required
                >
                  <option value="" disabled>Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
                <Settings className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>

              {/* Location */}
              <div className="relative">
                <select
                  value={locations}
                  onChange={(e) => setLocations(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200 text-gray-500"
                  required
                >
                  <option value="" disabled>Select a location</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
                <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>

              {/* Is Active (Boolean) */}
              <div className="mb-4 flex">
                <label className="block text-gray-700 font-medium mr-4">Is Active:</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2 text-gray-600">
                    <input
                      type="radio"
                      value="yes"
                      checked={isActive === true}
                      onChange={() => setIsActive(true)}
                      className="form-radio text-indigo-600"
                    />
                    <span>Yes</span>
                  </label>

                  <label className="flex items-center left-10 space-x-3 text-gray-600">
                    <input
                      type="radio"
                      value="no"
                      checked={isActive === false}
                      onChange={() => setIsActive(false)}
                      className="form-radio text-indigo-600 "
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-2.5 border border-transparent text-base font-medium rounded-lg text-white bg-[#820C59] hover:bg-[#722156] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
              >
                Save User Access
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccess;
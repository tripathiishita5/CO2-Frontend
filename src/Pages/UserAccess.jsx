
import React, { useState, useEffect } from "react";
import { User, Calendar, MapPin, Settings } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createOrUpdateUser, getUserById } from "../http/userService";
import { getRefData } from "../http/refService";

function UserAccess() {
  // Admin form state
  const [refLocations, setRefLocations] = useState([]); // Stores API response
  const [userId, setUserId] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [expirationDate, setExpirationDate] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("USER");

  // Get today's date in YYYY-MM-DD format for the min attribute
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetchDistinctLocations();
  }, []);

  async function fetchUerDeatilById(Id) {
    if (parseInt(Id) > 0) {
      const response = await getUserById(Id);
      const userData = response[0];
      if (response.length > 0) {
        setIsActive(userData.is_active);
        setExpirationDate(userData.date_of_expiration);
        setLocation(userData.location ?? "1");
        setRole(userData.role);
      }
      console.log(userData);
    }
  }

  async function fetchDistinctLocations() {
    try {
      const data = await getRefData("location"); // Call API function
      if (data.length > 0) {
        setRefLocations(data);
        setLocation("1");
      } else {
        toast.error("Failed to ftech locations");
      }
    } catch (err) {
      toast.error("Failed to ftech locations");
      console.error("Error fetching locations:", err);
    }
  }

  const handleAdminSubmit = async (e) => {
    e.preventDefault();

    // Validate userId is a number
    const userIdNumber = parseInt(userId);
    if (isNaN(userIdNumber)) {
      toast.error("User ID must be a number");
      return;
    }
    const locationCode = parseInt(location);
    if (isNaN(locationCode)) {
      toast.error("Please select Location");
      return;
    }
    if (role == "") {
      toast.error("Please select role");
      return;
    }

    const userData = {
      user_id: userIdNumber,
      is_active: isActive,
      date_of_expiration: expirationDate,
      location: locationCode,
      role: role,
    };
    console.log("Sending Data: ", userData);
    try {
      const response = await createOrUpdateUser(userData); // Use the register function

      console.log("Registration successful:", response.data);
      toast.success("Data updated successfully!");

      // Reset form
      setUserId("");
      setIsActive(true);
      setExpirationDate("");
      setLocation("");
      setRole("USER");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">
                User Management
              </h1>
              <p className="mt-2 text-gray-600">Create or update user rights</p>
            </div>
            <form onSubmit={handleAdminSubmit} className="space-y-6">
              {/* User ID */}
              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#820C59] focus-within:border-[820C59] transition-all duration-200">
                <User className="ml-4 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  value={userId}
                  onBlur={() => fetchUerDeatilById(userId)}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full py-3 px-4 bg-transparent focus:outline-none"
                  placeholder="User ID (numbers only)"
                  required
                />
              </div>

              {/* Expiration Date */}
              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#820C59] focus-within:border-[#820C59] transition-all duration-200">
                <Calendar className="ml-4 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  min={today}
                  className="w-full py-3 px-4 bg-transparent focus:outline-none"
                  required
                />
              </div>

              {/* Role */}
              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#820C59] focus-within:border-[820C59] transition-all duration-200">
                <Settings className="ml-4 h-5 w-5 text-gray-400" />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full py-3 px-4 bg-transparent focus:outline-none"
                  required
                >
                  <option value="USER">User</option>
                  <option value="MANAGER">Manager</option>
                </select>
              </div>

              {/* Location */}
              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#820C59] focus-within:border-[820C59] transition-all duration-200">
                <MapPin className="ml-4 h-5 w-5 text-gray-400" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full py-3 px-4 bg-transparent focus:outline-none"
                  required
                >
                  {refLocations.map((loc, index) => (
                    <option key={index} value={loc.value}>
                      {loc.text}
                    </option>
                  ))}
                </select>
              </div>

              {/* Is Active */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Account Status:</span>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="isActive"
                    checked={isActive}
                    onChange={() => setIsActive(true)}
                    className="form-radio accent-[#820C59]"
                  />
                  <span className="ml-2">Active</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="isActive"
                    checked={!isActive}
                    onChange={() => setIsActive(false)}
                    className="form-radio accent-[#820C59]"
                  />
                  <span className="ml-2">Inactive</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-3 text-base font-medium rounded-lg text-white bg-[#820C59] hover:bg-[#722156] transition-colors duration-200"
              >
                Save User Data
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default UserAccess;

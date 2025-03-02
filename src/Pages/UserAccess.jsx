import React, { useState, useEffect } from "react";
import { User, Calendar, MapPin, Settings, Clock } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createOrUpdateUser, getUserById } from "../http/userService";
import { getRefData } from "../http/refService";

function UserAccess() {
  const [formType, setFormType] = useState("admin");

  // Admin form state
  const [refLocations, setRefLocations] = useState([]); // Stores API response
  const [userId, setUserId] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [expirationDate, setExpirationDate] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("USER");

  // Edit rights form state
  const [editLocation, setEditLocation] = useState("");
  const [insertUntilDate, setInsertUntilDate] = useState("");
  const [editUntilDate, setEditUntilDate] = useState("");

  // Get today's date in YYYY-MM-DD format for the min attribute
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetchDistinctLocations();
  }, []);

  // Check if the form should be locked based on the edit until date
  useEffect(() => {
    if (editUntilDate) {
      const currentDate = new Date();
      const lockDate = new Date(editUntilDate);
    }
  }, [editUntilDate]);

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
      const data = await getRefData('location'); // Call API function
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
      setRole("");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  const handleEditRightsSubmit = async (e) => {
    e.preventDefault();

    const editData = {
      location: editLocation,
      insert_until_date: insertUntilDate,
      edit_until_date: editUntilDate,
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/edit-rights",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update edit rights");
      }

      toast.success("Edit rights updated successfully!");
      setEditLocation("");
      setInsertUntilDate("");
      setEditUntilDate("");
    } catch (error) {
      console.error("Edit rights update error:", error);
      toast.error("Failed to update edit rights. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            {/* Form Type Selector */}
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setFormType("admin")}
                className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-200 ${
                  formType === "admin"
                    ? "bg-[#820C59] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                User Rights
              </button>
              <button
                onClick={() => setFormType("edit")}
                className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-200 ${
                  formType === "edit"
                    ? "bg-[#820C59] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Form Rights
              </button>
            </div>

            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">
                {formType === "admin"
                  ? "User Management"
                  : "Edit Rights Management"}
              </h1>
              <p className="mt-2 text-gray-600">
                {formType === "admin"
                  ? "Create or update user rights"
                  : "Set location-specific edit permissions"}
              </p>
            </div>

            {formType === "admin" ? (
              <form onSubmit={handleAdminSubmit} className="space-y-6">
                {/* User ID */}
                <div className="relative">
                  <input
                    type="number"
                    value={userId}
                    onBlur={() => {
                      fetchUerDeatilById(userId);
                    }}
                    onChange={(e) => setUserId(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200"
                    placeholder="User ID (numbers only)"
                    required
                  />
                  <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>

                {/* Expiration Date */}
                <div className="relative">
                  <input
                    type="date"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    min={today}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200"
                    required
                  />
                  <Calendar className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>

                {/* Role */}
                <div className="relative">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200"
                    required
                  >
                    <option value="USER">User</option>
                    <option value="MANAGER">Manager</option>
                  </select>
                  <Settings className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>

                {/* Location */}
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200"
                    required
                  >
                    {refLocations.map((loc, index) => (
                      <option key={index} value={loc.value}>
                        {loc.text}
                      </option>
                    ))}
                  </select>
                  <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>

                {/* Is Active */}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Account Status:</span>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      radioGroup="isActive"
                      checked={isActive}
                      onChange={() => setIsActive(true)}
                      className="form-radio text-purple-600"
                    />
                    <span className="ml-2">Active</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      radioGroup="isActive"
                      checked={!isActive}
                      onChange={() => setIsActive(false)}
                      className="form-radio text-purple-600"
                    />
                    <span className="ml-2">Inactive</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#820C59] hover:bg-[#722156] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
                >
                  Register User
                </button>
              </form>
            ) : (
              <form onSubmit={handleEditRightsSubmit} className="space-y-6">
                {/* Location */}
                <div className="relative">
                  <select
                    value={editLocation}
                    onChange={(e) => setEditLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200"
                    required
                  >
                   {refLocations.map((loc, index) => (
                      <option key={index} value={loc.value}>
                        {loc.text}
                      </option>
                    ))}
                  </select>
                  <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>

                {/* Insert Until Date */}
                <div className="relative">
                  <input
                    type="date"
                    value={insertUntilDate}
                    onChange={(e) => setInsertUntilDate(e.target.value)}
                    min={today}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200"
                    required
                  />
                  <Calendar className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500 mt-1 block">
                    Insert values until date
                  </span>
                </div>

                {/* Edit Until Date */}
                <div className="relative">
                  <input
                    type="date"
                    value={editUntilDate}
                    onChange={(e) => setEditUntilDate(e.target.value)}
                    min={today}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200"
                    required
                  />
                  <Clock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500 mt-1 block">
                    Edit values until date
                  </span>
                </div>

                <button
                  type="submit"
                  className={`w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-colors duration-200 bg-[#820C59] hover:bg-[#722156] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
                >
                  Update Edit Rights
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default UserAccess;

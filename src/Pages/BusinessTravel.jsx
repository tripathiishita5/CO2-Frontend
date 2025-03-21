import React, { useState, useEffect } from "react";
import { Save } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getRefData } from "../http/refService";
import { businessTravel } from "../http/businessService";

function BusinessTravel() {
    const [formState, setFormState] = useState({
        ac_year: "",
        month: "",
    });

    const [formValues, setFormValues] = useState({
        travel_type: "",
        mode_of_travel: "",
        distance: "",
        location_from: "",
        location_to: "",
    });

    const [acYears, setAcYears] = useState([]);

    const handleInputChange = (field, value) => {
        if (["ac_year", "month"].includes(field)) {
            setFormState((prev) => ({
                ...prev,
                [field]: value,
            }));
        } else {
            setFormValues((prev) => ({
                ...prev,
                [field]: value,
            }));
        }
    };

    const areMandatoryFieldsFilled =
        formState.ac_year && formState.month;

    // Fetch accounting years when component mounts
    useEffect(() => {
        fetchAcYear();
    }, []);

    async function fetchAcYear() {
        try {
            const data = await getRefData("year");
            if (data && data.length > 0) {
                setAcYears(data);
                setFormState((prevState) => ({
                    ...prevState,
                    ac_year: "",
                }));
            } else {
                toast.error("Failed to fetch accounting years");
            }
        } catch (err) {
            toast.error("Failed to fetch accounting years");
            console.error("Error fetching years:", err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formValues,
            ac_year: formState.ac_year,
            month: formState.month,
        };

        try {
            const response = await businessTravel(payload); // Sending payload to businessTravel API

            console.log("Registration successful:", response.data);
            toast.success("Business Travel Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Error submitting form. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#820C59]/5 to-[#630944]/5 py-8 px-4">
            <form
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8"
            >
                <h1 className="text-3xl font-bold text-[#820C59] mb-6">
                    Business Travel Form
                </h1>

                <div className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Accounting Year *
                            </label>
                            <select
                                value={formState.ac_year}
                                onChange={(e) => handleInputChange("ac_year", e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border-2 border-[#820C59]/20 bg-white focus:border-[#820C59] focus:ring-2 focus:ring-[#820C59]/20 transition-all duration-200 outline-none"
                                required
                            >
                                <option value="">Select year</option>
                                {/* Dynamically render options from acYears state */}
                                {acYears.length > 0 &&
                                    acYears.map((year) => (
                                        <option key={year.value} value={year.value}>
                                            {year.text}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Month *
                            </label>
                            <select
                                value={formState.month}
                                onChange={(e) => handleInputChange("month", e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border-2 border-[#820C59]/20 bg-white focus:border-[#820C59] focus:ring-2 focus:ring-[#820C59]/20 transition-all duration-200 outline-none"
                                required
                            >
                                <option value="">Select month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                    </div>
                </div>

                {!areMandatoryFieldsFilled && (
                    <div className="bg-[#820C59]/5 border-l-4 border-[#820C59] p-4 mb-8 rounded-r-lg">
                        <div className="flex">
                            <p className="ml-3 text-sm text-[#820C59]">
                                Please fill in all mandatory fields to proceed with the form.
                            </p>
                        </div>
                    </div>
                )}

                {areMandatoryFieldsFilled && (
                    <div>
                        {/* Travel Type, Mode of Travel, Distance in one row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            {/* Travel Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Type of Travel
                                </label>
                                <select
                                    value={formValues.travel_type}
                                    onChange={(e) => handleInputChange("travel_type", e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-lg border-2 border-[#820C59]/20 bg-white focus:border-[#820C59] focus:ring-2 focus:ring-[#820C59]/20 transition-all duration-200 outline-none"
                                    required
                                >
                                    <option value="">Select type of travel</option>
                                    <option value="domestic">Domestic</option>
                                    <option value="international">International</option>
                                </select>
                            </div>

                            {/* Mode of Travel */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Mode of Travel
                                </label>
                                <select
                                    value={formValues.mode_of_travel}
                                    onChange={(e) => handleInputChange("mode_of_travel", e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-lg border-2 border-[#820C59]/20 bg-white focus:border-[#820C59] focus:ring-2 focus:ring-[#820C59]/20 transition-all duration-200 outline-none"
                                    required
                                >
                                    <option value="">Select mode of travel</option>
                                    <option value="taxi">Taxi</option>
                                    <option value="flight">Flight</option>
                                    <option value="rail">Rail</option>
                                </select>
                            </div>

                            {/* Distance */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Distance (in km)
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    placeholder="Enter distance"
                                    value={formValues.distance}
                                    onChange={(e) => handleInputChange("distance", e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-lg border-2 border-[#820C59]/20 bg-white focus:border-[#820C59] focus:ring-2 focus:ring-[#820C59]/20 transition-all duration-200 outline-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Location From and Location To in second row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Location From */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Location (From)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter departure location"
                                    value={formValues.location_from}
                                    onChange={(e) => handleInputChange("location_from", e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-lg border-2 border-[#820C59]/20 bg-white focus:border-[#820C59] focus:ring-2 focus:ring-[#820C59]/20 transition-all duration-200 outline-none"
                                    required
                                />
                            </div>

                            {/* Location To */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Location (To)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter destination location"
                                    value={formValues.location_to}
                                    onChange={(e) => handleInputChange("location_to", e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-lg border-2 border-[#820C59]/20 bg-white focus:border-[#820C59] focus:ring-2 focus:ring-[#820C59]/20 transition-all duration-200 outline-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="inline-flex items-center px-6 py-2.5 bg-[#820C59] hover:bg-[#630944] text-white rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            <Save size={16} className="mr-2" />
                            Save All Data
                        </button>
                    </div>
                )}

                <ToastContainer />
            </form>
        </div>
    );
}

export default BusinessTravel;

import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Save, AlertCircle } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getRefData } from "../http/refService";
function Input() {
  const [formState, setFormState] = useState({
    // Mandatory fields
    ac_year: "",
    month: "",
    location: "",

    // Scope toggles
    scope1Open: true,
    scope2Open: false,
    scope3Open: false,
  });

  const [formValues, setFormValues] = useState({
    // Scope 1
    diesel_dg_set: "",
    diesel_others: "",
    petrol: "",
    lpg_process: "",
    r22: "",
    r134a: "",
    r410: "",
    r401: "",
    r32: "",
    co2: "",
    grid: "",

    // Scope 2
    renewable_energy: "",
    steam: "",
    elec_consumption_grid: "",
    t_and_d_losses: "",

    // Scope 3
    lpg_canteen: "",
    rmt_road: "",
    rmt_rail: "",
    rmt_ship: "",
    rmt_air: "",
    tow_road: "",
    bt_air: "",
    bt_rail: "",
    bt_bus: "",
    bt_car: "",
    ec_bus: "",
    ec_bike: "",
    ec_car: "",
    ec_train: "",
    fpd_road: "",
    fpd_rail: "",
    fpd_ship: "",
    fpd_air: "",
  });

  const [scopeData, setScopeData] = useState({
    input_scope1: [],
    input_scope2: [],
    input_scope3: [],
    input_mandatory_year: [],
    input_mandatory_location: [],
    input_mandatory_month: [],
  });

  useEffect(() => {
    // console.log("scoped data: ", scopeData);
    // const fetchScopeData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:5000/api/auth/get-scope-data');
    //         const data = await response.json();
    //         setScopeData(data);
    //     } catch (error) {
    //         console.error('Error fetching scope data:', error);
    //     }
    // };
    // fetchScopeData();
  }, [scopeData]);

  useEffect(() => {
    fetchAcYear();
    fetchDistinctLocations();
  }, []);

  async function fetchAcYear() {
    try {
      const data = await getRefData("year"); // Call API function
      if (data.length > 0) {
        setScopeData((prevState) => ({
          ...prevState,
          input_mandatory_year: data,
        }));
      } else {
        toast.error("Failed to fetch year");
      }
    } catch (err) {
      toast.error("Failed to fetch year");
      console.error("Error fetching year:", err);
    }
  }
  async function fetchDistinctLocations() {
    try {
      const data = await getRefData("location"); // Call API function
      if (data.length > 0) {
        if (data) {
        }
        setScopeData((prevState) => ({
          ...prevState,
          input_mandatory_location: data,
        }));
      } else {
        toast.error("Failed to fetch locations");
      }
    } catch (err) {
      toast.error("Failed to ftech locations");
      console.error("Error fetching locations:", err);
    }
  }
  async function fetchFormFields() {
    try {
      const data = await getRefData("formFields"); // Call API function
      if (data.length > 0) {
        var scope1 = [],scope2 = [],scope3 = [];
        data.forEach((row)=>{
            if(row.scope == 1){
                scope1.push(row.text);
            }else if(row.scope == 2){
                scope2.push(row.text);
            }else if(row.scope == 3){
                scope3.push(row.text);
            }
        })
        setScopeData((prevState) => ({
          ...prevState,
          input_scope1: scope1,
          input_scope2: scope2,
          input_scope3: scope3
        }));
      } else {
        toast.error("Failed to fetch form fields");
      }
    } catch (err) {
      toast.error("Failed to fetch form fields");
      console.error("Error fetching locations:", err);
    }
  }

  // Modified effect to handle cases when no data exists
  useEffect(() => {
    const fetchInputData = async () => {
      if (formState.ac_year && formState.month && formState.location) {
        fetchFormFields();
        // try {
        //   const response = await fetch(
        //     `http://localhost:5000/api/auth/get-input-data/${formState.ac_year}/${formState.month}/${formState.location}/${formState.user_id}`
        //   );
        //   const data = await response.json();

        //   if (data && data.length > 0) {
        //     // Update form values with the fetched data
        //     setFormValues((prev) => ({
        //       ...prev,
        //       ...data[0],
        //     }));
        //   } else {
        //     // Reset all form values to empty strings if no data exists
        //     setFormValues({
        //       // Scope 1
        //       diesel_dg_set: "",
        //       diesel_others: "",
        //       petrol: "",
        //       lpg_process: "",
        //       r22: "",
        //       r134a: "",
        //       r410: "",
        //       r401: "",
        //       r32: "",
        //       co2: "",
        //       grid: "",

        //       // Scope 2
        //       renewable_energy: "",
        //       steam: "",
        //       elec_consumption_grid: "",
        //       t_and_d_losses: "",

        //       // Scope 3
        //       lpg_canteen: "",
        //       rmt_road: "",
        //       rmt_rail: "",
        //       rmt_ship: "",
        //       rmt_air: "",
        //       tow_road: "",
        //       bt_air: "",
        //       bt_rail: "",
        //       bt_bus: "",
        //       bt_car: "",
        //       ec_bus: "",
        //       ec_bike: "",
        //       ec_car: "",
        //       ec_train: "",
        //       fpd_road: "",
        //       fpd_rail: "",
        //       fpd_ship: "",
        //       fpd_air: "",
        //     });
        //   }
        // } catch (error) {
        //   console.error("Error fetching input data:", error);
        //   // Reset form values on error as well
        //   setFormValues({
        //     // Scope 1
        //     diesel_dg_set: "",
        //     diesel_others: "",
        //     petrol: "",
        //     lpg_process: "",
        //     r22: "",
        //     r134a: "",
        //     r410: "",
        //     r401: "",
        //     r32: "",
        //     co2: "",
        //     grid: "",

        //     // Scope 2
        //     renewable_energy: "",
        //     steam: "",
        //     elec_consumption_grid: "",
        //     t_and_d_losses: "",

        //     // Scope 3
        //     lpg_canteen: "",
        //     rmt_road: "",
        //     rmt_rail: "",
        //     rmt_ship: "",
        //     rmt_air: "",
        //     tow_road: "",
        //     bt_air: "",
        //     bt_rail: "",
        //     bt_bus: "",
        //     bt_car: "",
        //     ec_bus: "",
        //     ec_bike: "",
        //     ec_car: "",
        //     ec_train: "",
        //     fpd_road: "",
        //     fpd_rail: "",
        //     fpd_ship: "",
        //     fpd_air: "",
        //   });
        // }
      }
    };

    fetchInputData();
  }, [formState.ac_year, formState.month, formState.location]);

  const handleInputChange = (field, value) => {
    if (["ac_year", "month", "location"].includes(field)) {
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

  const toggleScope = (scope) => {
    setFormState((prev) => ({
      ...prev,
      [scope]: !prev[scope],
    }));
  };

  const areMandatoryFieldsFilled =
    formState.ac_year && formState.month && formState.location;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formValues,
      location: formState.location,
      month: formState.month,
      ac_year: formState.ac_year,
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/save-inputs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        // Display success toast
        toast.success("Data saved successfully!");
      } else {
        // Display error toast
        toast.error("Error saving data. Please try again.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Error saving data. Please check your connection.");
    }
  };

  const inputClasses =
    "w-full px-4 py-2.5 rounded-lg border-2 border-[#820C59]/20 bg-white focus:border-[#820C59] focus:ring-2 focus:ring-[#820C59]/20 transition-all duration-200 outline-none placeholder:text-gray-400";
  const selectClasses =
    "w-full px-4 py-2.5 rounded-lg border-2 border-[#820C59]/20 bg-white focus:border-[#820C59] focus:ring-2 focus:ring-[#820C59]/20 transition-all duration-200 outline-none appearance-none";
  const buttonClasses =
    "inline-flex items-center px-6 py-2.5 text-white rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#820C59]/5 to-[#630944]/5 py-8 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold text-[#820C59] mb-8">
          Emission Data Form
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#630944] mb-6">
            Mandatory Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Accounting Year *
              </label>
              <select
                value={formState.ac_year}
                onChange={(e) => handleInputChange("ac_year", e.target.value)}
                className={selectClasses}
                required
              >
                <option value="">Select year</option>
                {scopeData.input_mandatory_year.map((year) => (
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
                className={selectClasses}
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <select
                value={formState.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className={selectClasses}
                required
              >
                <option value="">Select location</option>
                {scopeData.input_mandatory_location.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {!areMandatoryFieldsFilled && (
          <div className="bg-[#820C59]/5 border-l-4 border-[#820C59] p-4 mb-8 rounded-r-lg">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-[#820C59]" />
              <p className="ml-3 text-sm text-[#820C59]">
                Please fill in all mandatory fields to view emission inputs.
              </p>
            </div>
          </div>
        )}

        {areMandatoryFieldsFilled && (
          <>
            {/* Scope 1 */}
            <div className="mb-6">
              <button
                type="button"
                onClick={() => toggleScope("scope1Open")}
                className="w-full px-6 py-4 bg-[#820C59]/5 hover:bg-[#820C59]/10 rounded-lg flex items-center justify-between transition-colors duration-200"
              >
                <span className="text-[#820C59] font-medium">
                  Scope 1 - Direct Emissions
                </span>
                {formState.scope1Open ? (
                  <ChevronUp size={20} className="text-[#820C59]" />
                ) : (
                  <ChevronDown size={20} className="text-[#820C59]" />
                )}
              </button>

              {formState.scope1Open && scopeData.input_scope1 && (
                <div className="p-6 border-2 border-t-0 border-[#820C59]/10 rounded-b-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {scopeData.input_scope1.map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field}
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          placeholder="Enter value"
                          value={formValues[field]}
                          onChange={(e) =>
                            handleInputChange(field, e.target.value)
                          }
                          className={inputClasses}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Scope 2 */}
            <div className="mb-6">
              <button
                type="button"
                onClick={() => toggleScope("scope2Open")}
                className="w-full px-6 py-4 bg-[#820C59]/5 hover:bg-[#820C59]/10 rounded-lg flex items-center justify-between transition-colors duration-200"
              >
                <span className="text-[#820C59] font-medium">
                  Scope 2 - Indirect Emissions
                </span>
                {formState.scope2Open ? (
                  <ChevronUp size={20} className="text-[#820C59]" />
                ) : (
                  <ChevronDown size={20} className="text-[#820C59]" />
                )}
              </button>

              {formState.scope2Open && scopeData.input_scope2.length > 0 && (
                <div className="p-6 border-2 border-t-0 border-[#820C59]/10 rounded-b-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {scopeData.input_scope2.map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field}
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          placeholder="Enter value"
                          value={formValues[field]}
                          onChange={(e) =>
                            handleInputChange(field, e.target.value)
                          }
                          className={inputClasses}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Scope 3 */}
            <div className="mb-6">
              <button
                type="button"
                onClick={() => toggleScope("scope3Open")}
                className="w-full px-6 py-4 bg-[#820C59]/5 hover:bg-[#820C59]/10 rounded-lg flex items-center justify-between transition-colors duration-200"
              >
                <span className="text-[#820C59] font-medium">
                  Scope 3 - Other Indirect Emissions
                </span>
                {formState.scope3Open ? (
                  <ChevronUp size={20} className="text-[#820C59]" />
                ) : (
                  <ChevronDown size={20} className="text-[#820C59]" />
                )}
              </button>

              {formState.scope3Open && scopeData.input_scope3.length > 0 && (
                <div className="p-6 border-2 border-t-0 border-[#820C59]/10 rounded-b-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {scopeData.input_scope3.map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field}
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          placeholder="Enter value"
                          value={formValues[field]}
                          onChange={(e) =>
                            handleInputChange(field, e.target.value)
                          }
                          className={inputClasses}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              className={`${buttonClasses} bg-[#820C59] hover:bg-[#630944]`}
            >
              <Save size={16} className="mr-2" />
              Save All Data
            </button>
            <ToastContainer />
          </>
        )}
      </form>
    </div>
  );
}

export default Input;

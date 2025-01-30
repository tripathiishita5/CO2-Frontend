import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ActivityScope() {
    const [formState, setFormState] = useState({
        ac_year: '',
        user_id: 5, // Hardcoded for now, should come from auth context
        scope: '' // Added scope field
    });

    const [scopeData, setScopeData] = useState({
        input_mandatory_year: [], // This will be populated by the backend fetch
        availableScopes: ["Scope 1", "Scope 2"] // Hardcoded scope options
    });

    useEffect(() => {
        const fetchScopeData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/get-scope-data');
                const data = await response.json();
                setScopeData(prevState => ({
                    ...prevState,
                    input_mandatory_year: data.input_mandatory_year // Populating accounting years
                }));
            } catch (error) {
                console.error('Error fetching scope data:', error);
            }
        };

        fetchScopeData();
    }, []);

    const handleInputChange = (field, value) => {
        setFormState(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const areMandatoryFieldsFilled = formState.ac_year && formState.scope; // Ensure scope is filled

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ac_year: formState.ac_year,
            scope: formState.scope, // Include scope in the payload
            user_id: formState.user_id
        };

        try {
            const response = await fetch('http://localhost:5000/api/auth/save-inputs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                toast.success("Data saved successfully!");
            } else {
                toast.error("Error saving data. Please try again.");
            }
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data. Please check your connection.');
        }
    };

    const selectClasses = "w-full px-4 py-2.5 rounded-lg border-2 border-[#820C59]/20 bg-white focus:border-[#820C59] focus:ring-2 focus:ring-[#820C59]/20 transition-all duration-200 outline-none appearance-none";
    const buttonClasses = "inline-flex items-center px-6 py-2.5 text-white rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#820C59]/5 to-[#630944]/5 py-8 px-4">
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-[#820C59] mb-8">Activity Scope Form</h1>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-[#630944] mb-6">Mandatory Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Accounting Year *
                            </label>
                            <select
                                value={formState.ac_year}
                                onChange={(e) => handleInputChange('ac_year', e.target.value)}
                                className={selectClasses}
                                required
                            >
                                <option value="">Select year</option>
                                {(scopeData.input_mandatory_year || []).map((year) => (
                                    <option key={year.value} value={year.value}>{year.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Scope Dropdown */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Scope *
                            </label>
                            <select
                                value={formState.scope}
                                onChange={(e) => handleInputChange('scope', e.target.value)}
                                className={selectClasses}
                                required
                            >
                                <option value="">Select scope</option>
                                {scopeData.availableScopes.map((scopeOption) => (
                                    <option key={scopeOption} value={scopeOption}>
                                        {scopeOption}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {!areMandatoryFieldsFilled && (
                    <div className="bg-[#820C59]/5 border-l-4 border-[#820C59] p-4 mb-8 rounded-r-lg">
                        <div className="flex">
                            <p className="ml-3 text-sm text-[#820C59]">
                                Please fill in all mandatory fields to proceed.
                            </p>
                        </div>
                    </div>
                )}

                {/* Save Button */}
                <div className="mt-8 flex justify-center">
                    <button type="submit" className={`${buttonClasses} bg-[#820C59] hover:bg-[#630944]`} disabled={!areMandatoryFieldsFilled}>
                        <Save className="mr-2 h-5 w-5" />
                        Save Data
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default ActivityScope;

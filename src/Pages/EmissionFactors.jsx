import React, { useState, useEffect } from 'react';
import { getEmissionFactors } from '../http/refService';

function EmissionFactors() {
    const [emissionFactors, setEmissionFactors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError('');

            try {
                const response = await getEmissionFactors();
                setEmissionFactors(response);
            } catch (err) {
                console.error('Error fetching emission factors:', err);
                setError('Failed to load emission factors. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filter emission factors based on location and category
    const groupedData = {
        india: {
            materialTransport: [],
            other: []
        },
        other: {
            materialTransport: [],
            other: []
        }
    };

    emissionFactors.forEach(factor => {
        if (factor.location === "INDIA") {
            if (factor.category === "Material Transport") {
                groupedData.india.materialTransport.push(factor);
            } else {
                groupedData.india.other.push(factor);
            }
        } else {
            if (factor.category === "Material Transport") {
                groupedData.other.materialTransport.push(factor);
            } else {
                groupedData.other.other.push(factor);
            }
        }
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white p-6">
            <div className="max-w-full mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 w-full">
                    <div className="w-full mb-8 flex justify-center items-center">
                        <h2 className="text-3xl font-bold text-[#820C59] mb-6">Emission Factors</h2>
                    </div>

                    {loading ? (
                        <div className="text-center py-12">
                            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#820C59] border-r-transparent"></div>
                            <p className="mt-4 text-gray-600">Loading emission factors...</p>
                        </div>
                    ) : error ? (
                        <div className="bg-red-50 text-red-600 p-6 rounded-lg text-center">
                            <p>{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="mt-4 px-4 py-2 bg-[#820C59] text-white rounded-lg hover:bg-[#722156] transition-colors duration-200"
                            >
                                Try Again
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row space-x-8">
                            {/* Other Locations Section */}
                            <div className="flex-1">
                                <h3 className="text-xl text-center font-bold text-[#820C59] mb-4">International</h3>

                                <div className="mb-6">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-[#820C59]">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Source</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Factor</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Unit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {groupedData.other.other.length > 0 ? (
                                                groupedData.other.other.map((factor, index) => (
                                                    <tr key={index} className="hover:bg-purple-50 transition-colors duration-150">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{factor.source}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{factor.factor}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{factor.unit}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="3" className="text-center py-8 text-gray-600">No other data for other locations.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-[#820C59] mb-3">Material Transport</h4>
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-[#820C59]">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Source</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Factor</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Unit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {groupedData.other.materialTransport.length > 0 ? (
                                                groupedData.other.materialTransport.map((factor, index) => (
                                                    <tr key={index} className="hover:bg-purple-50 transition-colors duration-150">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{factor.source}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{factor.factor}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{factor.unit}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="3" className="text-center py-8 text-gray-600">No material transport data for other locations.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* India Section */}
                            <div className="flex-1">
                                <h3 className="text-xl text-center font-bold text-[#820C59] mb-4">India</h3>

                                <div className="mb-6">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-[#820C59]">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Source</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Factor</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Unit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {groupedData.india.other.length > 0 ? (
                                                groupedData.india.other.map((factor, index) => (
                                                    <tr key={index} className="hover:bg-purple-50 transition-colors duration-150">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{factor.source}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{factor.factor}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{factor.unit}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="3" className="text-center py-8 text-gray-600">No other data for India.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-[#820C59] mb-3">Material Transport</h4>
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-[#820C59]">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Source</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Factor</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Unit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {groupedData.india.materialTransport.length > 0 ? (
                                                groupedData.india.materialTransport.map((factor, index) => (
                                                    <tr key={index} className="hover:bg-purple-50 transition-colors duration-150">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{factor.source}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{factor.factor}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{factor.unit}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="3" className="text-center py-8 text-gray-600">No material transport data for India.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EmissionFactors;
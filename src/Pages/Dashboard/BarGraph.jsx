
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#830c59", "#6d0a48", "#9c116b", "#d4419e",
  "#5b0939", "#a80e5e", "#54082e", "#c72c86",
  "#e63494", "#b86ba2", "#7f235b", "#ff2a97",
  "#a65381", "#4a0730",
];

const BarGraph = ({ title, data }) => {
  if (!data || !data.length) {
    return <p className="text-gray-500 text-center">No data available for the bar chart.</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill={COLORS[0]} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const BarGraphContainer = ({ quarterlyData }) => {
  if (!quarterlyData || !quarterlyData.length) {
    return <p className="text-gray-500 text-center">No data available.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {quarterlyData.map((row, index) => {
        // Transform the row into chart-compatible format
        const chartData = Object.keys(row)
          .filter((key) => key.startsWith("q"))
          .map((quarterKey, idx) => ({
            quarter: `FY${2020 + idx}-${21 + idx}`, // Create FY2020-21, FY2021-22 labels
            value: row[quarterKey],
          }));

        return (
          <BarGraph
            key={index}
            title={row.name} // Chart title from the 'name' key
            data={chartData}
          />
        );
      })}
    </div>
  );
};

export default BarGraphContainer;


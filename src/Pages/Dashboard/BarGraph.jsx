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

const BarGraph = ({ title, data, keys }) => {
  if (!data || !data.length) {
    return <p className="text-gray-500 text-center">No data available for the bar chart.</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          {keys.map((key, index) => (
            <Bar key={key} dataKey={key} fill={COLORS[index % COLORS.length]} barSize={40} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const BarGraphContainer = ({ tableName, data }) => {
  if (!data || !data.length) {
    return <p className="text-gray-500 text-center">No data available for {tableName}.</p>;
  }

  const transformData = (data) => {
    const keys = new Set();

    const transformed = data.map((row) => {
      const obj = { label: row.name };

      Object.keys(row).forEach((key) => {
        if (key !== "name") {
          obj[key.toUpperCase()] = row[key];
          keys.add(key.toUpperCase());
        }
      });

      return obj;
    });

    return { transformed, keys: Array.from(keys) };
  };

  const { transformed, keys } = transformData(data);

  return (
    <div className="grid grid-cols-1 gap-6">
      <h2 className="text-2xl font-semibold text-center mb-4">{tableName}</h2>
      <BarGraph title={tableName} data={transformed} keys={keys} />
    </div>
  );
};

export default BarGraphContainer;

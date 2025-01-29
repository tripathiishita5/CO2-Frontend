import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = [
    "#830c59", "#6d0a48", "#9c116b", "#d4419e",
    "#5b0939", "#a80e5e", "#54082e", "#c72c86",
    "#e63494", "#b86ba2", "#7f235b", "#ff2a97",
    "#a65381", "#4a0730"
  ];
  

const PieGraph = ({ data }) => {
  if (!data || !data.length) {
    return <p className="text-gray-500 text-center">No data available for the pie chart.</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={70} />
      </PieChart>
    </div>
  );
};

export default PieGraph;

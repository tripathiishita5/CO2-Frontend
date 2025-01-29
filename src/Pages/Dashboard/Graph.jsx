 
import React from "react";
import { 
  PieChart, Pie, Cell, Tooltip, Legend, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer 
} from "recharts";

const COLORS = ["#830c59", "#a24983", "#c185ac", "#e0c2d6", "#ffffff"];

 

const Graph = ({ data = [], type = "pie" }) => {
  if (!data.length) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 text-center">
        <p className="text-gray-500">No data available for the graph.</p>
      </div>
    );
  }

  if (type === "bar" && data[0].q1 !== undefined) {
    // Transform data for Bar Chart
    const transformedData = ["q1", "q2", "q3", "q4", "q5"].map((quarter) => {
      const quarterData = { quarter: quarter.toUpperCase() }; // Start with quarter label
      data.forEach((row) => {
        quarterData[row.name.split(":")[0]] = row[quarter]; // Add each scope's data
      });
      return quarterData;
    });
  
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={transformedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quarter" />
            <YAxis />
            <Tooltip />
            <Legend />
            {data.map((row, index) => (
              <Bar
                key={row.name}
                dataKey={row.name.split(":")[0]} // Use the scope name (e.g., "Scope 1")
                fill={COLORS[index % COLORS.length]}
                barSize={30}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  

  // Default to pie chart
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

  

export default Graph;

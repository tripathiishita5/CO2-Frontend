import React from "react";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";

const Graph = ({ data = [], type = "pie" }) => {
  if (!data.length) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 text-center">
        <p className="text-gray-500">No data available for the graph.</p>
      </div>
    );
  }

  return type === "bar" ? <BarGraph data={data} /> : <PieGraph data={data} />;
};

export default Graph;

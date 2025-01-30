import React from 'react';
import Graph from "./Graph";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const GHGEmissionsTables = () => {
  const annualData = [
    {
      name: 'Scope 1: Direct Emissions',
      fy2020: 852,
      fy2021: 860,
      fy2022: 515,
      fy2023: 1009,
      fy2024: 1258,
    },
    {
      name: 'Scope 2: Electricity Consumption',
      fy2020: 7024,
      fy2021: 7882,
      fy2022: 7933,
      fy2023: 9359,
      fy2024:7888
    },
    {
      name: 'Scope 3: Indirect Emissions',
      fy2020: 3885,
      fy2021: 4861,
      fy2022: 6015,
      fy2023: 12013,
      fy2024:5676
    },
    {
      name: 'Total GHG Emission',
      fy2020: 11760,
      fy2021: 13604,
      fy2022: 14462,
      fy2023: 22382,
      fy2024:14821
    },
    {
      name: 'Emission Intensity',
      fy2020: 0.0035,
      fy2021: 0.00424,
      fy2022: 0.00560,
      fy2023: 0.00661,
      fy2024:0.00720
    },
    {
      name: 'Emission Intensity in kgCO2 eg',
      fy2020: 3.51,
      fy2021: 4.24,
      fy2022: 5.60,
      fy2023: 6.61,
      fy2024:7.20
    }
  ];

  const quarterlyData = [
    {
      name: 'Scope 1: Direct Emissions',
      f20: 852,
      f21: 860,
      f22: 515,
      f23: 1009,
      f24: 1258,
    },
    {
      name: 'Scope 2: Electricity Consumption',
      f20: 7024,
      f21: 7882,
      f22: 7933,
      f23: 9359,
      f24: 7888
    },
    {
      name: 'Scope 3: Indirect Emissions',
      f20: 3885,
      f21: 4861,
      f22: 6014,
      f23: 12013,
      f24: 5676,
    },
    {
      name: 'Total GHG Emission',
      f20: 11760,
      f21: 13604,
      f22: 14462,
      f23: 22382,
      f24: 14812
    }
  ];

  const monthlyData = [
    {
      name: 'SND',
      f20: 2472,
      f21: 3454,
      f22: 4383,
      f23: 9620,
      f24:4403,
    },
    {
      name: 'BIA',
      f20: 5493,
      f21: 5920,
      f22: 5125,
      f23: 7373,
      f24:6431,
    },
    {
      name: 'SLN',
      f20: 1449,
      f21: 1427,
      f22: 682,
      f23: 1385,
      f24:708,
    },
    {
      name: 'Bristrol',
      f20: 286,
      f21: 321,
      f22: 255,
      f23: 228,
      f24:114,
    },
    {
      name: 'Itlay',
      f20: 0,
      f21: 0,
      f22: 0,
      f23: 0,
      f24:0,
    }
  ];

  const targetData = [
    {
      name: 'Australia',
      f20: 136,
      f21: 58,
      f22: 65,
      f23: 60,
      f24: 46
    },
    {
      name: 'Sweden',
      f20: 9,
      f21: 4,
      f22: 2,
      f23: 2,
      f24: 1
    },
    {
      name: 'Chandlers Ford',
      f20: 87,
      f21: 137,
      f22: 312,
      f23: 179,
      f24: 128
    },
    {
      name: 'Zurich',
      f20: 31,
      f21: 2,
      f22: 0,
      f23: 1,
      f24: 0
    },
    {
      name: 'UAE',
      f20: 22,
      f21: 15,
      f22: 11,
      f23: 13,
      f24: 9
    },
    {
      name: 'PIA',
      f20: 1159,
      f21: 1208,
      f22: 1179,
      f23: 1324,
      f24: 1199
    },
    {
      name: 'MIA',
      f20: 119,
      f21: 134,
      f22: 130,
      f23: 136,
      f24: 0
    },
    {
      name: 'RO Gurgaon',
      f20: 201,
      f21: 226,
      f22: 214,
      f23: 230,
      f24: 169
    },
    {
      name: 'RO Mumbai',
      f20: 11,
      f21: 16,
      f22: 20,
      f23: 37,
      f24: 36
    },
    {
      name: 'RO Kolkata',
      f20: 66,
      f21: 78,
      f22: 53,
      f23: 57,
      f24: 47
    },
    {
      name: 'RO Bengaluru',
      f20: 32,
      f21: 40,
      f22: 39,
      f23: 41,
      f24: 28
    },
    {
      name: 'SESL Gurgaon',
      f20: 42,
      f21: 50,
      f22: 46,
      f23: 47,
      f24: 47
    },
    {
      name: 'SESL Kolkata',
      f20: 67,
      f21: 139,
      f22: 76,
      f23: 88,
      f24: 100
    },
    {
      name: 'SESL Mumbai',
      f20: 0,
      f21: 0,
      f22: 3,
      f23: 3,
      f24: 18
    }
  ];

  const tables = [
    {
      title: 'Scope Wise GHG Emissions',
      data: annualData,
      columns: ['Emission Source', 'FY2020-21', 'FY2021-22', 'FY2022-23', 'FY2023-24', 'FY2024-25' ],
    },
    {
      title: 'Scope Wise GHG Emissions(tCo2e)', 
      data: quarterlyData,
      columns: ['Emission Source', 'FY2020-21', 'FY2021-22', 'FY2022-23', 'FY2023-24', 'FY2024-25' ],
    },
    {
      title: 'GHG Emissions', 
      data: monthlyData,
      columns: ['Emission Source', 'FY2020-21', 'FY2021-22', 'FY2022-23', 'FY2023-24', 'FY2024-25' ],
    },
    {
      title: 'GHG Emissions(tCo2e)',
      data: targetData,
      columns: ['Emission Source', 'FY2020-21', 'FY2021-22', 'FY2022-23', 'FY2023-24', 'FY2024-25' ],
    }
  ];
  // Custom Next Arrow
const CustomNextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "45px",
      background: "none",
    }}
    onClick={onClick}
  >
    {/* PNG for Next Arrow */}
    <img
      src="src\Images\nextarrow.png" // Replace with the path to your PNG file
      alt="Next"
      style={{
        width: "15px",
        height: "15px",
      }}
    />
  </div>
);

// Custom Prev Arrow
const CustomPrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "30px",
      zIndex: 1,
      background: "white",
    }}
    onClick={onClick}
  >
    {/* PNG for Prev Arrow */}
    <img
      src="src\Images\prevarrow.png" // Replace with the path to your PNG file
      alt="Previous"
      style={{
        width: "17px",
        height: "17px",
      }}
    />
  </div>
);


  const years = ["fy2020", "fy2021", "fy2022", "fy2023", "fy2024"];
// Carousel settings
const settings = {
  dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />
};
const pieChartTables = ["Scope Wise GHG Emissions"];


  return (
    <div className="bg-gray-50 min-h-screen">
      {tables.map((table, index) => (
        <div key={index} className="min-h-screen flex flex-col justify-center px-4 py-8">
          <div className="max-w-8xl mx-auto w-full flex gap-6">
            <div className="w-3/4 bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#830c59] mb-2">{table.title}</h2>
                <p className="text-gray-600 mb-6">{table.description}</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#830c59]">
                        {table.columns.map((column, i) => (
                          <th key={i} className="px-6 py-4 text-left text-white font-semibold">
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.data.map((row, i) => (
                        <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium">{row.name}</td>
                          {/* {Object.keys(row).filter(key => key !== 'name').map((key, j) => (
                            <td key={j} className="px-6 py-4 text-right">
                              {typeof row[key] === 'number' ? row[key].toFixed(2) : row[key]}
                            </td>
                          ))} */}
                          {Object.keys(row).filter(key => key !== 'name').map((key, j) => (
  <td key={j} className="px-6 py-4 text-right">
    {typeof row[key] === 'number' ? row[key] : row[key]}
  </td>
))}

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="w-1/4 bg-white rounded-xl shadow-xl ">
            <h2 className="text-xl font-semibold mb-4 mt-4 text-center text-[#830c59]">
              Graphs
            </h2>
             

{/* <Slider {...settings}>
  {years.map((year, index) => {
    const graphData =
      table.title === "Scope Wise GHG Emissions"
        ? table.data
            .filter((item) =>
              ["Scope 1: Direct Emissions", "Scope 2: Electricity Consumption", "Scope 3: Indirect Emissions"].includes(item.name)
            )
            .map((item) => ({
              name: item.name.split(":")[0], // Extracting scope name
              value: item[year],
            }))
        : table.data.map((item) => ({
            name: item.name.split(":")[0], // Extracting scope name
            value: item[year],
          }));

    // Determine the graph type based on the table title
    const graphType =
      table.title === "Scope Wise GHG Emissions"
        ? "pie"
        : "bar";

    return (
      <div key={index}>
        <h3 className="text-lg font-bold text-center mb-4">
          {year.toUpperCase()}
        </h3>
        <Graph data={graphData} type={graphType} />
      </div>
    );
  })}
</Slider> */}
{/* Slider for Pie Charts */}
{pieChartTables.includes(table.title) && (
      <Slider {...settings}>
        {years.map((year, index) => {
          const graphData = table.data
            .filter((item) =>
              ["Scope 1: Direct Emissions", "Scope 2: Electricity Consumption", "Scope 3: Indirect Emissions"].includes(item.name)
            )
            .map((item) => ({
              name: item.name.split(":")[0], // Extracting scope name
              value: item[year],
            }));

          return (
            <div key={index}>
              <h3 className="text-lg font-bold text-center mb-4">{year.toUpperCase()}</h3>
              <Graph data={graphData} type="pie" />
            </div>
          );
        })}
      </Slider>
    )}

    
    {/* Slider for Bar Charts */}
    {!pieChartTables.includes(table.title) && (
  <Slider {...settings}>
    {(table.title === "Scope Wise GHG Emissions(tCo2e)"
      ? quarterlyData
      : table.title === "GHG Emissions"
      ? monthlyData
      : targetData // Default to targetData for other titles
    ).map((row, index) => {
      // Format data for the bar graph
      const graphData = Object.keys(row)
        .filter((key) => key !== "name") // Exclude the "name" column
        .map((key) => ({
          name: key.toUpperCase(), // X-axis labels (e.g., Q1, CURRENT, TARGET)
          value: row[key], // Y-axis values
        }));

      return (
        <div key={index}>
          <h3 className="text-lg font-bold text-center mb-4">{row.name}</h3>
          <Graph data={graphData} type="bar" />
        </div>
      );
    })}
  </Slider>
)}



          
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GHGEmissionsTables;

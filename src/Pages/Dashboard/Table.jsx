import React from 'react';
import Graph from "./Graph";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BarGraphContainer from './BarGraph';


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
      q1: 852,
      q2: 860,
      q3: 515,
      q4: 1009,
      q5: 1258,
    },
    {
      name: 'Scope 2: Electricity Consumption',
      q1: 7024,
      q2: 7882,
      q3: 7933,
      q4: 9359,
      q5: 7888
    },
    {
      name: 'Scope 3: Indirect Emissions',
      q1: 3885,
      q2: 4861,
      q3: 6014,
      q4: 12013,
      q5: 5676,
    },
    {
      name: 'Total GHG Emission',
      q1: 11760,
      q2: 13604,
      q3: 14462,
      q4: 22382,
      q5: 14812
    }
  ];

  const monthlyData = [
    {
      name: 'SND',
      current: 2472,
      previous: 3454,
      variance: 4383,
      ytd: 9620,
      uo:4403,
    },
    {
      name: 'BIA',
      current: 5493,
      previous: 5920,
      variance: 5125,
      ytd: 7373,
      uo:6431,
    },
    {
      name: 'SLN',
      current: 1449,
      previous: 1427,
      variance: 682,
      ytd: 1385,
      uo:708,
    },
    {
      name: 'Bristrol',
      current: 286,
      previous: 321,
      variance: 255,
      ytd: 228,
      uo:114,
    },
    {
      name: 'Itlay',
      current: 0,
      previous: 0,
      variance: 0,
      ytd:  0,
      uo:0,
    }
  ];

  const targetData = [
    {
      name: 'Australia',
      target: 136,
      actual: 1750.25,
      variance: 5.0,
      hi: 30,
      no: 60
    },
    {
      name: 'Sweden',
      target: 997.74,
      actual: 1050.25,
      variance: 5.0,
      hi: 30,
      no: 60
    },
    {
      name: 'Chandlers Ford',
      target: 2232.74,
      actual: 2350.25,
      variance: 5.0,
      hi: 30,
      no: 60
    },
    {
      name: 'Zurich',
      target: 4893.21,
      actual: 5150.75,
      variance: 5.0,
      hi: 30,
      no: 60
    },
    {
      name: 'UAE',
      target: 4893.21,
      actual: 5150.75,
      variance: 5.0,
      hi: 30,
      no: 60
    },
    {
      name: 'PIA',
      target: 4893.21,
      actual: 5150.75,
      variance: 5.0,
      hi: 30,
      no: 60
    },
    {
      name: 'MIA',
      target: 4893.21,
      actual: 5150.75,
      variance: 5.0,
      hi: 30,
      no: 60
    },
    {
      name: 'RO Gurgaon',
      target: 4893.21,
      actual: 5150.75,
      variance: 5.0,
      hi: 30,
      no: 60
    },
    {
      name: 'RO Mumbai',
      target: 4893.21,
      actual: 5150.75,
      variance: 5.0,
      hi: 30,
      no: 60
    },
    {
      name: 'RO Kolkata',
      target: 4893.21,
      actual: 5150.75,
      variance: 5.0,
      hi: 30,
      no: 60
    },
    {
      name: 'RO Bengaluru',
      target: 4893.21,
      actual: 5150.75,
      variance: 5.0,
      hi: 30,
      no: 60
    },
    {
      name: 'SESL Gurgaon',
      target: 4893.21,
      actual: 5150.75,
      variance: 5.0,
      hi: 30,
      no: 60
    },
    {
      name: 'SESL Kolkata',
      target: 4893.21,
      actual: 5150.75,
      variance: 5.0,
      hi: 30,
      no: 60
    },
    {
      name: 'SESL Mumbai',
      target: 4893.21,
      actual: 5150.75,
      variance: 5.0,
      hi: 30,
      no: 60
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
      {quarterlyData.map((row, index) => {
        const graphData = Object.keys(row)
          .filter((key) => key !== "name")
          .map((key) => ({
            name: key.toUpperCase(), // X-axis labels (q1, q2, q3, q4, q5)
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

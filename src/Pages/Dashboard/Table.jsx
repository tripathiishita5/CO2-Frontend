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
      q1: 490.07,
      q2: 472.57,
      q3: 402.56,
      q4: 385.05,
    },
    {
      name: 'Scope 2: Electricity Consumption',
      q1: 294.07,
      q2: 283.57,
      q3: 241.56,
      q4: 231.05,
    },
    {
      name: 'Scope 3: Indirect Emissions',
      q1: 658.07,
      q2: 634.57,
      q3: 540.56,
      q4: 517.05,
    },
    {
      name: 'Total GHG Emission',
      q1: 1442.21,
      q2: 1390.70,
      q3: 1184.67,
      q4: 1133.17,
    }
  ];

  const monthlyData = [
    {
      name: 'Scope 1: Direct Emissions',
      current: 145.85,
      previous: 153.15,
      variance: -5.0,
      ytd: 1750.25,
    },
    {
      name: 'Scope 2: Electricity Consumption',
      current: 87.52,
      previous: 91.90,
      variance: -5.0,
      ytd: 1050.25,
    },
    {
      name: 'Scope 3: Indirect Emissions',
      current: 195.85,
      previous: 205.65,
      variance: -5.0,
      ytd: 2350.25,
    },
    {
      name: 'Total GHG Emission',
      current: 429.23,
      previous: 450.69,
      variance: -5.0,
      ytd: 5150.75,
    }
  ];

  const targetData = [
    {
      name: 'Scope 1: Direct Emissions',
      target: 1662.74,
      actual: 1750.25,
      variance: 5.0,
    },
    {
      name: 'Scope 2: Electricity Consumption',
      target: 997.74,
      actual: 1050.25,
      variance: 5.0,
    },
    {
      name: 'Scope 3: Indirect Emissions',
      target: 2232.74,
      actual: 2350.25,
      variance: 5.0,
    },
    {
      name: 'Total GHG Emission',
      target: 4893.21,
      actual: 5150.75,
      variance: 5.0,
    }
  ];

  const tables = [
    {
      title: 'Scope Wise GHG Emissions',
      description: 'Year-over-year comparison of emissions by scope',
      data: annualData,
      columns: ['Emission Source', 'FY2020-21', 'FY2021-22', 'FY2022-23', 'FY2023-24', 'FY2024-25' ],
    },
    {
      title: 'Quarterly GHG Emissions (Current FY)',
      description: 'Quarter-wise breakdown of current fiscal year emissions',
      data: quarterlyData,
      columns: ['Emission Source', 'FY2020-21', 'FY2021-22', 'FY2022-23', 'FY2023-24', 'FY2024-25' ],
    },
    {
      title: 'Monthly GHG Emissions',
      description: 'Month-over-month comparison with YTD totals',
      data: monthlyData,
      columns: ['Emission Source', 'FY2020-21', 'FY2021-22', 'FY2022-23', 'FY2023-24', 'FY2024-25' ],
    },
    {
      title: 'Target vs Actual Emissions',
      description: 'Comparison of targeted and actual emissions for current fiscal year',
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
      display: "block",
      backgroundColor: "#830c59",
      borderRadius: "50%",
       marginRight:"30px"
       
    }}
    onClick={onClick}
  />
);

// Custom Prev Arrow
const CustomPrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      backgroundColor: "#830c59",
      borderRadius: "50%",
      marginLeft:"30px",
      zIndex:"1"
    }}
    onClick={onClick}
  />
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
             

<Slider {...settings}>
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
</Slider>


          
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GHGEmissionsTables;

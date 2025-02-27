import React, { useState } from 'react';
import Graph from "./Graph";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from 'lucide-react';



const GHGEmissionsTables = () => {
  const [activeTable, setActiveTable] = useState(0);
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
      fy2024: 7888
    },
    {
      name: 'Scope 3: Indirect Emissions',
      fy2020: 3885,
      fy2021: 4861,
      fy2022: 6015,
      fy2023: 12013,
      fy2024: 5676
    },
    {
      name: 'Total GHG Emission',
      fy2020: 11760,
      fy2021: 13604,
      fy2022: 14462,
      fy2023: 22382,
      fy2024: 14821
    },
    {
      name: 'Emission Intensity',
      fy2020: 0.0035,
      fy2021: 0.00424,
      fy2022: 0.00560,
      fy2023: 0.00661,
      fy2024: 0.00720
    },
    {
      name: 'Emission Intensity in kgCO2 eg',
      fy2020: 3.51,
      fy2021: 4.24,
      fy2022: 5.60,
      fy2023: 6.61,
      fy2024: 7.20
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
      f24: 4403,
    },
    {
      name: 'BIA',
      f20: 5493,
      f21: 5920,
      f22: 5125,
      f23: 7373,
      f24: 6431,
    },
    {
      name: 'SLN',
      f20: 1449,
      f21: 1427,
      f22: 682,
      f23: 1385,
      f24: 708,
    },
    {
      name: 'Bristrol',
      f20: 286,
      f21: 321,
      f22: 255,
      f23: 228,
      f24: 114,
    },
    {
      name: 'Itlay',
      f20: 0,
      f21: 0,
      f22: 0,
      f23: 0,
      f24: 0,
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
      columns: ['Emission Source', 'FY2020-21', 'FY2021-22', 'FY2022-23', 'FY2023-24', 'FY2024-25'],
    },
    {
      title: 'Scope Wise GHG Emissions(tCo2e)',
      data: quarterlyData,
      columns: ['Emission Source', 'FY2020-21', 'FY2021-22', 'FY2022-23', 'FY2023-24', 'FY2024-25'],
    },
    {
      title: 'GHG Emissions',
      data: monthlyData,
      columns: ['Emission Source', 'FY2020-21', 'FY2021-22', 'FY2022-23', 'FY2023-24', 'FY2024-25'],
    },
    {
      title: 'GHG Emissions(tCo2e)',
      data: targetData,
      columns: ['Emission Source', 'FY2020-21', 'FY2021-22', 'FY2022-23', 'FY2023-24', 'FY2024-25'],
    }
  ];
  // Custom Next Arrow
  const CustomNextArrow = ({ className, onClick }) => (
    <div
      className={`${className} !flex !items-center !justify-center !w-10 !h-10 !bg-white !rounded-full !shadow-lg !z-10 !right-2`}
      onClick={onClick}
    >
      <ChevronRight className="w-6 h-6 text-[#830c59]" />
    </div>
  );

  const CustomPrevArrow = ({ className, onClick }) => (
    <div
      className={`${className} !flex !items-center !justify-center !w-10 !h-10 !bg-white !rounded-full !shadow-lg !z-10 !left-2`}
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6 text-[#830c59]" />
    </div>
  );

  const years = ["fy2020", "fy2021", "fy2022", "fy2023", "fy2024"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    dotsClass: "slick-dots !bottom-[-12px]"
  };

  const pieChartTables = ["Scope Wise GHG Emissions"];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-6 flex gap-4 overflow-x-auto py-2">
          {tables.map((table, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTable(idx)}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${activeTable === idx
                ? 'bg-[#830c59] text-white shadow-lg'
                : 'bg-white text-[#830c59] hover:bg-[#830c59]/10'
                }`}
            >
              {table.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Graphs Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-[#830c59] mb-6">Visualization</h2>
            <div className="h-[500px]">
              {pieChartTables.includes(tables[activeTable].title) ? (
                <Slider {...settings}>
                  {years.map((year, index) => {
                    const graphData = tables[activeTable].data
                      .filter((item) =>
                        ["Scope 1: Direct Emissions", "Scope 2: Electricity Consumption", "Scope 3: Indirect Emissions"].includes(item.name)
                      )
                      .map((item) => ({
                        name: item.name.split(":")[0],
                        value: item[year],
                      }));

                    return (
                      <div key={index} className="px-4">
                        <h3 className="text-lg font-bold text-center mb-4">{year.toUpperCase()}</h3>
                        <Graph data={graphData} type="pie" />
                      </div>
                    );
                  })}
                </Slider>
              ) : (
                <Slider {...settings}>
                  {(activeTable === 1
                    ? quarterlyData
                    : activeTable === 2
                      ? monthlyData
                      : targetData
                  ).map((row, index) => {
                    const graphData = Object.keys(row)
                      .filter((key) => key !== "name")
                      .map((key) => ({
                        name: key.toUpperCase(),
                        value: row[key],
                      }));

                    return (
                      <div key={index} className="px-4">
                        <h3 className="text-lg font-bold text-center mb-4">{row.name}</h3>
                        <Graph data={graphData} type="bar" />
                      </div>
                    );
                  })}
                </Slider>
              )}
            </div>
          </div>

          {/* Table Section */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-[#830c59] mb-6">{tables[activeTable].title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#830c59]">
                    {tables[activeTable].columns.map((column, i) => (
                      <th key={i} className="px-4 py-3 text-left text-white font-semibold">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tables[activeTable].data.map((row, i) => (
                    <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{row.name}</td>
                      {Object.keys(row)
                        .filter(key => key !== 'name')
                        .map((key, j) => (
                          <td key={j} className="px-4 py-3 text-right">
                            {typeof row[key] === 'number' ? row[key].toLocaleString() : row[key]}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GHGEmissionsTables;
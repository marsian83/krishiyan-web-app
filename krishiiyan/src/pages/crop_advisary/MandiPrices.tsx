import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
import indianState from "./indianState";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
interface MandiPricesProps {
  mandiPrices: string[]; // Define the type for 'mandiPrices'
}

const MandiPricesComponent: React.FC<MandiPricesProps> = () => {
  const [prices, setPrices] = useState<any>();
  const [data, setData] = useState<any>();
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCommodity, setSelectedCommodity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
    setSelectedDistrict("");
  };

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDistrict(event.target.value);
  };
  const handleCommodityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCommodity(event.target.value);
  };

  const api = {
    key: "579b464db66ec23bdd000001d9143fc81ac74bce7ad727abc2705a8a",
    base: "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070",
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `${api.base}?api-key=${api.key}&format=json&filters[state]=${selectedState}&filters[district]=${selectedDistrict}&filters[commodity]=Potato&limit=10000`
  //       );
  //       const data = await response.json();
  //       setData(data.records);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, [selectedState, selectedDistrict]);
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       `${api.base}?api-key=${api.key}&format=json&filters[state]=${selectedState}&filters[district]=${selectedDistrict}&filters[commodity]=${selectedCommodity}&limit=10000`
  //     );
  //     const data = await response.json();
  //     setData(data.records);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${api.base}?api-key=${api.key}&format=json&filters[state]=${selectedState}&filters[district]=${selectedDistrict}&filters[commodity]=${selectedCommodity}&limit=10`
      );
      const data = await response.json();
      setData(data.records);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header title="Crop Advisory" subtitle="Market" />
      <section className="p-[1%] mt-5">
        <div
          className=" "
          style={{
            display: "flex",
            justifyContent: " space-between",
            flexDirection: "row",
            width: "95%",
          }}
        >
          <div className="md:w-1/3">
            <label className="text-[#13490A] font-extrabold text-sm mr-2 ">
              State
            </label>
            <select
              id="states"
              onChange={handleStateChange}
              value={selectedState}
              className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
            >
              <option value="">Select a state</option>
              {indianState?.states?.map((state) => (
                <option className="text-start pl-2">{state.state}</option>
              ))}
            </select>
          </div>
          <div className="md:w-1/3">
            <label className="text-[#13490A] font-extrabold text-sm mr-2">
              District
            </label>
            <select
              id="districts"
              onChange={handleDistrictChange}
              value={selectedDistrict}
              className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8 w-60"
            >
              <option value="">Select a district</option>
              {selectedState &&
                indianState?.states
                  .find((state) => state.state === selectedState)
                  ?.districts.map((district) => (
                    <option
                      key={district}
                      value={district}
                      className="text-start pl-2 ml-2"
                    >
                      {district}
                    </option>
                  ))}
            </select>
          </div>
          <div className="md:w-1/3">
            <label className="text-[#13490A] font-extrabold text-sm mr-2 ">
              Commodity
            </label>
            <select
              id="commodities"
              onChange={handleCommodityChange}
              value={selectedCommodity}
              className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
            >
              <option value="">Select a commodity</option>
              {indianState?.commodity?.map((commodity) => (
                <option className="text-start ml-2">{commodity}</option>
              ))}
            </select>
          </div>
          <button
            onClick={fetchData}
            className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-[6vw] rounded text-sm font-thin"
          >
            {isLoading ? (
              <CircularProgress size={20} style={{ color: "white" }} />
            ) : (
              "Go"
            )}
          </button>
        </div>
      </section>
      {data ? (
        <table className="table-auto border-collapse border border-black font-bold text-base w-[96%] mx-auto mt-7">
          <thead className="border-b border-black">
            <tr className="text-center">
              <th className="border-r border-black py-[1.2%] pl-0.5 pr-0.5">
                S.No
              </th>
              <th className="border-r border-black py-[1.2%]">State</th>
              <th className="border-r border-black py-[1.2%] pl-1 pr-1">
                District
              </th>
              <th className="border-r border-black py-[1.2%]">Commodity</th>
              <th className="border-r border-black py-[1.2%]">Variety</th>

              <th className="border-r border-black py-[1.2%]">Market</th>
              <th className="border-r border-black py-[1.2%]">
                Max-Price <br />
                (Rs/Quintal)
              </th>
              <th className="border-r border-black py-[1.2%]">
                Min-Price <br />
                (Rs/Quintal)
              </th>
              <th className="border-r border-black py-[1.2%]">
                Modal-Price <br />
                (Rs/Quintal)
              </th>
              <th className="border-r border-black py-[1.2%]">Arrival-Date</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((record: any, index: any) => (
                <tr className="h-10 border-b border-black" key={index}>
                  <td className="border-r border-black">{index + 1}</td>
                  <td className="border-r border-black">{record?.state}</td>
                  <td className="border-r border-black pl-0.5 pr-0.5">
                    {record?.district}
                  </td>
                  <td className="border-r border-black">{record?.commodity}</td>
                  <td className="border-r border-black">{record?.variety}</td>
                  <td className="border-r border-black">{record?.market}</td>
                  <td className="border-r border-black">{record?.max_price}</td>
                  <td className="border-r border-black">{record?.min_price}</td>
                  <td className="border-r border-black">
                    {record?.modal_price}
                  </td>
                  <td className="border-r border-black pl-1 pr-1">
                    {record?.arrival_date}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={10} className="text-center py-[1.2%]">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default MandiPricesComponent;

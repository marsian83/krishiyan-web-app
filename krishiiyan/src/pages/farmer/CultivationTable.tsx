import { Button, Input } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

const CultivationTable = (props: any) => {
  const [serialNo, setSerialNo] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [area, setArea] = useState("");
  const [areaType, setAreaType] = useState("");
  const [majorCrops, setMajorCrops] = useState("");

  // const [rows, setRows] = useState([[1, "PUN01", 1, "garden", "Maize"]]);

  const [rows, setRows] = useState([
    { serialNo: 1, areaCode: "", area: "", areaType: "", majorCrops: "" },
  ]);

  const addRow = () => {
    // setRows([...rows, [serialNo, areaCode, area, type, majorCrops]]);
    setRows([
      ...rows,
      {
        serialNo: rows.length + 1,
        areaCode: areaCode,
        area: area,
        areaType: areaType,
        majorCrops: majorCrops,
      },
    ]);
  };
  
  useEffect(() => {
    props?.setCultivationData(rows);
  }, [rows]);

  return (
    <>
      <table className="table-auto border border-black font-bold text-base w-80">
        <thead className="border-b border-black">
          <tr>
            <th className="border-r border-black text-center">S.No</th>
            <th className="border-r border-black text-center">Area Code</th>
            <th className="border-r border-black text-center">Area</th>
            <th className="border-r border-black text-center">Type</th>
            <th className="text-center">Major Crops</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(() => (
            <tr>
              <td className="border-r border-black text-center">{serialNo}</td>
              <td className="border-r border-black text-center">{areaCode}</td>
              <td className="border-r border-black text-center">{area}</td>
              <td className="border-r border-black text-center">{areaType}</td>
              <td className="border-r border-black text-center">
                {majorCrops}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex w-full items-end gap-2 mt-8 ml-2">
        <input
          placeholder="Area code"
          onChange={(e) => setAreaCode(e.target.value)}
        ></input>
        {/* <Input
          size="md"
          label="Area"
          onChange={(e) => setArea(e.target.value)}
        />
        <Input
          size="md"
          label="Type"
          onChange={(e) => setAreaType(e.target.value)}
        />
        <Input
          size="md"
          label="Major crops"
          onChange={(e) => setMajorCrops(e.target.value)}
        /> */}
        <div className="w-full">
          <Button color="green" onClick={addRow}>
            Add
          </Button>
        </div>
      </div>
    </>
  );
};

export default CultivationTable;

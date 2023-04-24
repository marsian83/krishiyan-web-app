import React, { useState, useEffect } from "react";

const PesticideCal = (props: any) => {
  const [show, setShow] = useState(false);
  const [showTableOne, setShowTableOne] = useState(false);
  const [area, setArea] = useState("");

  useEffect(() => {
    if (!!props.product) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [props.product]);

  const onClickCalculate = async () => {
    if (area !== "" && area !== undefined) {
      setShowTableOne(true);
    } else {
      setShowTableOne(false);
    }
  };

  if (!show) return <></>;
  const Product = props.allPesticides.find(
    (pesticide: any) => pesticide._id === props.product
  );
  const Problem = props.allPests.find(
    (pest: any) => pest._id === props.problem
  );
  return (
    <>
      <section className="p-5">
        <div className="font-extrabold grid grid-cols-[15%_30%_5%_15%] gap-[2%] mx-[20%] mb-[3%] items-center">
          <label className="text-center">Area(Acre)</label>
          <input
            type="text"
            className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
            onChange={(e) => {
              setArea(e.target.value);
            }}
          />
          {/* <img src="Images/Dropdown.png" alt="Dropdown" className="" /> */}
          <button
            className="bg-[#05AB2A] text-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] font-light rounded-md h-8"
            style={{ width: "85px" }}
            onClick={onClickCalculate}
          >
            Calculate
          </button>
        </div>
      </section>

      {showTableOne && area ? (
        <>
          <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto">
            <thead className="border-b border-black">
              <tr className="text-center">
                <th className="border-r border-black py-[1.2%]">Product</th>
                <th className="border-r border-black py-[1.2%]">
                  Dosage per acre
                </th>
                <th className="border-r border-black py-[1.2%]">Unit</th>
                <th className="border-r border-black py-[1.2%]">
                  Dilution Ratio with water(Liters)
                </th>
                <th className="border-r border-black py-[1.2%]">Area( Acre)</th>
                <th className="border-r border-black py-[1.2%]">
                  Recommended quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Stage1 */}
              <tr className="h-10 border-b border-black">
                <td className="border-r border-black">{Product?.name || ""}</td>

                <td className="border-r border-black">
                  {Product?.dosagePerAcre || ""}
                </td>
                <td className="border-r border-black">{Product?.unit || ""}</td>

                <td className="border-r border-black">
                  {Product?.dilutionRatioPerAcre || ""}
                </td>
                <td className="border-r border-black">{area}</td>
                <td className="border-r border-black">
                  {parseFloat(area) * parseFloat(Product?.dosagePerAcre)} ml
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto">
            <thead className="border-b border-black">
              <tr className="text-center">
                <th className="border-r border-black py-[1.2%]">
                  Dilution Ratio with water(Liters)
                </th>
                <th className="border-r border-black py-[1.2%]">
                  Recommended quantity
                </th>

                <th className="border-r border-black py-[1.2%]">Stage</th>

                <th className="border-r border-black py-[1.2%]">
                  Spraying Time
                </th>
                <th className="border-r border-black py-[1.2%]">
                  Application type
                </th>
                <th className="border-r border-black py-[1.2%]">
                  For Effective control
                </th>
                <th className="border-r border-black py-[1.2%]">Frequency</th>
              </tr>
            </thead>
            <tbody>
              {/* Stage1 */}
              <tr className="h-10 border-b border-black">
                <td className="border-r border-black">
                  {Product?.dilutionRatioPerAcre}
                </td>
                <td className="border-r border-black">{`${
                  parseFloat(area) * parseFloat(Product?.dosagePerAcre)
                } ${Product?.unit} for ${area} acre`}</td>
                <td className="border-r border-black">{Product?.stage}</td>
                <td className="border-r border-black">
                  {Product?.sprayingTime}
                </td>
                <td className="border-r border-black">
                  {Product?.applicationType}
                </td>
                <td className="border-r border-black">{Problem?.name}</td>
                <td className="border-r border-black">{Product?.frequency}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <p>
            {`Use ${parseFloat(area) * parseFloat(Product?.dosagePerAcre)} ${
              Product?.unit
            } in ${Product?.dilutionRatioPerAcre
              .split("-")
              .map((value: string) => parseFloat(value) * parseFloat(area))
              .join("-")} L of water for spraying ${Product?.name} at ${
              Product?.sprayingTime
            } or at ${Product?.stage} stage to effectively control ${
              Problem?.name
            } for ${area} acres at the frequency of ${Product?.frequency} by ${
              Product?.applicationType
            } method.`}
          </p>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default PesticideCal;

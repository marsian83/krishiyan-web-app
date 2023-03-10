import moment from "moment";
import React, { useState, useEffect } from "react";

const YieldCal = (props: any) => {
  const [show, setShow] = useState(false);
  const [showTableOne, setShowTableOne] = useState(false);
  const [area, setArea] = useState("");

  useEffect(() => {
    if (!!props.crop) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [props.crop]);

  const onClickCalculate = async () => {
    if (area !== "" && area !== undefined) {
      setShowTableOne(true);
    } else {
      setShowTableOne(false);
    }
  };

  // if (!show) return <></>;

  const Crop = props.allCrops.find((crop: any) => crop._id === props.crop);
  const Problem = props.allPests.find(
    (pest: any) => pest._id === props.problem
  );

  return (
    <>
      <section className="p-5">
        <div className="font-extrabold grid grid-cols-[15%_30%_5%_15%] gap-[2%] mx-[20%] mb-[3%] items-center">
          <label className="text-center">Area</label>
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
                <th className="border-r border-black py-[1.2%]">Crop</th>
                <th className="border-r border-black py-[1.2%]">Variety</th>
                <th className="border-r border-black py-[1.2%]">
                  Crop Cycle(Days)
                </th>
                <th className="border-r border-black py-[1.2%]">
                  Date of Sowing
                </th>
                <th className="border-r border-black py-[1.2%]">Area( Acre)</th>
                <th className="border-r border-black py-[1.2%]">
                  Expected date of cultivation
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Stage1 */}
              <tr className="h-10 border-b border-black">
                <td className="border-r border-black">
                  {Crop?.localName || ""}
                </td>

                <td className="border-r border-black">
                  {Problem?.nameOfvariety || ""}
                </td>
                <td className="border-r border-black">
                  {Problem?.cropCycle || ""}
                </td>

                <td className="border-r border-black">
                  {moment(props.dateOfSowing)?.format("DD-MM-YY") || ""}
                </td>
                <td className="border-r border-black">{area}</td>
                <td className="border-r border-black">
                  {` ${Problem?.cropCycle} days after ${moment(
                    props.dateOfSowing
                  )?.format("DD-MM-YY")}:
                    ${moment(props.dateOfSowing)
                      ?.add(parseInt(Problem?.cropCycle), "days")
                      ?.format("DD-MM-YY")}`}
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto">
            <thead className="border-b border-black">
              <tr className="text-center">
                <th className="border-r border-black py-[1.2%]">Crop</th>
                <th className="border-r border-black py-[1.2%]">Variety</th>
                <th className="border-r border-black py-[1.2%]">
                  Avg Yield (t/Acre)
                </th>
                <th className="border-r border-black py-[1.2%]">Area(Acre)</th>
                <th className="border-r border-black py-[1.2%]">
                  Expected Yield(t)
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Stage1 */}
              <tr className="h-10 border-b border-black">
                <td className="border-r border-black">
                  {Crop?.localName || ""}
                </td>

                <td className="border-r border-black">
                  {Problem?.nameOfvariety || ""}
                </td>
                <td className="border-r border-black">
                  {Problem?.avgYieldPerAcre || ""}
                </td>

                <td className="border-r border-black">{area}</td>
                <td className="border-r border-black">
                  {parseFloat(area) * parseFloat(Problem?.avgYieldPerAcre)}
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto">
            <thead className="border-b border-black">
              <tr className="text-center">
                <th className="border-r border-black py-[1.2%]">Variety</th>
                <th className="border-r border-black py-[1.2%]">
                  Cost of /acre
                </th>

                <th className="border-r border-black py-[1.2%]">
                  Expected Price/t
                </th>

                <th className="border-r border-black py-[1.2%]">Area(Acre)</th>
                <th className="border-r border-black py-[1.2%]">
                  Expected Yield(t)
                </th>
                <th className="border-r border-black py-[1.2%]">
                  Expected Expense
                </th>
                <th className="border-r border-black py-[1.2%]">
                  Expected Revenue
                </th>
                <th className="border-r border-black py-[1.2%]">
                  Expected Profit
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Stage1 */}
              <tr className="h-10 border-b border-black">
                <td className="border-r border-black">
                  {Problem?.nameOfvariety}
                </td>
                <td className="border-r border-black">
                  {Problem?.costPerAcre}
                </td>
                <td className="border-r border-black">
                  {Problem?.expectedPrice}
                </td>
                <td className="border-r border-black">{area}</td>
                <td className="border-r border-black">
                  {parseFloat(area) * parseFloat(Problem?.avgYieldPerAcre)}
                </td>
                <td className="border-r border-black">
                  {parseFloat(area) * parseFloat(Problem?.costPerAcre)}
                </td>
                <td className="border-r border-black">
                  {parseFloat(area) *
                    parseFloat(Problem?.avgYieldPerAcre) *
                    parseFloat(Problem?.expectedPrice)}
                </td>
                <td className="border-r border-black">
                  {parseFloat(area) *
                    parseFloat(Problem?.avgYieldPerAcre) *
                    parseFloat(Problem?.expectedPrice) -
                    parseFloat(area) * parseFloat(Problem?.costPerAcre)}
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto">
            <thead className="border-b border-black">
              <tr className="text-center">
                <th className="border-r border-black py-[1.2%]">Crop</th>
                <th className="border-r border-black py-[1.2%]">Variety</th>
                <th className="border-r border-black py-[1.2%]">
                  Maturity Index
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Stage1 */}
              <tr className="h-10 border-b border-black">
                <td className="border-r border-black">
                  {Crop?.localName || ""}
                </td>

                <td className="border-r border-black">
                  {Problem?.nameOfvariety || ""}
                </td>
                <td className="border-r border-black">
                  {Problem?.maturityIndex || ""}
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <p>
            {`*${
              parseFloat(area) * parseFloat(Problem?.avgYieldPerAcre)
            } Tonnes can be achieved for ${area} acres by cultivating ${
              Problem?.nameOfvariety
            } and can be cultivated at the cost of 
                ${
                  parseFloat(area) * parseFloat(Problem?.costPerAcre)
                } for ${area} acres and Expected revenue of Rs ${
              parseFloat(area) *
              parseFloat(Problem?.avgYieldPerAcre) *
              parseFloat(Problem?.expectedPrice)
            }. The farmers' expected profit is Rs. ${
              parseFloat(area) * parseFloat(Problem?.costPerAcre)
            }. Expected
            date of Cultivation is ${moment(props.dateOfSowing)
              ?.add(parseInt(Problem?.cropCycle), "days")
              ?.format("DD-MM-YY")}.
            *${Problem?.maturityIndex}
            `}
          </p>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default YieldCal;

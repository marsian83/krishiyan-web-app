import React from "react";
import Header from "../../Components/layouts/Header";

const Expert = () => {
  let col1: any = "2";
  let type: string = "text";
  return (
    <>
      <Header title="Help" subtitle="Expert" />
      <section className="p-[2%] grid grid-rows-[60%_40%] box-border ">
        <div className=" flex flex-wrap gap-x-[10%] lg:gap-x-[8%] gap-y-[4%] ml-4">
          <table className="table-auto border border-[#033E02] border-collapse w-[25%] lg:w-[28%] ">
            <thead>
              <tr>
                <th className="text-center text-[#033E02] font-extrabold py-[5%]" colSpan={col1}>AGRONOMIST</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-[#000000] border-collapse m-10">
                  <img src="Images/ChatColor.png" alt="Chat" className="mx-auto" />
                  <p className="text-center py-[18%] text-[#F31111] font-bold text-sm lg:text-xs xl:text-sm"> 3 MINS</p>
                </td>
                <td className="border-l border-[#000000] border-collapse">
                  <img src="Images/Call.png" alt="Call" className="mx-auto" />
                  <p className="text-center py-[18%] text-[#F31111] font-bold text-sm lg:text-xs xl:text-sm">6 MINS</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto border border-[#033E02] border-collapse w-[25%] lg:w-[28%]">
            <thead>
              <tr>
                <th className="text-center text-[#033E02] font-extrabold py-[5%]" colSpan={col1}>SOIL CHEMIST</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r border-[#000000] border-collapse">
                  <img src="Images/ChatColor.png" alt="Chat" className="mx-auto" />
                  <p className="text-center py-[18%] text-[#F31111] font-bold text-sm lg:text-xs xl:text-sm">4 MINS</p>
                </td>
                <td className="border-l border-[#000000] border-collapse">
                  <img src="Images/Call.png" alt="Call" className="mx-auto" />
                  <p className="text-center py-[18%] text-[#F31111] font-bold text-sm lg:text-xs xl:text-sm">6 MINS</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto border border-[#033E02] border-collapse w-[25%] lg:w-[28%]">
            <thead>
              <tr>
                <th className="text-center text-[#033E02] font-extrabold py-[5%]" colSpan={col1}>ENVIRONMENTALIST</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r border-[#000000] border-collapse">
                  <img src="Images/ChatColor.png" alt="Chat" className="mx-auto" />
                  <p className="text-center py-[18%] text-[#F31111] font-bold text-sm lg:text-xs xl:text-sm">2 MINS</p>
                </td>
                <td className="border-l border-[#000000] border-collapse">
                  <img src="Images/Call.png" alt="Call" className="mx-auto" />
                  <p className="text-center py-[18%] text-[#F31111] font-bold text-sm lg:text-xs xl:text-sm">4 MINS</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto bg-[#127E0F] border border-[#033E02] border-collapse w-[25%] lg:w-[28%] ">
            <thead>
              <tr>
                <th className="text-center text-[#033E02] font-extrabold py-[5%]" colSpan={col1}>ENTAMOLOGIST</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="Images/ChatColor.png" alt="Chat" className="mx-auto" />
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-center py-[5%] text-[#F31111] font-bold text-sm lg:text-xs xl:text-sm">MR.MOORTHY, PHD(ENTOMOLOGY)</p>
                </td>
              </tr>
              <tr className="flex justify-end items-center">
                <td className="flex justify-end items-center mx-[2%]">
                  <img src="Images/Call.png" alt="Call"/>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto border border-[#033E02] border-collapse w-[25%] lg:w-[28%]">
            <thead>
              <tr>
                <th className="text-center text-[#033E02] font-extrabold py-[5%]" colSpan={col1}> PATHOLOGIST</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r border-[#000000] border-collapse">
                  <img src="Images/ChatColor.png" alt="Chat" className="mx-auto" />
                  <p className="text-center py-[18%] text-[#F31111] font-bold text-sm lg:text-xs xl:text-sm">3 MINS</p>
                </td>
                <td className="border-l border-[#000000] border-collapse">
                  <img src="Images/Call.png" alt="Call" className="mx-auto" />
                  <p className="text-center py-[18%] text-[#F31111] font-bold text-sm lg:text-xs xl:text-sm">6 MINS</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto border border-[#033E02] border-collapse w-[25%] lg:w-[28%]">
            <thead>
              <tr>
                <th className="text-center text-[#033E02] font-extrabold py-[5%]" colSpan={col1}>NEMATOLOGIST</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r border-[#000000] border-collapse">
                  <img src="Images/ChatColor.png" alt="Chat" className="mx-auto" />
                  <p className="text-center py-[18%] text-[#F31111] font-bold text-sm lg:text-xs xl:text-sm">3 MINS </p>
                </td>
                <td className="border-l border-[#000000] border-collapse">
                  <img src="Images/Call.png" alt="Call" className="mx-auto" />
                  <p className="text-center py-[18%] text-[#F31111] font-bold text-sm lg:text-xs xl:text-sm"> 6 MINS</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-black w-full h-[80%] px-[1%] my-[2%] border-l flex flex-col justify-around ml-4">
          <div className="w-full">
            <div className="border text-[#FF2222] font-bold text-sm border-[#033E02] rounded-lg w-[35%] py-[0.5%] px-[2%] m-6">
              HI..HOW CAN I HELP YOU?
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div
              // type={type}
              className="border text-[#FF2222] font-bold text-sm border-[#033E02] rounded-lg w-[35%] py-[0.5%] px-[2%]">
              HAVING WHITEFLIES PROBLEM IN COCONUT
            </div>
          </div>
          <div className="mx-auto flex w-[90%] m-4 ">
            <input
              type="text"
              className="border font-bold text-sm bg-[#FFFFFF] border-[#033E02] rounded-lg w-[90%] py-[0.5%] px-[2%]" placeholder="can you suggest me some ways" />
            <img src="Images/send.png" alt="send" className="mx-auto my-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Expert;

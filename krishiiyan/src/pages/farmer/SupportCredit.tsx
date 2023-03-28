import { MenuItem } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { getCreditNumber } from "../../Services/Api";
import { TextField } from "@material-ui/core";

const SupportCredit = () => {
  const [allCredits, setAllCred] = useState<any[]>([]);
  const [credit, setCredit] = useState("");

  useEffect(() => {
    const setCredits = async () => {
      const credits: any[] = await getCreditNumber();
      setAllCred(credits[1].data);
    };
    setCredits();
  }, []);
  const onChangeCredit = (e: any) => {
    setCredit(e.target.value);
  };
  return (
    <div className="w-full max-w-sm mt-10 mb-5 ml-80">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            // for="inline-password"
          >
            Credit number
          </label>
        </div>
        <div className="md:w-2/3">
          <select
            id="countries"
            className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25) border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={onChangeCredit}
          >
            <option selected>Select Credit Number </option>
            {allCredits?.map((credit: any) => (
              <option value={credit._id}>{credit.billNumber}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            // for="inline-password"
          >
            Description
          </label>
        </div>
        <div className="md:w-2/3">
          <textarea
            className=" bg-[#F3FFF1] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 h-24"
            //   onChange={onChangeArea}
            id="inline-password"
            maxLength={50}
            placeholder="Maximum Of 50 Characters"
          />
        </div>
      </div>

      <button
        type="submit"
        //   onClick={onSubmitHandler}
        className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
      >
        Submit
      </button>
    </div>
  );
};

export default SupportCredit;

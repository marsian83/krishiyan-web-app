import { MenuItem } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { getCreditNumber } from "../../Services/Api";
import { TextField } from "@material-ui/core";
import { toast } from "react-toastify";
import * as Api from "../../Services/Api";

const SupportCredit = () => {
  const [allCredits, setAllCredits] = useState<any>([]);
  const [farmerDetails, setFarmerDetails] = useState<any>();
  const [credit, setCredit] = useState("");
  const [description, setDescription] = useState<any>();
  const [farmerMobile, setFarmerMobile] = useState("");
  const [page, setPage] = useState<any>(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const getFarmerCredits = async () => {
    const [err, res] = await Api.getFarmerCreditData(
      farmerDetails?._id
      // page,
      // rowsPerPage
    );
    if (res) {
      setAllCredits(res?.data?.farmerCreditData);
    }
  };
  const onClickEnter = async () => {
    await getFarmerByMobile();
  };
  useEffect(() => {
    const init = async () => {
      await getFarmerCredits();
    };
    init();
  }, [farmerMobile, farmerDetails, page, rowsPerPage]);
  const onChangeCredit = (e: any) => {
    setCredit(e.target.value);
  };
  const onChangeDescription = (e: any) => {
    setDescription(e.target.value);
  };
  const onSubmitHandler = async () => {
    const [err, res] = await Api.createFarmerSuppotCredit(credit, description);
    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res) {
      toast.success(" Credit created!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const getFarmerByMobile = async () => {
    const [err, res] = await Api.getFarmer(farmerMobile);
    if (res) {
      setFarmerDetails(res?.data);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getFarmerByMobile();
    };
    init();
  }, [farmerMobile]);
  useEffect(() => {
    if (!localStorage.Number) return;
    setFarmerMobile(localStorage.Number);
    onClickEnter();
  }, []);

  console.log(credit, "it is credit number");
  return (
    <div className="w-full max-w-sm mt-10 mb-5 ml-80">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="text-[#13490A] font-extrabold text-sm mx-2"
            // for="inline-password"
          >
            Credit Number
          </label>
        </div>
        <div className="md:w-2/3 ">
          <select
            id="countries"
            className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="text-[#13490A] font-extrabold text-sm mx-5"
            // for="inline-password"
          >
            Description
          </label>
        </div>
        <div className="md:w-2/3">
          <textarea
            className=" bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 h-24"
            onChange={onChangeDescription}
            id="inline-password"
            maxLength={50}
            placeholder="Maximum Of 50 Characters"
          />
        </div>
      </div>

      <button
        type="submit"
        onClick={onSubmitHandler}
        className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
      >
        Submit
      </button>
    </div>
  );
};

export default SupportCredit;

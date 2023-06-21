import { Textarea } from "@material-tailwind/react";
import { TextField } from "@material-ui/core";
import { Autocomplete, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";

import {
  getCrops,
  getFarmers,
  createFarmerSupportHealth,
} from "../../Services/Api";

const CropHealthAdmin = () => {
  let col: any = 12;
  let row: any = 5;
  const [allCrops, setAllCropes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [crop, setCrop] = useState("");
  const [text, setText] = useState("");
  const [farmer, setFarmer] = useState("");
  const [allFarmer, setAllFarmer] = useState<any>([]);
  const [category, setCategory] = useState("");
  const [farmerDetail, setFarmerDetail] = useState<any>();
  const [description, setDescription] = useState("");
  const [farmerID, setFarmerID] = useState<any>("");
  const onChangeCrop = (e: any) => {
    setCrop(e.target.value);
  };
  function refreshPage() {
    window.location.reload();
  }

  useEffect(() => {
    const setCrops = async () => {
      const crops: any[] = await getCrops();
      setAllCropes(crops[1].data);
    };
    setCrops();
  }, []);

  useEffect(() => {
    const setFarmers = async () => {
      const farmers: any[] = await getFarmers();
      setAllFarmer(farmers[1].data);
    };
    setFarmers();
  }, []);

  const onChangeFarmerName = (e: any) => {
    setFarmer(e.target.value);
  };

  const getFarmerById = async () => {
    if (farmerID) {
      const [err, res] = await Api.getFarmer(farmerID);
      if (err) {
        console.log(err);
      }
      if (res) {
        console.log(res);

        setFarmerDetail(res?.data);
      }

      setLoading(false);
    }
  };

  const onChangeCategory = (e: any) => {
    setCategory(e.target.value);
  };
  const onChangeDescription = (e: any) => {
    setDescription(e.target.value);
  };
  const onSubmitHandler = async () => {
    const [err, res] = await Api.createFarmerSupportHealth(
      farmerDetail?._id,
      allCrops.find((c) => c._id === crop).localName,
      category,
      description
    );
    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res) {
      toast.success(" Crop Health created!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  useEffect(() => {
    const init = async () => {
      await getFarmerById();
    };
    init();
  }, [farmerID]);

  useEffect(() => {
    if (!localStorage.Number) return;
    setFarmerID(localStorage.Number);
  }, []);

  return (
    <>
      <div className="w-full max-w-sm mt-10 mb-5 ml-80">
        {/* <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              // for="inline-password"
            >
              Farmer
            </label>
          </div>
          <div className="md:w-2/3">
            <select
              id="countries"
              className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25) border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={onChangeFarmerName}
            >
              <option selected>Select Farmer </option>
              {allFarmer?.map((crop: any) => (
                <option value={farmer}>{crop.name}</option>
              ))}
            </select>
          </div>
        </div> */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="text-[#13490A] font-extrabold text-sm mx-5">
              Crop
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              placeholder="Crop"
              className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={onChangeCrop}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Category
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Category"
              onChange={onChangeCategory}
            ></textarea>
          </div>
        </div>{" "}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Name
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
              onChange={onChangeCategory}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Image Link
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Image Link"
              onChange={onChangeCategory}
            ></textarea>
          </div>
        </div>{" "}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Solution
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Solution"
              onChange={onChangeCategory}
            ></textarea>
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
              className=" bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 h-24"
              //   onChange={onChangeArea}
              id="inline-password"
              maxLength={50}
              placeholder="Maximum Of 50 Characters"
              onChange={onChangeDescription}
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={refreshPage}
          className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default CropHealthAdmin;
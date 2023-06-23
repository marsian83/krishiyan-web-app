import { Textarea } from "@material-tailwind/react";
import { TextField } from "@material-ui/core";
import { Autocomplete, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

import CSVReader from "../CSVUpload/CSVUpload";
import Header from "../../Components/layouts/Header";

const AddCrop = () => {
  const [crop, setCrop] = useState("");
  const [ScientificName, setScientificName] = useState("");
  const [image, setImage] = useState<any>();

  const [description, setDescription] = useState("");

  const [stageName, setStageName] = useState("");
  const [number, setNumber] = useState("");
  const onChangeCrop = (e: any) => {
    setCrop(e.target.value);
  };
  function refreshPage() {
    window.location.reload();
  }

  const onChangeScientificName = (e: any) => {
    setScientificName(e.target.value);
  };
  const onChangeDescription = (e: any) => {
    setDescription(e.target.value);
  };
  const onChangeStageName = (e: any) => {
    setStageName(e.target.value);
  };
  const onChangeNumber = (e: any) => {
    setNumber(e.target.value);
  };
  const handleHealthSubmit = async () => {
    console.log(process.env.REACT_APP_BACKEND_URL);
    try {
      if (
        !ScientificName ||
        !crop ||
        !image ||
        !description ||
        !stageName ||
        !number
      ) {
        toast.error("Please fill in all the details", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}crop/role-admin/save`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
          body: JSON.stringify({
            localName: crop,
            scientificName: ScientificName,
            stage: number,
            name: stageName,
            images: [image],
            description: description,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.status == "success")
        toast.success("Crop Health Created Successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
    } catch (err: any) {
      console.log(err);
      toast.error(err.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <div>
        <Header title="Add crop" subtitle="" />

        <div className="w-full max-w-sm mt-10 mb-5 ml-80">
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
          <div className="md:flex md:items-center mb-6"></div>{" "}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="text-[#13490A] font-extrabold text-sm mx-5"
                // for="inline-password"
              >
                Scientific Name
              </label>
            </div>
            <div className="md:w-2/3 ">
              <textarea
                className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                onChange={onChangeScientificName}
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="text-[#13490A] font-extrabold text-sm mx-5"
                // for="inline-password"
              >
                Stage number
              </label>
            </div>
            <div className="md:w-2/3 ">
              <textarea
                className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Stage Number"
                onChange={onChangeNumber}
              ></textarea>
            </div>
          </div>{" "}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="text-[#13490A] font-extrabold text-sm mx-5"
                // for="inline-password"
              >
                Stage Name
              </label>
            </div>
            <div className="md:w-2/3 ">
              <textarea
                className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Stage Name"
                onChange={onChangeStageName}
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="text-[#13490A] font-extrabold text-sm mx-5"
                // for="inline-password"
              >
                Image url
              </label>
            </div>
            <div className="md:w-2/3 ">
              <textarea
                className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Image Link"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              ></textarea>
            </div>
          </div>{" "}
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
            onClick={handleHealthSubmit}
            className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
          >
            Submit
          </button>
          OR
          <CSVReader />
        </div>
      </div>
    </>
  );
};

export default AddCrop;

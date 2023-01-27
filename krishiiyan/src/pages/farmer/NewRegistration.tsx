import React, { useState, useEffect } from "react";
import Header from "../../Components/layouts/Header";
import { Checkbox } from "@mui/material";
import { Input } from "@material-tailwind/react";
import CultivationTable from "./CultivationTable";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NewRegistration = () => {
  const [cultivationData, setCultivationData] = useState<any>();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState<any>();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [isWhatsapp, setIsWhatsapp] = useState(false);

  const onChangeName = (e: any) => {
    setName(e.target.value);
  };
  const onChangePhone = (e: any) => {
    setPhone(e.target.value);
  };
  const onChangeState = (e: any) => {
    setState(e.target.value);
  };
  const onChangeCity = (e: any) => {
    setCity(e.target.value);
  };
  const onChangeZip = (e: any) => {
    setZip(e.target.value);
  };
  const onChangeIsWhatsapp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsWhatsapp(event.target.checked);
  };

  //Cultivation form data
  const [area, setArea] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [areaType, setAreaType] = useState("");
  const [crop, setCrop] = useState("");
  const [variety, setVariety] = useState("");
  const [dateOfSowing, setDateOfSowing] = useState("");
  const [adaptedSeason, setAdaptedSeason] = useState("");
  const [currentStage, setCurrentStage] = useState("");
  const [slotNumber, setSlotNumber] = useState("");

  const onChangeArea = (e: any) => {
    setArea(e.target.value);
  };
  const onChangeAreaCode = (e: any) => {
    setAreaCode(e.target.value);
  };
  const onChangeAreaType = (e: any) => {
    setAreaType(e.target.value);
  };
  const onChangeCrop = (e: any) => {
    setCrop(e.target.value);
  };
  const onChangevariety = (e: any) => {
    setVariety(e.target.value);
  };
  const onChangedateOfSowing = (e: any) => {
    setDateOfSowing(e.target.value);
  };
  const onChangeadaptedSeason = (e: any) => {
    setAdaptedSeason(e.target.value);
  };
  const onChangecurrentStage = (e: any) => {
    setCurrentStage(e.target.value);
  };
  const onChangeCropslotNumber = (e: any) => {
    setSlotNumber(e.target.value);
  };

  const onSubmitHandler = async () => {
    const [error, response] = await Api.createFarmer(
      name,
      phone,
      isWhatsapp,
      state,
      city,
      zip,
      cultivationData
    );

    if (error) {
      console.log(error);
      toast.error(error.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (response) {
      console.log(response);
      toast.success("New farmer created!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      //call cultivation api
      const [err, res] = await Api.createFarmerCultivationData(
        response?.data?._id,
        area,
        areaCode,
        areaType,
        crop,
        variety,
        dateOfSowing,
        adaptedSeason,
        currentStage,
        slotNumber
      );
      if (err) {
        toast.error(err.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (res) {
        toast.success("New cultivation record created!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  return (
    <>
      <Header title="Farmer" subtitle="New Registration" />
      <section>
        <div className="grid grid-cols-[25%_34%] items-center mt-6 mb-5">
          <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
            Name
          </label>
          <input
            type="text"
            className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
            onChange={onChangeName}
          ></input>
        </div>
        <div className="grid grid-cols-[50%_50%] gap-x-16">
          <div className=" grid grid-cols-[50%_34%] items-center">
            <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
              Mobile Number
            </label>
            <input
              type="text"
              className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
              onChange={onChangePhone}
            ></input>
          </div>
          <div className="grid grid-cols-[35%_5%] justify-items-end items-center">
            <label className="text-[#13490A] font-roboto font-extrabold text-sm mx-5 ">
              Whatsapp
            </label>
            <Checkbox
              checked={isWhatsapp}
              onChange={onChangeIsWhatsapp}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>
        <img src="Images/Line18.png" className="my-5" alt="line" />
        <div className="grid grid-cols-[25%_27%]">
          <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
            Address
          </label>
          <div>
            <div className="w-73">
              <Input label="State" onChange={onChangeState} />
            </div>
            <div className="w-73 mt-2">
              <Input label="City" onChange={onChangeCity} />
            </div>
            <div className="w-73 mt-2">
              <Input label="Zip" onChange={onChangeZip} />
            </div>
          </div>
        </div>
        <img src="Images/Line18.png" className="my-5" alt="line" />

        {/* CULTIVATION */}

        <h1 className="text-[#13490A] font-roboto text-center font-extrabold">
          Cultivation
        </h1>

        <div className="grid grid-cols-[50%_34%] items-center mt-6 mb-5">
          {/* <CultivationTable setCultivationData={setCultivationData} /> */}
          <div className=" grid grid-cols-[50%_34%] items-center">
            <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
              Area
            </label>
            <input
              type="text"
              className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
              onChange={onChangeArea}
            ></input>
          </div>

          <div className=" grid grid-cols-[50%_34%] items-center">
            <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
              Area Code
            </label>
            <input
              type="text"
              className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
              onChange={onChangeAreaCode}
            ></input>
          </div>

          <div className=" grid grid-cols-[50%_34%] items-center mt-4">
            <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
              Area Type
            </label>
            <input
              type="text"
              className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
              onChange={onChangeAreaType}
            ></input>
          </div>

          <div className=" grid grid-cols-[50%_34%] items-center mt-4">
            <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
              Crop
            </label>
            <input
              type="text"
              className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
              onChange={onChangeCrop}
            ></input>
          </div>

          <div className=" grid grid-cols-[50%_34%] items-center mt-4">
            <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
              Variety
            </label>
            <input
              type="text"
              className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
              onChange={onChangevariety}
            ></input>
          </div>

          <div className=" grid grid-cols-[50%_34%] items-center mt-4">
            <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
              Date of sowing
            </label>
            <input
              type="text"
              className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
              onChange={onChangedateOfSowing}
            ></input>
          </div>

          <div className=" grid grid-cols-[50%_34%] items-center mt-4">
            <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
              Adapted Season
            </label>
            <input
              type="text"
              className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
              onChange={onChangeadaptedSeason}
            ></input>
          </div>

          <div className=" grid grid-cols-[50%_34%] items-center mt-4">
            <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
              Current Stage
            </label>
            <input
              type="text"
              className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
              onChange={onChangecurrentStage}
            ></input>
          </div>

          <div className=" grid grid-cols-[50%_34%] items-center mt-4">
            <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
              Slot Number
            </label>
            <input
              type="text"
              className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
              onChange={onChangeCropslotNumber}
            ></input>
          </div>
        </div>
        <div className="grid  justify-center w-[80%] lg:w-[88%] xl:w-[78%] 2xl:w-[65%]">
          <div className="bg-pink-200"></div>
          <button
            onClick={onSubmitHandler}
            type="submit"
            className="bg-[#05AB2A] text-[#F3FFF1] w-[8vw] h-8  mt-5 shadow-[0px_4px_3px_rgba(0,0,0,0.25)] rounded text-sm font-thin"
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default NewRegistration;

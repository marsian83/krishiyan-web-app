import moment from "moment";
import React, { useState } from "react";
import Header from "../../Components/layouts/Header";

const ProductAdd = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [volume, setVolume] = useState("");
  const [description, setDescription] = useState("");
  const [dateofPurchese, setDateofPurchese] = useState("");
  const [hsn, setHsn] = useState("");
  const [tax, setTax] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const onChangeName = (e: any) => {
    setName(e.target.value);
  };

  const onChangeCategory = (e: any) => {
    setCategory(e.target.value);
  };
  const onChangeMeasurement = (e: any) => {
    setMeasurement(e.target.value);
  };

  const onChangeVolume = (e: any) => {
    setVolume(e.target.value);
  };
  const onChangeDescription = (e: any) => {
    setDescription(e.target.value);
  };
  const onChangeDateofPurchese = (e: any) => {
    let date = moment(e.target.value).toISOString();
    setDateofPurchese(date);
  };

  const onChangeHsn = (e: any) => {
    setHsn(e.target.value);
  };
  const onChangeTax = (e: any) => {
    setTax(e.target.value);
  };
  const onChangeExpiryDate = (e: any) => {
    let date = moment(e.target.value).toISOString();
    setExpiryDate(date);
  };

  let row: any = "5";
  let col: any = "20";
  return (
    <>
      <section className="py-[0%]">
        <Header title="Pos" subtitle="Inventory" />
        <h2 className="text-[#13490A] font-bold mr-[26%] mt-2">
          Add New Product
        </h2>
        <div className="flex justify-start">
          <button className="bg-[#05AB2A] text-[#F3FFF1] font-light h-[5vh] w-[8%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md">
            Back
          </button>
        </div>
        <div className="grid grid-cols-[50%_50%] h-full mt-[1%]">
          <div className=" grid gap-y-[2%]">
            <div className="grid grid-cols-[40%_60%]">
              <label className="text-center text-[#13490A] font-bold text-base">
                Name
              </label>
              <input
                type="text"
                className="bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center"
                onChange={onChangeName}
              />
            </div>
            <div className="grid grid-cols-[40%_60%]">
              <label className="text-center text-[#13490A] font-bold text-base">
                Category
              </label>
              <input
                type="text"
                className="bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center"
                onChange={onChangeCategory}
              />
            </div>
            <div className="grid grid-cols-[40%_60%]">
              <label className="text-center text-[#13490A] font-bold text-base">
                Measurement Unit
              </label>
              <input
                onChange={onChangeMeasurement}
                type="text"
                className="bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center"
              />
            </div>
            <div className="grid grid-cols-[40%_60%]">
              <label className="text-center text-[#13490A] font-bold text-base">
                Volume
              </label>
              <input
                type="text"
                className="bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center"
                onChange={onChangeVolume}
              />
            </div>
            <div className="grid grid-cols-[40%_60%]">
              <label className="text-center text-[#13490A] font-bold text-base">
                Description
              </label>
              <textarea
                rows={row}
                cols={col}
                className="bg-[#F3FFF1] text-[#13490A] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center"
                onChange={onChangeDescription}
              ></textarea>
            </div>
            <div className="grid grid-cols-[40%_60%]">
              <label className="text-center text-[#13490A] font-bold text-base">
                Date of Purchese
              </label>
              <input
                type="text"
                className="bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center"
                onChange={onChangeDateofPurchese}
              />
            </div>
            <div className="grid grid-cols-[40%_60%] mt-1">
              <div></div>
              <div className="flex justify-center">
                <button className="bg-[#05AB2A] text-[#F3FFF1] mx-auto font-light h-[5vh] px-[3%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-[10%_10%_10%] gap-y-[2%]">
            <div className="grid grid-cols-[38%_50%]">
              <label className="text-center text-[#13490A] font-bold text-base">
                HSN
              </label>
              <input
                type="text"
                className="bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center"
                onChange={onChangeHsn}
              />
            </div>
            <div className="grid grid-cols-[38%_50%]">
              <label className="text-center text-[#13490A] font-bold text-base">
                Tax %
              </label>
              <input
                type="text"
                className="bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center"
                onChange={onChangeTax}
              />
            </div>
            <div className="grid grid-cols-[38%_50%]">
              <label className="text-center text-[#13490A] font-bold text-base">
                Expiry Date
              </label>
              <input
                type="text"
                className="bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center"
                onChange={onChangeExpiryDate}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductAdd;

import React, { useState } from "react";
import CSVReader from "../CSVUpload/CSVUpload";
import { toast } from "react-toastify";

const IrrigationTableAdmin = () => {
  const [crop , setCrop] = useState("");
  const [component , setComponent] = useState("");
  const [image , setImage] = useState("");
  const [solName, setSolName] = useState("");
  const [prodImg , setProdImage] = useState("");
  const [cost , setCost] = useState("");
  const [desc , setDesc] = useState("");
  const [loading , setLoading] = useState(false);
 
  const handleSubmitBtn = async () =>{
    try{
      setLoading(true);
      const res = await fetch(process.env.REACT_APP_BACKEND_URL + 'crop/irrigation/role-admin/add/',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization : 'Bearer ' + localStorage.getItem('authToken'),
        },
        body: JSON.stringify({
          localName:crop,
          scientificName:crop ,
          component,
          image,
          description:desc,
          solutions:[
            {
              name:solName,
              prodImg : prodImg,
              cost
            }
          ]
      })
    }
      )
      const data = await res.json();
      if(data.crop){
        toast.success("FAQ added successfully",{
          position: toast.POSITION.TOP_RIGHT,
        })
      }
      else{
        toast.error("FAQ not added",{
          position: toast.POSITION.TOP_RIGHT,
        })
      }
  }
    catch(err:any){
      console.log(err);
      toast.error(err.message,{
        position: toast.POSITION.TOP_RIGHT,
      })
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <>
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
              onChange={(e)=>{
                setCrop(e.target.value)
              }}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Component
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Category"
              onChange={(e)=>{
                setComponent(e.target.value)
              }}
            ></textarea>
          </div>
        </div>{" "}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
            >
              Crop Irrigation Image Link
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Solution Image Link"
              onChange={(e)=>{
                setImage(e.target.value)
              }
              }
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
              placeholder="Name"
              onChange={(e)=>{
                setSolName(e.target.value)
              }}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            {/* <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Image Link
            </label> */}
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Solution Image Link"
              onChange={(e)=>{
                setProdImage(e.target.value)
              }
              }
            ></textarea>
          </div>
        </div>{" "}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            {/* <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Solution-cost
            </label> */}
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Solution Cost"
              onChange={(e)=>{
                setCost(e.target.value)
              }
              }
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
              onChange={(e)=>{
                setDesc(e.target.value)
              }
              }
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
          onClick={handleSubmitBtn}
        >
          {
            loading ?
            `Loading....`
            :
            `Submit`
          }
        </button>
        OR
        <CSVReader data="irrigation"/>
        <a download="irrigation.csv" href="../../CSVFiles/irrigation.csv">
                  <button className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin">
                    Download CSV
                  </button>
                </a>
      </div>
    </>
  );
};

export default IrrigationTableAdmin;

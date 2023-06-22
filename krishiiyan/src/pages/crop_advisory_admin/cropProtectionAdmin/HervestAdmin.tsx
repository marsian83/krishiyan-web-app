import React, { useState } from "react";
import { toast } from "react-toastify";
import CSVReader from "../../CSVUpload/CSVUpload";

const HervestAdmin = () => {
  const [crop, setCrop] = useState<any>();
  const [maturity , setMaturity] = useState<any>();
  const [index , setIndex] = useState<any>();
  const [avgYield , setAvgYield] = useState<any>(0);
  const [condition , setCondition] = useState<any>();
  const [losses , setLosses] = useState<any>();
  const [prevent , setPrevent] = useState<any>();
  const [image1 , setImage1] = useState<any>("");
  const [image2 , setImage2] = useState<any>("");
  const [image3 , setImage3] = useState<any>("");
  const [image4 , setImage4] = useState<any>("");
  const [loading , setLoading] = useState<any>(false);

  const handleSubmitHarvest = async () => {
    setLoading(true);
    try{
      if(!crop || !maturity || !index || !avgYield || !condition || !losses || !prevent || !image1 || !image2 || !image3 || !image4){
        toast.error('Please fill all the fields',{
          position:toast.POSITION.TOP_CENTER
        })
        return
      }
      const body = {
        localName : crop,
        scientificName : crop,
        newHarvest: {
          Physiological : maturity,
          index : index,
          Average : avgYield,
          Conditions_during : condition,
          Post_Harvest : losses,
          prevent : prevent,
          images : [image1 , image2 , image3 , image4]
        }
      }
      const res = await fetch(process.env.REACT_APP_BACKEND_URL + 'crop/harvest/role-admin/add',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          Authorization: 'Bearer '+ localStorage.getItem('authToken')
        },
        body:JSON.stringify(body)
      })
      const data = await res.json()
      if(data.crop){
        toast.success('Harvest added successfully',{
          position:toast.POSITION.TOP_RIGHT
        })
      }
      else{
        console.log(data)
        toast.error(data.msg,{
          position:toast.POSITION.TOP_RIGHT
        })
      }
    }
    catch(err:any){
      console.log(err)
      toast.error(err.message,{
        position:toast.POSITION.TOP_RIGHT
      })
    }
    finally{
      setLoading(false)
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
              onChange={(e) => setCrop(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Physiological Maturity key
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Physiological Maturity key"
              onChange={(e) => setMaturity(e.target.value)}
            ></textarea>
          </div>
        </div>{" "}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Harvest index
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Harvest index"
              onChange={(e) => setIndex(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Average yield
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Average yield"
              onChange={(e) => setAvgYield(e.target.value)}
            ></textarea>
          </div>
        </div>{" "}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Condition during harvest
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Condition during harvest"
              onChange={(e) => setCondition(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Post harvest losses caused by
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className=" bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 h-24"
              //   onChange={onChangeArea}
              id="inline-password"
              maxLength={50}
              placeholder="Post harvest losses caused by"
              onChange={(e) => setLosses(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              How to prevent
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className=" bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 h-24"
              //   onChange={onChangeArea}
              id="inline-password"
              maxLength={50}
              placeholder="How to prevent"
              onChange={(e) => setPrevent(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Image-1
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              //   onChange={onChangeArea}
              id="inline-password"
              maxLength={50}
              placeholder="Image 1 Link"
              onChange={(e) => setImage1(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Image-2
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              //   onChange={onChangeArea}
              id="inline-password"
              maxLength={50}
              placeholder="Image 2 Link"
              onChange={(e) => setImage2(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Image-3
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              //   onChange={onChangeArea}
              id="inline-password"
              maxLength={50}
              placeholder="Image 3 Link"
              onChange={(e) => setImage3(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Image-4
            </label>
          </div>
          <div className="sm:w-2/3">
            <textarea
              className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              //   onChange={onChangeArea}
              id="inline-password"
              maxLength={50}
              placeholder="Image 4 Link"
              onChange={(e) => setImage4(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
          onClick={handleSubmitHarvest}
        >
          {
            loading ? 
            `Loading....`
            :
            `Add Harvest`
          }
        </button>
        OR
        <CSVReader/>
      </div>
    </>
  );
};

export default HervestAdmin;

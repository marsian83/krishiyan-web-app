import React, { useEffect, useState } from "react";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";

const SupportQury = () => {
  const [farmerID, setFarmerID] = useState<any>("");
  const [farmerDetail, setFarmerDetail] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState<any>();

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

  const onChangeQuery = (e: any) => {
    setQuery(e.target.value);
  };

  const onSubmitHandler = async () => {
    const [err, res] = await Api.createFarmerQuery(farmerDetail?._id, query);
    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res) {
      toast.success(" Query created!", {
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
    <div className="w-full max-w-lg mt-10 mb-5 ml-80">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="text-[#13490A] font-extrabold text-sm mx-5">
            Query
          </label>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-2/3">
          <textarea
            className="  bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 h-36"
            onChange={onChangeQuery}
            id="inline-password"
            maxLength={30}
            placeholder="Maximum Of 30 Characters"
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

export default SupportQury;

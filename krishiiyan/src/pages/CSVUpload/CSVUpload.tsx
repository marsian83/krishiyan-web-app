import { Textarea } from "@material-tailwind/react";
import { TextField } from "@material-ui/core";
import { Autocomplete, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";

const CSVUpload = () => {
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

  return (
    <>
      <div className="flex flex-col items-center justify-center">
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

export default CSVUpload;

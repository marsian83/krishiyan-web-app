import React, { useState, useEffect } from "react";
import Header from "../../Components/layouts/Header";
import { Box, Checkbox } from "@mui/material";
import { Input } from "@material-tailwind/react";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Components/themes/Loader";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { log } from "console";
import OTPVerification from "./OTPVerification";
import Popup from "../../Components/layouts/PopUp";

const PlantationOptions = [
  {
    value: "ORGANIC",
  },
  {
    value: "In Organic",
  },
  {
    value: "BOTH",
  },
];
const PlantationOption = [
  { label: "Good", value: 1 },
  { label: "Average", value: 0.5 },
  { label: "Excellent", value: 1.5 },
];

const PlantationType = [
  {
    value: "Organic",
  },
  {
    value: "In Organic",
  },
  {
    value: "Both",
  },
];

const NewRegistration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState<any>();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [street, setStreet] = useState("");
  const [mobileIsWhatsapp, setMobileIsWhatsapp] = useState(false);
  const [totalLandArea, setTotalLandArea] = useState("");
  const [dealer_farmer_relation, setDealer_farmer_relation] = useState("");
  const [plantation_type, setPlantation_type] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkphone, setCheckPhone] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const [loading, setLoading] = useState(false);

  const onChangeName = (e: any) => {
    setName(e.target.value);
  };
  const onChangePhone = async (e: any) => {
    const Phone = e.target.value;
    setPhoneNumber(Phone);
    console.log(Phone);
    console.log(checkphone);
    console.log(Phone.length);
    if (Phone.length === 10) {
      console.log("check function entered");
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/farmers/check-farmer/${Phone}`
      );

      const data = await response.json();
      console.log("function called", data);
      if (data?.exists == false) {
        setCheckPhone(true);
        console.log("check of data ", checkphone);
      } else {
        setCheckPhone(false);
        setPhoneNumber("");

        toast.error("Farmer Already Exists! Enter new mobile Number", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  const [messageSent, setMessageSent] = useState(false);

  const onChangeZip = async (e: any) => {
    const zipCode = e.target.value;
    setZip(zipCode);
    console.log(zipCode);
  };

  const onChangeStreet = (e: any) => {
    setStreet(e.target.value);
  };
  const onChangeIsWhatsapp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMobileIsWhatsapp(event.target.checked);
  };

  const onChangeTotalLandArea = (e: any) => {
    setTotalLandArea(e.target.value);
  };
  const onChangeDealerFarmerRel = (e: any, label: any) => {
    setDealer_farmer_relation(label.value);
  };
  const onChangePlantationType = (e: any, value: any) => {
    setPlantation_type(value.value);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    registerfarer();
  };

  //Get farmer location
  useEffect(() => {
    async function getLoc() {
      if (zip.length > 5) {
        setLoading(true);
        const [err, res] = await Api.getFarmerLocation(zip);
        if (err) {
          toast.error(err.data, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        if (res) {
          let state = res.data.PostOffice.map((o: any) => o?.State);
          let city = res.data.PostOffice.map((o: any) => o?.District);
          setState(state[0]);
          setCity(city[0]);
        }
        setLoading(false);
      }
    }
    getLoc();
  }, [zip]);
  const registerfarer = async () => {
    const registrationData = {
      name,
      mobile: phoneNumber,
      state,
      city,
      zip,
      street,
      mobileIsWhatsapp,
      totalLandArea,
      dealer_farmer_relation,
      plantation_type,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/farmers/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registrationData),
        }
      );

      if (response.ok) {
        console.log("response done ", response);
        toast.success("Farmer Registered Successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        window.location.reload();
        setPhoneNumber("");
        setName("");
        setMobileIsWhatsapp(false);
        setZip("");
        setStreet("");
        setTotalLandArea("");
        setDealer_farmer_relation("");
        setPlantation_type("");
      } else {
        console.log("response else", response);
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
    }
  };

  const onSubmitHandler = async () => {
    if (checkphone) {
      if (
        state === "" ||
        (state === undefined && city === "") ||
        city === undefined
      ) {
        toast.error("Please enter valid Pincode", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } else {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/sendsms`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ phoneNumber }),
            }
          );

          if (response.ok) {
            setMessageSent(true);
            handleOpen();
          } else {
            // Handle error case
            setMessageSent(false);
          }
        } catch (error) {
          console.error("Error sending SMS:", error);
        }
      }
    }
  };

  const verifyMobile = async () => {
    const [err, res] = await Api.sendSMS(mobile);
    if (err) {
      toast.error(err.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res) {
      console.log({ res });
      toast.success(res?.data?.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    handleOpen();
  };
  return (
    <div>
      <Header title="Farmer" subtitle="New Registration" />
      <section className="mobile:pt-[42rem]">
        <div className="grid grid-cols-[25%_34%] items-center mt-6 mb-5 mobile:flex mobile:flex-col">
          <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
            Name
          </label>
          <input
            type="text"
            className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md pl-3"
            onChange={onChangeName}
          ></input>
        </div>
        <div className="grid grid-cols-[50%_50%] gap-x-16 mobile:flex mobile:flex-col">
          <div className=" grid grid-cols-[50%_34%] items-center mobile:flex mobile:flex-col">
            <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
              Mobile Number
            </label>
            <input
              type="text"
              className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md pl-3"
              value={phoneNumber}
              onChange={onChangePhone}
            ></input>
            {/* <div className="ml-50">
            <button
            onClick={verifyMobile}
            type="submit"
            className="bg-[#05AB2A] text-[#F3FFF1] w-[8vw] h-8  mt-3 shadow-[0px_4px_3px_rgba(0,0,0,0.25)] rounded text-sm font-thin"
          >
            Verify mobile
          </button>
            </div> */}
          </div>
          <div className="grid grid-cols-[35%_5%] justify-items-end items-center">
            <label className="text-[#13490A] font-roboto font-extrabold text-sm mx-10 ">
              Whatsapp
            </label>
            <Checkbox
              checked={mobileIsWhatsapp}
              onChange={onChangeIsWhatsapp}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>
        <img src="Images/Line18.png" className="my-5" alt="line" />
        <div className="grid grid-cols-[25%_26%] mobile:flex mobile:flex-col">
          <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
            Address
          </label>
          <div>
            <div className="w-73 mt-2">
              <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
                Pincode
                <input
                  onChange={onChangeZip}
                  className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md pl-3"
                ></input>
              </label>
            </div>
            <div className="flex w-73 mt-2 gap-2">
              <Input label="State" value={state} disabled />{" "}
              {loading ? <Loader /> : null}
            </div>
            <div className="flex w-73 mt-2 gap-2">
              <Input label="City" value={city} disabled />{" "}
              {loading ? <Loader /> : null}
            </div>
            <div className="w-73 mt-2">
              <Input label="Area" onChange={onChangeStreet} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[25%_34%] items-center mt-6 mb-5 mobile:flex mobile:flex-col">
          <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
            Total Farm Area(Acre)
          </label>
          <input
            type="text"
            className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md pl-3"
            onChange={onChangeTotalLandArea}
          ></input>
        </div>

        <div className="grid grid-cols-[25%_34%] items-center mt-6 mb-5 mobile:flex mobile:flex-col">
          <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
            Dealer Farmer Relationship
          </label>
          <Autocomplete
            onChange={onChangeDealerFarmerRel}
            id="plantation-select"
            sx={{ width: 340 }}
            options={PlantationOption}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose Dealer Farmer Relation"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
          {/* <input
            type="text"
            className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
            onChange={onChangeDealerFarmerRel}
          ></input> */}
        </div>

        <div className="grid grid-cols-[25%_34%] items-center mt-6 mb-5 mobile:flex mobile:flex-col">
          <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
            Type
          </label>
          <Autocomplete
            onChange={onChangePlantationType}
            id="plantation-select"
            sx={{ width: 340 }}
            options={PlantationOptions}
            autoHighlight
            getOptionLabel={(option) => option.value}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose Type"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
        </div>
        <div className="grid grid-cols-[38%_27%] w-[80%] lg:w-[88%] xl:w-[78%] 2xl:w-[65%]">
          <div className=""></div>
          <button
            onClick={onSubmitHandler}
            type="submit"
            className="bg-[#05AB2A] text-[#F3FFF1] w-[8vw] h-8  mt-3 shadow-[0px_4px_3px_rgba(0,0,0,0.25)] rounded text-sm font-thin mobile:w-max"
          >
            Submit
          </button>
        </div>
      </section>
      <OTPVerification
        open={open}
        handleClose={handleClose}
        Phone={phoneNumber}
      />
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default NewRegistration;

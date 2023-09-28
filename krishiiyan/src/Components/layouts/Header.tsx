import React, { useState } from "react";
import Weather from "../../pages/farmer/Weather";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Popup from "../../Components/layouts/PopUp";

const Header = (props: any) => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const navigate = useNavigate();
  let DealerName = localStorage.getItem("dealerName");
  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
    window.location.reload();
  };

  return (
    <header className="bg-[#F3FFF1] w-full xl:h-[14vh] flex flex-col xl:flex-row items-center rounded-2xl shadow-md">
      <div className="text-[#13490A] text-center font-roboto font-black text-lg xl:text-base leading-7 mt-4 p-2">
        <h1>{props?.title}</h1>
        <h1>{props?.subtitle}</h1>
      </div>
      <div className="text-[#13490A] text-center font-roboto mt-4 p-2">
        <Weather />
      </div>
      <div className="flex items-center justify-center xl:justify-end font-roboto p-2">
        <div className="flex items-center gap-3">
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/2.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <div className="text-[#000000] font-normal text-xs xl:text-sm">
            {DealerName}
          </div>
          <Button
            variant="contained"
            onClick={logout}
            sx={{ backgroundColor: "#05AB2A" }}
          >
            <Icon
              icon="material-symbols:logout"
              height={30}
              width={30}
              // color="red"
            />
          </Button>
          <button
            className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-green-200"
            onClick={openPopup}
          >
            <div className="flex flex-row">
              <img
                src="Images\soyabean.jpg"
                alt="WhatsApp"
                className="w-6 h-6"
              />
              <p> Today's Deal</p>
            </div>
          </button>
        </div>
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </header>
  );
};

export default Header;

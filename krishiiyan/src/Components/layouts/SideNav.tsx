import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

const SideNav = ({ menu, submenu }: { menu: string; submenu: string }) => {
  const [pos, setPos] = useState(true);
  const [crop, setCrop] = useState(false);
  const [farm, setFarm] = useState(false);
  const [manage, setManage] = useState(false);
  const [help, setHelp] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [Heading, setHeading] = useState("");
  const [content, setContent] = useState<any>();
  let navigate = useNavigate();
  const [weather, setWeather] = useState<any>({});

  const api = {
    key: "72b05fdfa25a691624fb032c0b0aa2ec",
    base: "https://api.openweathermap.org/data/2.5/weather?",
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position: any) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      fetch(`${api.base}lat=${lat}&lon=${long}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        });
    });
  }, []);
  //was  for heading
  useEffect(() => {
    if (pos === true) {
    } else if (crop === true) {
    } else if (farm === true) {
    } else if (manage === true) {
    } else if (help === true) {
    }
  }, [pos, crop, farm, manage, help]);

  useEffect(() => {
    switch (menu) {
      case "pos":
        posClick();
        break;
      case "crop_advisory":
        cropClick();
        break;
      case "frm":
        farmClick();
        break;
      case "management":
        manageClick();
        break;
      case "help":
        helpClick();
        break;
      case "crop_advisory":
        helpClick();
        break;
    }
  }, [menu, submenu]);

  const posClick = () => {
    // navigate("/");
    setPos(true);
    setCrop(false);
    setFarm(false);
    setManage(false);
    setHelp(false);
  };
  const cropClick = () => {
    // navigate("/crop_library");
    setPos(false);
    setCrop(true);
    setFarm(false);
    setManage(false);
    setHelp(false);
  };
  const farmClick = () => {
    // navigate(" /dashboard");
    setPos(false);
    setCrop(false);
    setFarm(true);
    setManage(false);
    setHelp(false);
  };
  const manageClick = () => {
    // navigate("/manage_accounting");
    setPos(false);
    setCrop(false);
    setFarm(false);
    setManage(true);
    setHelp(false);
  };
  const helpClick = () => {
    // navigate("/problem");
    setPos(false);
    setCrop(false);
    setFarm(false);
    setManage(false);
    setHelp(true);
  };

  return (
    <div className="flex">
      <nav className="bg-[#C6EDC0] w-[45%] lg:w-[9vw] xl:w-[45%] flex flex-col items-center  h-full">
        <img
          src="Images/logo.png"
          alt="Ellipse"
          className="mb-[50%] my-5 lg:w-10 xl:w-20"
        />
        <ul className="text-center text-sm flex flex-col items-center gap-y-3">
          <li
            onClick={posClick}
            className={`text-[#13490A] font-semibold font-roboto text-[20px] cursor-pointer px-7 lg:px-5 xl:px-7 py-2 rounded-lg ${
              pos === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
            }`}
          >
            Pos
          </li>
          <li
            onClick={cropClick}
            className={`text-[#13490A] font-semibold font-roboto text-[20px] cursor-pointer px-0.5 py-2 rounded-lg ${
              crop === true ? "bg-[#526D4E] mix-blend-hard-light px-1" : ""
            }`}
          >
            Crop Advisory
          </li>
          <li
            onClick={farmClick}
            className={`text-[#13490A] font-semibold font-roboto text-[20px] cursor-pointer px-3 py-2 rounded-lg ${
              farm === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
            }`}
          >
            FRM
          </li>
          <li
            onClick={manageClick}
            className={`text-[#13490A] font-semibold font-roboto text-[20px] cursor-pointer px-0.5 py-2 rounded-lg ${
              manage === true ? "bg-[#526D4E] mix-blend-hard-light px-1" : ""
            }`}
          >
            Management
          </li>
          <li
            onClick={helpClick}
            className={`text-[#13490A] font-semibold font-roboto text-[20px] cursor-pointer px-5 py-2 rounded-lg ${
              help === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
            }`}
          >
            Help
          </li>
        </ul>
      </nav>
      <Menu
        Number="4"
        Heading={Heading}
        Address={weather?.name}
        pos={pos}
        crop={crop}
        farm={farm}
        manage={manage}
        help={help}
        submenu={submenu}
      />
    </div>
  );
};

export default SideNav;

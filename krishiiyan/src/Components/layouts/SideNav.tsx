import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

const SideNav = () => {
  const [pos, setPos] = useState(true);
  const [crop, setCrop] = useState(false);
  const [farm, setFarm] = useState(false);
  const [manage, setManage] = useState(false);
  const [help, setHelp] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [Heading, setHeading] = useState("");

  const [content, setContent] = useState<any>();
  // let navigate = useNavigate();

  useEffect(() => {
    if (pos === true) {
      setHeading("Krishiyan Clinic");
    } else if (crop === true) {
      setHeading("KrishiYan");
    } else if (farm === true) {
      setHeading("KrishiYan");
    } else if (manage === true) {
      setHeading("KrishiYan");
    } else if (help === true) {
      setHeading("Krishiyan Clinic");
    }
  }, [pos, crop, farm, manage, help]);

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
    // navigate("/dashboard");
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
      <nav className="bg-[#C6EDC0] w-[45%] lg:w-[9vw] xl:w-[45%] flex flex-col items-center h-screen h-full">
        <img
          src="Images/Ellipse 1.png"
          alt="Ellipse"
          className="mb-[50%] my-5 lg:w-10 xl:w-14"
        />
        <ul className="text-center text-sm flex flex-col items-center gap-y-3">
          <li
            onClick={posClick}
            className={`text-[#13490A] font-bold font-roboto text-xs cursor-pointer px-7 lg:px-5 xl:px-7 py-2 rounded-lg ${
              pos === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
            }`}
          >
            Pos
          </li>
          <li
            onClick={cropClick}
            className={`text-[#13490A] font-bold font-roboto text-xs cursor-pointer px-0.5 py-2 rounded-lg ${
              crop === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
            }`}
          >
            Crop Advisory
          </li>
          <li
            onClick={farmClick}
            className={`text-[#13490A] font-bold font-roboto text-xs cursor-pointer px-3 py-2 rounded-lg ${
              farm === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
            }`}
          >
            FRM
          </li>
          <li
            onClick={manageClick}
            className={`text-[#13490A] font-bold font-roboto text-xs cursor-pointer px-0.5 py-2 rounded-lg ${
              manage === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
            }`}
          >
            Management
          </li>
          <li
            onClick={helpClick}
            className={`text-[#13490A] font-bold font-roboto text-xs cursor-pointer px-5 py-2 rounded-lg ${
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
        Address="Pune, Maharashtra"
        pos={pos}
        crop={crop}
        farm={farm}
        manage={manage}
        help={help}
      />
    </div>
  );
};

export default SideNav;

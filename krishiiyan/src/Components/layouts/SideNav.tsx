import React, { useEffect, useState } from "react";
import Menu from "./Menu";
const SideNav = (props: any) => {

  const [pos, setPos] = useState(true);
  const [crop, setCrop] = useState(false);
  const [farm, setFarm] = useState(false);
  const [manage, setManage] = useState(false);
  const [help, setHelp] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [Heading, setHeading] = useState('')

  const [content, setContent] = useState<any>();

  useEffect(() => {
    if (pos === true) {
      setHeading('Krishiyan Clinic')
    }
    else if (crop === true) {
      setHeading('KrishiYan')
    }
    else if (farm === true) {
      setHeading('KrishiYan')
    }
    else if (manage === true) {
      setHeading('KrishiYan')
    }
    else if (help === true) {
      setHeading('Krishiyan Clinic')
    }
  }, [pos, crop, farm, manage, help])


  //   console.log("Content________",content);

  const posClick = () => {
    setPos(true);
    setCrop(false);
    setFarm(false);
    setManage(false);
    setHelp(false);
    setShowMenu(true);
  };
  const cropClick = () => {
    setPos(false);
    setCrop(true);
    setFarm(false);
    setManage(false);
    setHelp(false);
  };
  const farmClick = () => {
    setPos(false);
    setCrop(false);
    setFarm(true);
    setManage(false);
    setHelp(false);
  };
  const manageClick = () => {
    setPos(false);
    setCrop(false);
    setFarm(false);
    setManage(true);
    setHelp(false);
  };
  const helpClick = () => {
    setPos(false);
    setCrop(false);
    setFarm(false);
    setManage(false);
    setHelp(true);
  };

  const getContentToShowState = (
    sale: any,
    inventory: any,
    report: any,
    purchase: any,
    accounting: any,
    production: any,
    calendar: any,
    health: any,
    calculator: any,
    market: any,
    dashboard: any,
    farmPurchase: any,
    cultivation: any,
    credit: any,
    support: any,
    newRegistration: any,
    problem: any,
    expert: any,
    guide: any
  ) => {
    const contentObj = {
      sale: sale,
      inventory: inventory,
      report: report,
      purchase: purchase,
      accounting: accounting,

      production: production,
      calendar: calendar,
      health: health,
      calculator: calculator,
      market: market,

      dashboard: dashboard,
      farmPurchase: farmPurchase,
      cultivation: cultivation,
      credit: credit,
      support: support,
      newRegistration: newRegistration,

      problem: problem,
      expert: expert,
      guide: guide
    };
    setContent(contentObj);
  };

  useEffect(() => {
    props?.getContentToShow(content);
  }, [content]);

  return (
    <div className="flex">
      <nav className='bg-[#C6EDC0] w-[45%] lg:w-[9vw] xl:w-[45%] flex flex-col items-center h-screen'>
        <img src="Images/Ellipse 1.png" alt="Ellipse" className="mb-[50%] my-5 lg:w-10 xl:w-14" />
        <ul className="text-center text-sm flex flex-col items-center gap-y-3">
          <li
            onClick={posClick}
            className={`text-[#13490A] font-bold font-roboto text-xs cursor-pointer px-7 lg:px-5 xl:px-7 py-2 rounded-lg ${pos === true ? "bg-[#526D4E] mix-blend-hard-light" : ""}`}>
            PoS
          </li>
          <li
            onClick={cropClick}
            className={`text-[#13490A] font-bold font-roboto text-xs cursor-pointer px-0.5 py-2 rounded-lg ${crop === true ? "bg-[#526D4E] mix-blend-hard-light" : ""}`}>
            Crop Advisory
          </li>
          <li
            onClick={farmClick}
            className={`text-[#13490A] font-bold font-roboto text-xs cursor-pointer px-3 py-2 rounded-lg ${farm === true ? "bg-[#526D4E] mix-blend-hard-light" : ""}`}>
            Farmer
          </li>
          <li
            onClick={manageClick}
            className={`text-[#13490A] font-bold font-roboto text-xs cursor-pointer px-0.5 py-2 rounded-lg ${manage === true ? "bg-[#526D4E] mix-blend-hard-light" : ""}`}>
            Management
          </li>
          <li
            onClick={helpClick}
            className={`text-[#13490A] font-bold font-roboto text-xs cursor-pointer px-5 py-2 rounded-lg ${help === true ? "bg-[#526D4E] mix-blend-hard-light" : ""}`}>
            Help
          </li>
        </ul>
      </nav>
      <Menu
        Number="4"
        Heading={Heading}
        Address="Pune, Maharashtra"
        Date="17,August,2022"
        pos={pos}
        crop={crop}
        farm={farm}
        manage={manage}
        help={help}
        getContentToShowState={getContentToShowState}
      />
    </div>
  );
};

export default SideNav;

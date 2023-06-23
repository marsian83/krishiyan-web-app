import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = (props: any) => {
  let navigate = useNavigate();

  //Pos state
  const [sale, setSale] = useState(true);
  const [inventory, setInventory] = useState(false);
  const [report, setReport] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [accounting, setAccounting] = useState(false);

  //Crop Advisary state
  const [production, setProduction] = useState(true);
  const [calendar, setCalendar] = useState(false);
  const [health, setHealth] = useState(false);
  const [calculator, setCalculator] = useState(false);
  const [market, setMarket] = useState(false);
  const [addcrop, setAddCrop] = useState(false);

  //Farmer state
  const [dashboard, setDashboard] = useState(true);
  const [farmPurchase, setFarmPurchase] = useState(false);
  const [cultivation, setCultivation] = useState(false);
  const [credit, setCredit] = useState(false);
  const [support, setSupport] = useState(false);
  const [newRegistration, setNewRegistration] = useState(false);

  //Management state
  const [mgmtDashboard, setMgmtDashboard] = useState(false);

  //Help state
  const [problem, setProblem] = useState(true);
  const [expert, setExpert] = useState(false);
  const [guide, setGuide] = useState(false);

  //OnClick Handler
  // Pos

  useEffect(() => {
    switch (props.submenu) {
      case "sale":
        onClickSale();
        break;
      case "inventory":
        onClickInventory();
        break;
      case "report":
        onClickReport();
        break;
      case "purchase":
        onClickPurchase();
        break;
      case "accounting":
        onClickAccounting();
        break;
      case "add_crop":
        onClickAddCrop();
        break;
      case "crop_library":
        onClickProduction();
        break;
      case "crop_calendar":
        onClickCalendar();
        break;
      case "crop_health":
        onClickHealth();
        break;
      case "fertical":
        onClickCalculator();
        break;
      case "mandi_prices":
        onClickMarket();
        break;
      case "dashboard":
        onClickDashboard();
        break;
      case "farm_purchase":
        onClickFarmPurchase();
        break;
      case "cultivation":
        onClickCultivation();
        break;
      case "credit":
        onClickCredit();
        break;
      case "support":
        onClickSupport();
        break;
      case "new_registration":
        onClickNewRegistration();
        break;
      case "manage_accounting":
        onClickManageAccounting();
        break;
      case "problem":
        onClickProblem();
        break;
      case "expert":
        onClickExpert();
        break;
      case "guide":
        onClickGuide();
        break;
    }
  }, [props.submenu]);

  const onClickSale = () => {
    setSale(true);
    navigate("/");
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set crop advisary state false
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set farmer state false
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  const onClickInventory = () => {
    navigate("/inventory");
    setSale(false);
    setInventory(true);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set crop advisary state false
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set farmer state false
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  const onClickReport = () => {
    navigate("/report");
    setSale(false);
    setInventory(false);
    setReport(true);
    setPurchase(false);
    setAccounting(false);
    //set crop advisary state false
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set farmer state false
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  const onClickPurchase = () => {
    navigate("/purchase");
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(true);
    setAccounting(false);
    //set crop advisary state false
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set farmer state false
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  const onClickAccounting = () => {
    navigate("/accounting");
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(true);
    // set crop advisary state false
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set farmer state false
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  //Crop Advisary
  const onClickAddCrop = () => {
    navigate("/add_crop");
    setAddCrop(true);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set farmer state false
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  //Crop Advisary
  const onClickProduction = () => {
    navigate("/crop_library");
    setAddCrop(false);
    setProduction(true);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set farmer state false
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  const onClickCalendar = () => {
    navigate("/crop_calendar");
    setAddCrop(false);
    setProduction(false);
    setCalendar(true);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set farmer state false
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  const onClickHealth = () => {
    navigate("/crop_health");
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(true);
    setCalculator(false);
    setMarket(false);
    //set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set farmer state false
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  const onClickCalculator = () => {
    setAddCrop(false);
    navigate("/fertical");
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(true);
    setMarket(false);
    //set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set farmer state false
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  const onClickMarket = () => {
    navigate("/mandi_prices");
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(true);
    //set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set farmer state false
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  //Farmer
  const onClickDashboard = () => {
    navigate("/dashboard");
    setDashboard(true);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
    //set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set crop advisary state false
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  const onClickFarmPurchase = () => {
    navigate("/farm_purchase");
    setDashboard(false);
    setFarmPurchase(true);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
    //set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set crop advisary state false
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  const onClickCultivation = () => {
    navigate("/cultivation");
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(true);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
    //set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set crop advisary state false
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };
  const onClickCredit = () => {
    navigate("/credit");
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(true);
    setSupport(false);
    setNewRegistration(false);
    //set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set crop advisary state false
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };
  const onClickSupport = () => {
    navigate("/support");
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(true);
    setNewRegistration(false);
    //set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set crop advisary state false
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  const onClickNewRegistration = () => {
    navigate("/new_registration");
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(true);
    // set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set crop advisary state false
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set help state false
    setProblem(false);
    setExpert(false);
    setGuide(false);
  };

  //Management
  const onClickManageAccounting = () => {
    navigate("/accounting");
  };

  //Help
  const onClickProblem = () => {
    navigate("/problem");
    setProblem(true);
    setExpert(false);
    setGuide(false);
    //set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set crop advisary state false
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set farmer state false
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
  };
  const onClickExpert = () => {
    navigate("/expert");
    setProblem(false);
    setExpert(true);
    setGuide(false);
    //set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set crop advisary state false
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set farmer state false
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
  };
  const onClickGuide = () => {
    navigate("/guide");
    setProblem(false);
    setExpert(false);
    setGuide(true);
    //set pos state false
    setSale(false);
    setInventory(false);
    setReport(false);
    setPurchase(false);
    setAccounting(false);
    //set crop advisary state false
    setAddCrop(false);
    setProduction(false);
    setCalendar(false);
    setHealth(false);
    setCalculator(false);
    setMarket(false);
    //set farmer state false
    setDashboard(false);
    setFarmPurchase(false);
    setCultivation(false);
    setCredit(false);
    setSupport(false);
    setNewRegistration(false);
  };

  // useEffect(() => {
  //   props.getContentToShowState(
  //     sale,
  //     inventory,
  //     report,
  //     purchase,
  //     accounting,

  //     production,
  //     calendar,
  //     health,
  //     calculator,
  //     market,

  //     dashboard,
  //     farmPurchase,
  //     cultivation,
  //     credit,
  //     support,
  //     newRegistration,

  //     problem,
  //     expert,
  //     guide
  //   );
  // }, [
  //   sale,
  //   inventory,
  //   report,
  //   purchase,
  //   accounting,
  //   production,
  //   calendar,
  //   health,
  //   calculator,
  //   market,
  //   dashboard,
  //   farmPurchase,
  //   cultivation,
  //   credit,
  //   support,
  //   newRegistration,
  //   problem,
  //   expert,
  //   guide,
  // ]);

  return (
    <>
      <menu className="bg-[#F3FFF1] w-[55%] lg:w-[12vw] xl:w-[55%] flex flex-col items-center h-screen shadow-[4px_4px_20px_rgba(0,0,0,0.1)] h-full">
        <h2
          className="text-[#13490A] text-md xl:text-lg font-roboto font-extrabold my-[4%] leading-5 text-right
        drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        >
          {props.Heading}
        </h2>
        <div className="absolute top-16">
          <p className="text-[#49190A] text-xs font-roboto font-extrabold text-center lg:tracking-tighter">
            {props.Address}
          </p>
          <p className="text-[#49190A] text-xs font-roboto font-extrabold text-center lg:tracking-tighter">
            {props.Date}
          </p>
        </div>

        {/* Menu Options */}

        {/* Pos */}
        <div className="absolute top-28">
          {props?.pos ? (
            <>
              <ul className="text-center text-sm flex flex-col items-center">
                <li
                  onClick={onClickSale}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    sale === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                  }`}
                >
                  Sale
                </li>
                <li
                  onClick={onClickInventory}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    inventory === true
                      ? "bg-[#526D4E] mix-blend-hard-light"
                      : ""
                  }`}
                >
                  Inventory
                </li>
                <li
                  onClick={onClickReport}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    report === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                  }`}
                >
                  Report
                </li>
                <li
                  onClick={onClickPurchase}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    purchase === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                  }`}
                >
                  Product
                </li>
                <li
                  onClick={onClickAccounting}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    accounting === true
                      ? "bg-[#526D4E] mix-blend-hard-light"
                      : ""
                  }`}
                >
                  Sales Statement
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}
          {/*  Crop Advisory */}
          {props?.crop ? (
            <>
              <ul className="text-center text-[13px] flex flex-col items-center">
                <li
                  onClick={onClickAddCrop}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    addcrop === true
                      ? "bg-[#526D4E] mix-blend-hard-light px-1"
                      : ""
                  }`}
                >
                  Add Crop
                </li>
                <li
                  onClick={onClickProduction}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    production === true
                      ? "bg-[#526D4E] mix-blend-hard-light"
                      : ""
                  }`}
                >
                  Crop Library
                </li>
                <li
                  onClick={onClickCalendar}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    calendar === true
                      ? "bg-[#526D4E] mix-blend-hard-light px-1"
                      : ""
                  }`}
                >
                  Crop Calendar
                </li>
                <li
                  onClick={onClickHealth}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    health === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                  }`}
                >
                  Crop Health
                </li>
                <li
                  onClick={onClickCalculator}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    calculator === true
                      ? "bg-[#526D4E] mix-blend-hard-light"
                      : ""
                  }`}
                >
                  FertiCal
                </li>
                <li
                  onClick={onClickMarket}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    market === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                  }`}
                >
                  Mandi Prices
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}
          {/*  Farmer */}
          {props?.farm ? (
            <>
              <ul className="text-center text-[13px] flex flex-col items-center">
                <li
                  onClick={onClickDashboard}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    dashboard === true
                      ? "bg-[#526D4E] mix-blend-hard-light"
                      : ""
                  }`}
                >
                  Dashboard
                </li>
                <li
                  onClick={onClickFarmPurchase}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    farmPurchase === true
                      ? "bg-[#526D4E] mix-blend-hard-light"
                      : ""
                  }`}
                >
                  Purchase
                </li>
                <li
                  onClick={onClickCultivation}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    cultivation === true
                      ? "bg-[#526D4E] mix-blend-hard-light"
                      : ""
                  }`}
                >
                  Cultivation
                </li>
                <li
                  onClick={onClickCredit}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    credit === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                  }`}
                >
                  Credit
                </li>
                <li
                  onClick={onClickSupport}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    support === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                  }`}
                >
                  Support
                </li>
                <li
                  onClick={onClickNewRegistration}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    newRegistration === true
                      ? "bg-[#526D4E] mix-blend-hard-light"
                      : ""
                  }`}
                >
                  New Registration
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}

          {/*  Management */}
          {props?.manage ? (
            <>
              <ul className="text-center text-[13px] flex flex-col items-center">
                <li
                  onClick={onClickManageAccounting}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    newRegistration === true
                      ? "bg-[#526D4E] mix-blend-hard-light"
                      : ""
                  }`}
                >
                  Manage Accounting
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}

          {/*  Help */}
          {props?.help ? (
            <>
              <ul className="text-center text-[13px] flex flex-col items-center">
                <li
                  onClick={onClickProblem}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    problem === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                  }`}
                >
                  Problem
                </li>
                <li
                  onClick={onClickExpert}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    expert === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                  }`}
                >
                  Expert
                </li>
                <li
                  onClick={onClickGuide}
                  className={`text-[#13490A] w-full font-semibold font-roboto text-[13px] cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                    guide === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                  }`}
                >
                  Guide
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}
        </div>
      </menu>
    </>
  );
};
export default Menu;

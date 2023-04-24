import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = (props: any) => {
  let navigate = useNavigate();

  const [sale, setSale] = useState(true);
  const [inventory, setInventory] = useState(false);
  const [report, setReport] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [accounting, setAccounting] = useState(false);

  //Crop Advisary state
  const [production, setProduction] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [health, setHealth] = useState(false);
  const [calculator, setCalculator] = useState(false);
  const [market, setMarket] = useState(false);

  //Farmer state
  const [dashboard, setDashboard] = useState(false);
  const [farmPurchase, setFarmPurchase] = useState(false);
  const [cultivation, setCultivation] = useState(false);
  const [credit, setCredit] = useState(false);
  const [support, setSupport] = useState(false);
  const [newRegistration, setNewRegistration] = useState(false);

  //Management state
  const [mgmtDashboard, setMgmtDashboard] = useState(false);

  //Help state
  const [problem, setProblem] = useState(false);
  const [expert, setExpert] = useState(false);
  const [guide, setGuide] = useState(false);

  // Pos
  const onClickSale = () => {
    // setSale(true);
    navigate("/");
  };

  const onClickInventory = () => {
    navigate("/inventory");
    // setInventory(true);
  };

  const onClickReport = () => {
    navigate("/report");
    // setReport(true);
  };

  const onClickPurchase = () => {
    navigate("/purchase");
    // setPurchase(true);
  };

  const onClickAccounting = () => {
    navigate("/accounting");
    // setAccounting(true);
  };

  //Crop Advisary
  const onClickProduction = () => {
    navigate("/crop_library");
    // setProduction(true);
  };

  const onClickCalendar = () => {
    navigate("/crop_calendar");
    // setCalendar(true);
  };

  const onClickHealth = () => {
    navigate("/crop_health");
    // setHealth(true);
  };

  const onClickCalculator = () => {
    navigate("/fertical");
    // setCalculator(true);
  };

  const onClickMarket = () => {
    navigate("/mandi_prices");
    // setMarket(true);
  };

  //Farmer
  const onClickDashboard = () => {
    navigate("/dashboard");
    // setDashboard(true);
  };

  const onClickFarmPurchase = () => {
    navigate("/farm_purchase");
    // setFarmPurchase(true);
  };

  const onClickCultivation = () => {
    navigate("/cultivation");
    // setCultivation(true);
  };
  const onClickCredit = () => {
    navigate("/credit");
    // setCredit(true);
  };
  const onClickSupport = () => {
    navigate("/support");
    // setSupport(true);
  };

  const onClickNewRegistration = () => {
    navigate("/new_registration");
    // setNewRegistration(true);
  };

  //Management
  const onClickManageAccounting = () => {
    navigate("/accounting");
  };

  //Help
  const onClickProblem = () => {
    navigate("/problem");
    // setProblem(true);
  };
  const onClickExpert = () => {
    navigate("/expert");
    // setExpert(true);
  };
  const onClickGuide = () => {
    navigate("/guide");
    // setGuide(true);
  };

  return (
    <menu className="bg-[#F3FFF1] w-[55%] lg:w-[12vw] xl:w-[55%] flex flex-col items-center h-screen shadow-[4px_4px_20px_rgba(0,0,0,0.1)]">
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
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  sale === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                }`}
              >
                Sale
              </li>
              <li
                onClick={onClickInventory}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  inventory === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                }`}
              >
                Inventory
              </li>
              <li
                onClick={onClickReport}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  report === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                }`}
              >
                Report
              </li>
              <li
                onClick={onClickPurchase}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  purchase === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                }`}
              >
                Purchase
              </li>
              <li
                onClick={onClickAccounting}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  accounting === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                }`}
              >
                Accounting
              </li>
            </ul>
          </>
        ) : (
          <></>
        )}
        {/*  Crop Advisory */}
        {props?.crop ? (
          <>
            <ul className="text-center text-sm flex flex-col items-center">
              <li
                onClick={onClickProduction}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  production === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                }`}
              >
                Crop Library
              </li>
              <li
                onClick={onClickCalendar}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  calendar === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                }`}
              >
                Crop Calendar
              </li>
              <li
                onClick={onClickHealth}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  health === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                }`}
              >
                Crop Health
              </li>
              <li
                onClick={onClickCalculator}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  calculator === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                }`}
              >
                FertiCal
              </li>
              <li
                onClick={onClickMarket}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
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
            <ul className="text-center text-sm flex flex-col items-center">
              <li
                onClick={onClickDashboard}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  dashboard === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                }`}
              >
                Dashboard
              </li>
              <li
                onClick={onClickFarmPurchase}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  farmPurchase === true
                    ? "bg-[#526D4E] mix-blend-hard-light"
                    : ""
                }`}
              >
                Purchase
              </li>
              <li
                onClick={onClickCultivation}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  cultivation === true
                    ? "bg-[#526D4E] mix-blend-hard-light"
                    : ""
                }`}
              >
                Cultivation
              </li>
              <li
                onClick={onClickCredit}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  credit === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                }`}
              >
                Credit
              </li>
              <li
                onClick={onClickSupport}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  support === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                }`}
              >
                Support
              </li>
              <li
                onClick={onClickNewRegistration}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
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
            <ul className="text-center text-sm flex flex-col items-center">
              <li
                onClick={onClickManageAccounting}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
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
            <ul className="text-center text-sm flex flex-col items-center">
              <li
                onClick={onClickProblem}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  problem === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                }`}
              >
                Problem
              </li>
              <li
                onClick={onClickExpert}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
                  expert === true ? "bg-[#526D4E] mix-blend-hard-light" : ""
                }`}
              >
                Expert
              </li>
              <li
                onClick={onClickGuide}
                className={`text-[#13490A] w-full font-bold font-roboto text-xs cursor-pointer my-1 px-0.5 py-2 rounded-lg ${
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
  );
};

export default Menu;

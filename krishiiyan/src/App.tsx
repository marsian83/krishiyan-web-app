import React, { useState } from "react";
import "./App.css";
import Header from "./Components/layouts/Header";
import SideNav from "./Components/layouts/SideNav";
import ContentToShow from "./pages/ContentToShow";
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Sale from "./pages/pos/Sale";
import Inventory from "./pages/pos/Inventory";
import Report from "./pages/pos/Report";
import Purchase from "./pages/pos/Purchase";
import Accounting from "./pages/pos/Accounting";
import CropLibrary from "./pages/crop_advisary/CropLibrary";
import CropCalendar from "./pages/crop_advisary/CropCalendar";
import CropHealth from "./pages/crop_advisary/CropHealth";
import FertiCal from "./pages/crop_advisary/FertiCal";
import MandiPrices from "./pages/crop_advisary/MandiPrices";
import Dashboard from "./pages/farmer/Dashboard";
import Cultivation from "./pages/farmer/Cultivation";
import Credit from "./pages/farmer/Credit";
import Support from "./pages/farmer/Support";
import NewRegistration from "./pages/farmer/NewRegistration";
import Problem from "./pages/help/Problem";
import Expert from "./pages/help/Expert";
import Guide from "./pages/help/Guide";
import ManageAccounting from "./pages/management/Accounting";
import ProductAdd from "./pages/pos/ProductAdd";

function App() {
  // const [content, setContent] = useState<any>()

  // const getContentToShow = (val: Object) => {
  //   setContent(val)
  // }
  return (
    // <div className="App font-roboto box-border m-0 p-0">
    //   <main className="h-screen w-screen grid grid-cols-[18%_auto]">
    //     <div className="">
    //       <SideNav getContentToShow={getContentToShow} />
    //     </div>
    //     <div className="">
    //       <ContentToShow content={content} />
    //       <BrowserRouter>
    //         <Routes>
    //           <Route path="/" element={<Sale />} />
    //           <Route path="/inventory" element={<Inventory />} />
    //           <Route path="/report" element={<Report />} />
    //           <Route path="/purchase" element={<Purchase />} />
    //           <Route path="/accounting" element={<Accounting />} />
    //           <Route path="/crop_library" element={<CropLibrary />} />
    //           <Route path="/crop_calendar" element={<CropCalendar />} />
    //           <Route path="/crop_health" element={<CropHealth />} />
    //           <Route path="/fertical" element={<FertiCal />} />
    //           <Route path="/mandi_prices" element={<MandiPrices />} />
    //           <Route path="/dashboard" element={<Dashboard />} />
    //           <Route path="/farm_purchase" element={<Purchase />} />
    //           <Route path="/cultivation" element={<Cultivation />} />
    //           <Route path="/credit" element={<Credit />} />
    //           <Route path="/support" element={<Support />} />
    //           <Route path="/new_registration" element={<NewRegistration />} />
    //           <Route path="/accounting" element={<ManageAccounting />} />
    //           <Route path="/problem" element={<Problem />} />
    //           <Route path="/expert" element={<Expert />} />
    //           <Route path="/guide" element={<Guide />} />
    //         </Routes>
    //       </BrowserRouter>
    //     </div>
    //   </main>
    // </div >
    <div className="App font-roboto box-border m-0 p-0">
      <main className="h-screen w-screen grid grid-cols-[18%_82%]">
        <SideNav />
        {/* <div className="bg-pink-200 flex "> */}
        <Routes>
          <Route path="/" element={<Sale />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/report" element={<Report />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/crop_library" element={<CropLibrary />} />
          <Route path="/crop_calendar" element={<CropCalendar />} />
          <Route path="/crop_health" element={<CropHealth />} />
          <Route path="/fertical" element={<FertiCal />} />
          <Route path="/mandi_prices" element={<MandiPrices />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/farm_purchase" element={<Purchase />} />
          <Route path="/cultivation" element={<Cultivation />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/support" element={<Support />} />
          <Route path="/new_registration" element={<NewRegistration />} />
          <Route path="/manage_accounting" element={<ManageAccounting />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/add-product" element={<ProductAdd />} />
        </Routes>
        {/* </div> */}
      </main>
    </div>
  );
}

export default App;

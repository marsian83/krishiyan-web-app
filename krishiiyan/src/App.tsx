import React from "react";
import "./App.css";
import Header from "./Components/layouts/Header";
import SideNav from "./Components/layouts/SideNav";
import ContentToShow from "./pages/ContentToShow";
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
import FPurchase from "./pages/farmer/Purchase";

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
        {/* <SideNav /> */}
        {/* <div className="bg-pink-200 flex "> */}
        <Routes>
          {/* <Route path="/" element={<Navigate to="/sale" replace />} /> */}
          <Route
            path="/"
            element={
              <>
                <SideNav menu={"pos"} submenu={"sale"} />
                <Sale />
              </>
            }
          />
          <Route
            path="/inventory"
            element={
              <>
                <SideNav menu={"pos"} submenu={"inventory"} />
                <Inventory />
              </>
            }
          />
          <Route
            path="/report"
            element={
              <>
                <SideNav menu={"pos"} submenu={"report"} />
                <Report />
              </>
            }
          />
          <Route
            path="/purchase"
            element={
              <>
                <SideNav menu={"pos"} submenu={"purchase"} />
                <Purchase />
              </>
            }
          />
          <Route
            path="/accounting"
            element={
              <>
                <SideNav menu={"pos"} submenu={"accounting"} />
                <Accounting />
              </>
            }
          />
          <Route
            path="/crop_library"
            element={
              <>
                <SideNav menu={"crop_advisory"} submenu={"crop_library"} />
                <CropLibrary />
              </>
            }
          />
          <Route
            path="/crop_calendar"
            element={
              <>
                <SideNav menu={"crop_advisory"} submenu={"crop_calendar"} />
                <CropCalendar />
              </>
            }
          />
          <Route
            path="/crop_health"
            element={
              <>
                <SideNav menu={"crop_advisory"} submenu={"crop_health"} />
                <CropHealth />
              </>
            }
          />
          <Route
            path="/fertical"
            element={
              <>
                <SideNav menu={"crop_advisory"} submenu={"fertical"} />
                <FertiCal />
              </>
            }
          />
          <Route
            path="/mandi_prices"
            element={
              <>
                <SideNav menu={"crop_advisory"} submenu={"mandi_prices"} />
                <MandiPrices />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <SideNav menu={"frm"} submenu={"dashboard"} />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/farm_purchase"
            element={
              <>
                <SideNav menu={"frm"} submenu={"farm_purchase"} />
                <FPurchase />
              </>
            }
          />
          <Route
            path="/cultivation"
            element={
              <>
                <SideNav menu={"frm"} submenu={"cultivation"} />
                <Cultivation />
              </>
            }
          />
          <Route
            path="/credit"
            element={
              <>
                <SideNav menu={"frm"} submenu={"credit"} />
                <Credit />
              </>
            }
          />
          <Route
            path="/support"
            element={
              <>
                <SideNav menu={"frm"} submenu={"support"} />
                <Support />
              </>
            }
          />
          <Route
            path="/new_registration"
            element={
              <>
                <SideNav menu={"frm"} submenu={"new_registration"} />
                <NewRegistration />
              </>
            }
          />
          <Route
            path="/manage_accounting"
            element={
              <>
                <SideNav menu={"management"} submenu={"manage_accounting"} />
                <ManageAccounting />
              </>
            }
          />
          <Route
            path="/problem"
            element={
              <>
                <SideNav menu={"help"} submenu={"problem"} />
                <Problem />
              </>
            }
          />
          <Route
            path="/expert"
            element={
              <>
                <SideNav menu={"help"} submenu={"expert"} />
                <Expert />
              </>
            }
          />
          <Route
            path="/guide"
            element={
              <>
                <SideNav menu={"help"} submenu={"guide"} />
                <Guide />
              </>
            }
          />
          {/* <Route
            path="/add-product"
            element={
              <>
                <SideNav menu={"crop_advisory"} submenu={"add-product"} />
                <ProductAdd />
              </>
            }
          /> */}
        </Routes>
        {/* </div> */}
      </main>
    </div>
  );
}

export default App;

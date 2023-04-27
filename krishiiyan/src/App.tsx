import "./App.css";
import SideNav from "./Components/layouts/SideNav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
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
import FPurchase from "./pages/farmer/Purchase";
import LoginPage from "./pages/Authentication/LoginPage";
import SignupPage from "./pages/Authentication/SignupPage";
import ProductBatches from "./pages/pos/ProductBatches";

const AuthGuard = () => {
  const auth = localStorage.getItem("authToken");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="App font-roboto box-border m-0 p-0">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<AuthGuard />}>
          <Route
            path="/"
            element={
              <>
                <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                  <SideNav menu={"pos"} submenu={"sale"} />
                  <Sale />
                </main>
              </>
            }
          />
          <Route
            path="/inventory"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"pos"} submenu={"inventory"} />
                <Inventory />
              </main>
            }
          />
          <Route
            path="/product-batches"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"pos"} submenu={"product-batches"} />
                <ProductBatches />
              </main>
            }
          />
          <Route
            path="/report"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"pos"} submenu={"report"} />
                <Report />
              </main>
            }
          />
          <Route
            path="/purchase"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"pos"} submenu={"purchase"} />
                <Purchase />
              </main>
            }
          />
          <Route
            path="/accounting"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"pos"} submenu={"accounting"} />
                <Accounting />
              </main>
            }
          />
          <Route
            path="/crop_library"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"crop_advisory"} submenu={"crop_library"} />
                <CropLibrary />
              </main>
            }
          />
          <Route
            path="/crop_calendar"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"crop_advisory"} submenu={"crop_calendar"} />
                <CropCalendar />
              </main>
            }
          />
          <Route
            path="/crop_health"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"crop_advisory"} submenu={"crop_health"} />
                <CropHealth />
              </main>
            }
          />
          <Route
            path="/fertical"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"crop_advisory"} submenu={"fertical"} />
                <FertiCal />
              </main>
            }
          />
          <Route
            path="/mandi_prices"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"crop_advisory"} submenu={"mandi_prices"} />
                <MandiPrices />
              </main>
            }
          />
          <Route
            path="/dashboard"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"frm"} submenu={"dashboard"} />
                <Dashboard />
              </main>
            }
          />
          <Route
            path="/farm_purchase"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"frm"} submenu={"farm_purchase"} />
                <FPurchase />
              </main>
            }
          />
          <Route
            path="/cultivation"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"frm"} submenu={"cultivation"} />
                <Cultivation />
              </main>
            }
          />
          <Route
            path="/credit"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"frm"} submenu={"credit"} />
                <Credit />
              </main>
            }
          />
          <Route
            path="/support"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"frm"} submenu={"support"} />
                <Support />
              </main>
            }
          />
          <Route
            path="/new_registration"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"frm"} submenu={"new_registration"} />
                <NewRegistration />
              </main>
            }
          />
          <Route
            path="/manage_accounting"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"management"} submenu={"manage_accounting"} />
                <ManageAccounting />
              </main>
            }
          />
          <Route
            path="/problem"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"help"} submenu={"problem"} />
                <Problem />
              </main>
            }
          />
          <Route
            path="/expert"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"help"} submenu={"expert"} />
                <Expert />
              </main>
            }
          />
          <Route
            path="/guide"
            element={
              <main className="h-screen w-screen grid grid-cols-[18%_82%]">
                <SideNav menu={"help"} submenu={"guide"} />
                <Guide />
              </main>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

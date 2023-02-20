import Sale from "./pos/Sale";
import Inventory from "./pos/Inventory";
import Purchase from "./pos/Purchase";
import Report from "./pos/Report";
import Accounting from "./pos/Accounting";
import CropLibrary from "./crop_advisary/CropLibrary";
import CropCalendar from "./crop_advisary/CropCalendar";
import CropHealth from "./crop_advisary/CropHealth";
import FertiCal from "./crop_advisary/FertiCal";
import MandiPrices from "./crop_advisary/MandiPrices";
import Dashboard from "./farmer/Dashboard";
import Credit from "./farmer/Credit";
import Cultivation from "./farmer/Cultivation";
import NewRegistration from "./farmer/NewRegistration";
import FarmerPurchase from "./farmer/Purchase";
import Support from "./farmer/Support";
import Expert from "./help/Expert";
import Guide from "./help/Guide";
import Problem from "./help/Problem";

const ContentToShow = (props: any) => {
  // console.log({ props });

  return (
    <>
      {/* POS Content */}
      {props?.content?.sale ? <Sale /> : <></>}
      {props?.content?.inventory ? <Inventory /> : <></>}
      {props?.content?.purchase ? <Purchase /> : <></>}
      {props?.content?.report ? <Report /> : <></>}
      {props?.content?.accounting ? <Accounting /> : <></>}

      {/* Crop Advisary Content */}
      {props?.content?.production ? <CropLibrary /> : <></>}
      {props?.content?.calendar ? <CropCalendar /> : <></>}
      {props?.content?.health ? <CropHealth /> : <></>}
      {props?.content?.calculator ? <FertiCal /> : <></>}
      {props?.content?.market ? <MandiPrices /> : <></>}

      {/* Farmer Content */}
      {props?.content?.dashboard ? <Dashboard /> : <></>}
      {props?.content?.farmPurchase ? <FarmerPurchase /> : <></>}
      {props?.content?.cultivation ? <Cultivation /> : <></>}
      {props?.content?.credit ? <Credit /> : <></>}
      {props?.content?.support ? <Support /> : <></>}
      {props?.content?.newRegistration ? <NewRegistration /> : <></>}

      {/* MAnagement Content */}

      {/* Help Content */}
      {props?.content?.problem ? <Problem /> : <></>}
      {props?.content?.expert ? <Expert /> : <></>}
      {props?.content?.guide ? <Guide /> : <></>}
    </>
  );
};

export default ContentToShow;

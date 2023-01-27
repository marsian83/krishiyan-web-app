import Sale from "./pos/Sale";
import Inventory from "./pos/Inventory";
import Purchase from "./pos/Purchase";
import Report from "./pos/Report";
import Accounting from "./pos/Accounting";
import Production from "./crop_advisary/Production";
import Calendar from "./crop_advisary/Calendar";
import Health from "./crop_advisary/Health";
import Calculator from "./crop_advisary/Calculator";
import Market from "./crop_advisary/Market";
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
      {props?.content?.production ? <Production /> : <></>}
      {props?.content?.calendar ? <Calendar /> : <></>}
      {props?.content?.health ? <Health /> : <></>}
      {props?.content?.calculator ? <Calculator /> : <></>}
      {props?.content?.market ? <Market /> : <></>}

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

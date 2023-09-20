import { useEffect, useState } from "react";
import React from "react";
import axios from "axios"; // Import Axios for API requests

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [popupData, setPopupData] = useState<any>(null); // State to store the fetched data

  useEffect(() => {
    if (isOpen) {
      // Fetch popup data when the component is open
      axios.get("http://localhost:5001/api/popups").then((response) => {
        if (response.data.success) {
          setPopupData(response.data.popups[0]); // Assuming you want to display the first popup
        } else {
          // Handle the case where data fetching failed
        }
      });
    }
  }, [isOpen]);

  if (!isOpen || !popupData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-full max-w-md p-6 my-6 mx-4 bg-light-green-100 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 p-2 text-green-700 hover:text-gray-900 rounded-full bg-gray-200 hover:bg-green-200"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4 text-green-700 ">
            {popupData.title}
          </h2>

          <h4 className="text-xl font-medium text-green-400">
            {`@${popupData.price}/- per ton`}
          </h4>
          <h4 className="text-xl font-medium">
            {`Quantity: ${popupData.quantity} tons`}
          </h4>
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-green-700">
            Quality Parameters
          </h2>
          <ul className="list-decimal pl-6">
            <li className="mb-1">{`Moisture: ${popupData.moisture}`}</li>
            <li className="mb-1">{`Foreign matter: ${popupData.foreignMatter}`}</li>
            <li className="mb-1">{`Fibre: ${popupData.fibre}`}</li>
            <li className="mb-1">{`Debris: ${popupData.debris}`}</li>
            <li className="mb-1">{`Protein: ${popupData.protein}`}</li>
          </ul>
          <p className="mt-6 text-gray-800">{popupData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;

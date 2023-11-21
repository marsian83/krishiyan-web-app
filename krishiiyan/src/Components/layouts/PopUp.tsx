import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { extractCodeFromDriveLink } from "../../handleImageCode";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [popupData, setPopupData] = useState<any>(null);
  function encodeURL(url: string): string {
    return encodeURIComponent(url);
  }

  useEffect(() => {
    if (isOpen) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/popups`)
        .then((response) => {
          if (response.data.success) {
            setPopupData(response.data.popups[0]);
            // console.log("popupData.image", popupData.image);
          } else {
          }
        });
    }
  }, [isOpen]);

  if (!isOpen || !popupData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none mobile:gap-y-4 mobile:pt-[10rem] ">
      <div className="relative w-full max-w-md p-6 my-6 mx-4 bg-[#F3FFF1] rounded-lg shadow-lg border border-black ">
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

        <div className="p-4  ">
          <h4 className="text-xl font-medium ">Today's deal</h4>
          <h2 className="text-2xl font-bold mb-4 text-green-700 ">
            {popupData.title}
          </h2>

          <img
            className="w-96 h-96 ml-[16%] "
            alt="popupImage"
            style={{ width: 250, height: 250 }}
            src={`https://drive.google.com/uc?export=view&id=${extractCodeFromDriveLink(
              popupData.image
            )}`}
          />

          <h4 className="text-3xl font-bold text-green-400 underline ">
            {`@${popupData.price}/- per ton`}
          </h4>
          <h2 className="text-2xl font-medium">
            {`Quantity: ${popupData.quantity} tons`}
          </h2>
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-green-700">
            Quality Parameters
          </h2>
          <ul className="list-decimal pl-6 text-start text-2xl">
            <li className="mb-1 text-2xl">{`Moisture: ${popupData.moisture}`}</li>
            <li className="mb-1 text-2xl">{`Foreign matter: ${popupData.foreignMatter}`}</li>
            <li className="mb-1 text-2xl">{`Fibre: ${popupData.fibre}`}</li>
            <li className="mb-1 text-2xl">{`Debris: ${popupData.debris}`}</li>
            <li className="mb-1 text-2xl">{`Protein: ${popupData.protein}`}</li>
          </ul>
          <p className="mt-6 text-gray-800">{popupData.description}</p>
          <button
            className=" text-green-700 hover:text-gray-900 rounded-full bg-gray-200 hover:bg-green-200"
            onClick={() => {
              const message = `Hello,we have ${popupData.title} of price ${popupData.price} and quantity is ${popupData.quantity}. `;
              const encodedMessage = encodeURL(message);
              console.log(encodedMessage);

              window.location.href = `https://wa.me/918055850995?text=${encodedMessage}`;
            }}
          >
            <div className="flex flex-row">
              <img
                src="Images\whatsapp.png"
                alt="WhatsApp"
                className="w-6 h-6"
              />
              <p> Contact to supply</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

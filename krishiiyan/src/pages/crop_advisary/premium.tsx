import React, { useState } from "react";
import Popup from "../../Components/layouts/PopUp";

const Premium = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-100 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/farming.jpg')" }}
    >
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1
          className="text-4xl font-bold text-green-700"
          style={{ color: "#13490A" }}
        >
          Locked
        </h1>
        <h3 className="text-lg text-gray-700">Premium feature</h3>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={openPopup}
        >
          Open Popup
        </button>
      </div>

      {/* Call the Popup component */}
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default Premium;

import React from "react";

const Premium = () => {
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
      </div>
    </div>
  );
};

export default Premium;

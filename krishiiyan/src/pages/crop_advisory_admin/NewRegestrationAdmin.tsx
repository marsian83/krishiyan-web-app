import React, { useState, useEffect } from "react";
import axios from "axios";

const NewRegistrationAdmin = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState(null);
  const [details, setDetails] = useState<{
    name: string;
    mobile: string;
    state: string;
    city: string;
    zip: string;
    id: string;
    street: string;
    mobileIsWhatsapp: string;
    totalLandArea: string;
    dealer_farmer_relation: string;
    plantation_type: string;
  }>({
    name: "",
    mobile: "",
    state: "",
    city: "",
    zip: "",
    id: "",
    street: "",
    mobileIsWhatsapp: "",
    totalLandArea: "",
    dealer_farmer_relation: "",
    plantation_type: "",
  });
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    // Fetch phone numbers
    axios
      .get("http://localhost:5001/api/farmers/phone-numbers")
      .then((response) => {
        const mobiles = response.data;

        const phoneNumbersArray = mobiles.map(
          (phoneNumber: { mobile: any }) => phoneNumber.mobile
        );
        setPhone(phoneNumbersArray);
        console.log("Phone numbers: got phone numbers array", mobiles);
      });
  }, []);

  const handlePhoneNumberChange = (e: { target: { value: any } }) => {
    const phoneNumber = e.target.value;
    setSelectedPhoneNumber(phoneNumber);
    // Fetch details for the selected phone number
    axios
      .get(`http://localhost:5001/api/farmers/phoneNumbers/${phoneNumber}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching details:", error);
        console.log("Error fetching details in the front end:", error);
      });
  };

  return (
    <div>
      <h1>Phone Number Details</h1>

      <select
        onChange={handlePhoneNumberChange}
        value={selectedPhoneNumber || ""}
      >
        <option value="" disabled>
          Select a phone number
        </option>

        {phone.map((phoneNumber, index) => (
          <option key={index} value={phoneNumber}>
            {phoneNumber}
          </option>
        ))}
      </select>
      {selectedPhoneNumber && (
        <div>
          <h2>Details for {selectedPhoneNumber}</h2>
          <p>Name: {details.name || "N/A"}</p>
          <p>Mobile: {details.mobile || "N/A"}</p>
          <p>State: {details.state || "N/A"}</p>
          <p>City: {details.city || "N/A"}</p>
          <p>Zip: {details.zip || "N/A"}</p>
          <p>street : {details.street || "N/A"}</p>
          <p>mobileIsWhatsapp : {details.mobileIsWhatsapp || "N/A"}</p>
          <p>totalLandArea: {details.totalLandArea || "N/A"}</p>
          <p>
            dealer_farmer_relation : {details.dealer_farmer_relation || "N/A"}
          </p>
          <p> plantation_type: {details.plantation_type || "N/A"}</p>
        </div>
      )}
    </div>
  );
};

export default NewRegistrationAdmin;

import React, { useEffect, useState } from "react";

import MandiPrices from "../pages/crop_advisary/MandiPrices";
import MandiPricesAdmin from "../pages/crop_advisory_admin/mandiPricesAdmin";
import NewRegistration from "../pages/farmer/NewRegistration";
import NewRegistrationAdmin from "../pages/crop_advisory_admin/NewRegestrationAdmin";

function NewRegistrationHandler() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const fetchAdminStatus = async () => {
    await fetch(process.env.REACT_APP_BACKEND_URL + "/check-admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Failed to fetch admin status");
        }
      })
      .then((data) => {
        setIsAdmin(data.admin);
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchAdminStatus();
  }, [isAdmin]);

  return (
    <div>
      {loading ? (
        <div>Loading....</div>
      ) : isAdmin ? (
        <NewRegistrationAdmin />
      ) : (
        <NewRegistration />
      )}
    </div>
  );
}

export default NewRegistrationHandler;

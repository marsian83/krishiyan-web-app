import React, { useEffect, useState } from "react";
import CropLibraryAdmin from "../pages/crop_advisory_admin/CropLiberaryAdmin";
import CropLibrary from "../pages/crop_advisary/CropLibrary";
import CropHealth from "../pages/crop_advisary/CropHealth";
import CropHealthAdmin from "../pages/crop_advisory_admin/CropHealthAdmin";

function CropHealthHandler() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const fetchAdminStatus = async () => {
    await fetch(process.env.REACT_APP_BACKEND_URL + "check-admin", {
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

  return <div>{loading ? (
    <div>Loading....</div>
  ) : (
    isAdmin ? (
      <CropHealthAdmin />
    ) : (
      <CropHealth />
    )
  )}</div>;
}

export default CropHealthHandler;

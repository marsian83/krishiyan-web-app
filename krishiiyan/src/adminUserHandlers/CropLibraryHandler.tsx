import React, { useEffect, useState } from "react";
import CropLibraryAdmin from "../pages/crop_advisory_admin/CropLiberaryAdmin";
import CropLibrary from "../pages/crop_advisary/CropLibrary";

function CropLibraryHandler() {
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchAdminStatus = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/check-admin", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("authToken"),
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setIsAdmin(data.admin);
      } else {
        throw new Error("Failed to fetch admin status");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminStatus();
  }, []); 

  return (
    <div>
      {loading ? (
        <div>Loading....</div>
      ) : (
        isAdmin ? (
          <CropLibraryAdmin />
        ) : (
          <CropLibrary />
        )
      )}
    </div>
  );
}

export default CropLibraryHandler;

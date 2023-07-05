import React, { useEffect, useState } from "react";
import CropLibraryAdmin from "../pages/crop_advisory_admin/CropLiberaryAdmin";
import CropLibrary from "../pages/crop_advisary/CropLibrary";
import SideNavAdmin from "../Components/layouts/SideNavAdmin";
import SideNav from "../Components/layouts/SideNav";

function SideNavHandler() {
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
    console.log(isAdmin)
  }, [isAdmin]);

  return (
    <div>
      {loading ? (
        <div>Loading....</div>
      ) : isAdmin ? (
        <SideNavAdmin menu={"pos"} submenu={"sale"}/>
      ) : (
        <SideNav menu={"pos"} submenu={"sale"} />
      )}
    </div>
  );
}

export default SideNavHandler;

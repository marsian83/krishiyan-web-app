import React, { useEffect, useState } from 'react'
import CropLibraryAdmin from '../pages/crop_advisory_admin/CropLiberaryAdmin'
import CropLibrary from '../pages/crop_advisary/CropLibrary';

function CropLibraryHandler() {
    const [isAdmin, setIsAdmin] = useState(false);
    const fetchAdminStatus =async  () => {
      await fetch(process.env.REACT_APP_BACKEND_URL + 'check-admin', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('authToken'),
        },
      })
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error('Failed to fetch admin status');
          }
        })
        .then(data => {
          setIsAdmin(data.admin);
        })
        .catch(error => {
          console.error(error);
          // Handle error
        });
    };
  
    useEffect(() => {
      fetchAdminStatus();
    }, [isAdmin]);

  return (
    <div>
        {
            isAdmin ?
            <CropLibraryAdmin/>
            :
            <CropLibrary/>
        }
    </div>
  )
}

export default CropLibraryHandler
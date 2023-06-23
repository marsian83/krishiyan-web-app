import React, { useEffect, useState } from 'react'
import CropCalendar from '../pages/crop_advisary/CropCalendar';
import CropCalanderAdmin from '../pages/crop_advisory_admin/CropCalanderAdmin';

function CropCalenderHandler
() {
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
            <CropCalanderAdmin/>
            :
            <CropCalendar/>
        }
    </div>
  )
}

export default CropCalenderHandler

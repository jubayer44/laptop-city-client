import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";

const MyOrders = () => {
    const [bookingsData, setBookingsData] = useState([]);
    const {user} = useContext(AuthContext);
   
   useEffect(()=> {
    axios.get(`${process.env.REACT_APP_URL}/bookings?email=${user?.email}`)
    .then(data =>{
        setBookingsData(data?.data)
    })
   }, [user?.email])

   console.log(bookingsData);
    


  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              1
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;

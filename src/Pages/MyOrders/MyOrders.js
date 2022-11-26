import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";

const MyOrders = () => {
  const [bookingsData, setBookingsData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/myorders?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((data) => {
        setBookingsData(data?.data);
      });
  }, [user?.email]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/myorders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBookingsData(data);
      });
  }, [user?.email]);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookingsData?.map((booking, i) => (
            <tr key={booking._id}>
              <th>{i + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={booking?.productImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div className="font-bold">{booking?.productName}</div>
                </div>
              </td>
              <td>{booking?.productPrice}</td>
              <td>
                <button className="btn btn-primary btn-sm rounded md bg-green-500 px-6">
                  Pay
                </button>
                <button className="btn btn-primary btn-sm rounded md bg-red-500 ml-2 border-none">
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;

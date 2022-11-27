import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyOrders = () => {
  const [bookingsData, setBookingsData] = useState([]);
  const { user } = useContext(AuthContext);
  const [deleted, setDeleted] = useState(false);

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
  }, [user?.email, deleted]);


  const handleOrderCancel = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to cancel this order"
    );
    if (confirm) {
      axios(`${process.env.REACT_APP_URL}/myOrders/${id}`, {
        method: "DELETE",
        headers: {'authorization': `Bearer ${localStorage.getItem('access_token')}`},
      }).then((data) => {
        if (data.data.acknowledged) {
          setDeleted(!deleted);
          toast.success("Product deleted successfully");
        }
      });
    }
  };

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
          {bookingsData?.map((booking, i) => {
            return (
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
                <td>${booking?.productPrice}</td>
                <td>
                  {booking?.sold && booking?.paymentEmail === user?.email && (
                    <span className="px-2 font-bold text-green-500">Paid</span>
                  )}
                  {booking?.sold && booking?.paymentEmail !== user?.email && (
                    <span className="px-2 font-bold text-red-500">Not Available</span>
                  )}
                  {!booking?.sold && (
                    <Link
                      to={`/dashboard/payment/${booking?._id}`}
                      className="btn btn-primary btn-sm rounded md bg-green-500 px-6"
                    >
                      Pay
                    </Link>
                  )}
                  
                    <button
                    onClick={() => handleOrderCancel(booking?._id)}
                    className="btn btn-primary btn-sm rounded md bg-red-500 ml-2 border-none text-white normal-case"
                  >
                    Delete
                  </button> 
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;

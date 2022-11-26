import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";

const MyOrders = () => {
  const [bookingsData, setBookingsData] = useState([]);
  const { user } = useContext(AuthContext);
  const navigation = useNavigate();
  const [loader, setLoader] = useState(false);

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
  }, [user?.email, loader]);

  const handleOrderCancel = (id) => {
    setLoader(true);
    const confirm = window.confirm(
      "Are you sure you want to cancel this order"
    );
    if (confirm) {
      axios(`http://localhost:5000/myOrders/${id}`, {
        method: "DELETE",
      }).then((data) => {
        if (data.data.acknowledged) {
          setLoader(false);
          console.log(data);
        }
      });
    }
  };

  if (navigation.state === "loading") {
    return <Spinner />;
  }

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
              <td>${booking?.productPrice}</td>
              <td>
                <Link
                  to={`/dashboard/payment/${booking?._id}`}
                  className="btn btn-primary btn-sm rounded md bg-green-500 px-6"
                >
                  Pay
                </Link>
                <button
                  onClick={() => handleOrderCancel(booking?._id)}
                  className="btn btn-primary btn-sm rounded md bg-red-500 ml-2 border-none"
                >
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

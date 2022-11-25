import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthProvider";

const BookingModal = ({ product, setModal }) => {
    const { register, handleSubmit } = useForm();
    const {user} = useContext(AuthContext);
    const {displayName, email} = user;

    const handleBooked = (data) => {
      setModal(false);
      const bookingData = {
      productName: product.productName,
      productPrice: product.resalePrice,
      userName: user?.displayName,
      userEmail: user?.email,
      userPhone: data.phone,
      userLocation: data.location
      }
      fetch(`${process.env.REACT_APP_URL}/bookings`, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err.message));
    }


  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form 
            onSubmit={handleSubmit(handleBooked)}
          >
            <h3 className="text-lg font-bold">{product?.productName}</h3>
            <p className="mt-4 font-semibold text-gray-600">
              Product Price: ${product?.resalePrice}
            </p>
            <input
              defaultValue={displayName}
              disabled
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full rounded-md mt-2"
            />
            <input
              defaultValue={email}
              disabled
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full rounded-md mt-2"
            />
            <input
            {...register("phone")}
              type="number"
              required
              placeholder="your phone"
              className="input input-bordered w-full rounded-md mt-2"
            />
            <input
            {...register("location")}
              type="text"
              required
              placeholder="location"
              className="input input-bordered w-full rounded-md mt-2"
            />
            <button className="mt-2 btn btn-primary w-full rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

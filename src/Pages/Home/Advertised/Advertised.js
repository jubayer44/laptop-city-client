import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";
import BookingModal from "../../BookingModal/BookingModal";

const Advertised = () => {
  const { user } = useContext(AuthContext);
  const [modalInfo, setModalInfo] = useState(null);
  const [modal, setModal] = useState(false);
  const [userRole, setUserRole] = useState("");

  const { data: advertiseProducts = [] } = useQuery({
    queryKey: ["advertiseProducts"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_URL}/advertise`);
      const data = res.json();
      return data;
    },
  });

  useEffect(() => {
    if (user) {
      fetch(`${process.env.REACT_APP_URL}/user?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.role === "Buyer") {
            setUserRole(data?.role);
          }
        });
    }
  }, [user]);

  const handleBooking = (product) => {
    if (!userRole) {
      toast.error("Only Buyer can Booked a product");
      return;
    }
    setModal(true);
    setModalInfo(product);
  };

  const handleReportToAdmin = (product) => {
    if (!userRole) {
      toast.error("Only Buyer can report a product");
      return;
    }
    const reportedUser = {
      name: user?.displayName,
      email: user?.email,
      reportedId: product._id,
      productName: product.productName,
    };

    fetch(`${process.env.REACT_APP_URL}/report`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reportedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Report Successfully Sent");
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <>
      {advertiseProducts?.length && (
        <div>
          <h2 className="text-2xl mt-8 font-bold text-center">
            Advertise Section
          </h2>
          <div className=" py-8 mx-auto  lg:py-8">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:mx-auto ">
              {advertiseProducts?.map((product) => (
                <div
                  className="overflow-hidden transition-shadow shadow-lg duration-300 bg-white rounded"
                  key={product._id}
                >
                  <div aria-label="Article">
                    <img
                      src={product.img}
                      className="object-cover w-full h-64 rounded"
                      alt=""
                    />
                  </div>
                  <div className="p-5">
                    <div
                      aria-label="Article"
                      className="inline-block mb-3 duration-200 hover:text-purple-700"
                    >
                      <p className="text-xl font-semibold ">
                        {product.productName}
                      </p>
                    </div>
                    <p className="mb-4 text-gray-700">
                      Location: {product.location}
                    </p>
                    <p className="mb-4 text-gray-700">
                      Resale Price: ${product.resalePrice}
                    </p>
                    <p className="mb-4 text-gray-700">
                      Original Price: ${product.originalPrice}
                    </p>
                    <p className="mb-4 text-gray-700">
                      Condition: {product.Condition}
                    </p>
                    <p className="mb-4 text-gray-700">
                      Years of Use: {product.use}
                    </p>
                    <p className="mb-4 text-gray-700">
                      Posted on: ${product.postedDate} | {product.postedTime}
                    </p>
                    <p className="mb-4 text-gray-700">Seller: Jack</p>
                    <label
                      onClick={() => handleBooking(product)}
                      htmlFor="booking-modal"
                      className="btn btn-primary w-full my-2 bg-blue-500 text-white font-bold rounded-md"
                    >
                      Buy Now
                    </label>
                    <button
                      onClick={() => handleReportToAdmin(product)}
                      className="btn btn-primary w-full my-2 bg-blue-500 text-white font-bold rounded-md border-none"
                    >
                      Report
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {modal && <BookingModal product={modalInfo} setModal={setModal} />}
    </>
  );
};

export default Advertised;

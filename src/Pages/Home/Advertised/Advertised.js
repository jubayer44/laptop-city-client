import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";
import BookingModal from "../../BookingModal/BookingModal";
import CategoryCard from "../../CategoryCard/CategoryCard";

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
      {advertiseProducts?.length  > 0 && (
        <div>
          <h2 className="text-2xl mt-8 font-bold text-center">
            Advertise Section
          </h2>
          <div className=" py-8 mx-auto  lg:py-8">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:mx-auto ">
              {advertiseProducts?.map((product) => (
                <CategoryCard
                product={product}
            key={product._id}
            handleBooking={handleBooking}
            handleReportToAdmin={handleReportToAdmin}
                />
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

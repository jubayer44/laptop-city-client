import React, {  useContext, useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const CategoryDetails = () => {
  const {user} = useContext(AuthContext);
  const [modalInfo, setModalInfo] = useState(null);
  const [modal, setModal] = useState(false);
  const [userRole, setUserRole] = useState('');

  const products = useLoaderData();

  useEffect(()=> {
    fetch(`${process.env.REACT_APP_URL}/user?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
      if(data.role === "Buyer"){
        setUserRole(data);
      }
    })
    .catch(err => console.error(err.message))
  }, [user?.email]);



  const handleBooking =(product) => {
    if(!userRole){
      toast.error('Only Buyer can Booked a product')
      return
    }
    setModal(true);
      setModalInfo(product);
  };



  const handleReportToAdmin = (product) => {
      if(!userRole){
        toast.error("Only Buyer can report a product");
        return;
      }
      const reportedUser = {
        name: user?.displayName,
        email: user?.email,
        reportedId: product._id,
        productName: product.productName
      };
  
      fetch(`${process.env.REACT_APP_URL}/report`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(reportedUser)
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
            toast.success('Report Successfully Sent')
        }
        else{
          toast.error(data.message);
        }
      })
      .catch(err => console.error(err.message));
    };
  
 


  return (
    <div>
      <h2 className="text-2xl mt-8 font-bold text-center">
        All Laptop in this Category
      </h2>
      <div className=" py-8 mx-auto  lg:py-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:mx-auto ">
          {products?.map((product) => <Product
           product={product}
            key={product._id}
            handleBooking={handleBooking}
            handleReportToAdmin={handleReportToAdmin}
            />)}
        </div>
      </div>
      {
        modal && <BookingModal product={modalInfo} setModal={setModal}/>
      }
    </div>
  );
};

export default CategoryDetails;

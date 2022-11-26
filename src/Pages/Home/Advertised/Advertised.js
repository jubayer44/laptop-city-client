import { useQuery } from "@tanstack/react-query";
import React from "react";

const Advertised = () => {
  const { data: advertiseProducts } = useQuery({
    queryKey: ["advertiseProducts"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_URL}/advertise`);
      const data = res.json();
      return data;
    },
  });

  return (
    <>
      {advertiseProducts?.length && (
        <div>
          <h2 className="text-2xl mt-8 font-bold text-center">
            All Laptop in this Category
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
                      // onClick={() => handleBooking(product)}
                      htmlFor="booking-modal"
                      className="btn btn-primary w-full my-2 bg-blue-500 text-white font-bold rounded-md"
                    >
                      Book Now
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Advertised;

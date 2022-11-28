import React from 'react';

const CategoryCard = ({ product, handleReportToAdmin, handleBooking }) => {
    return (
        <div>
             <div>
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
            <p className="text-xl font-semibold ">{product.productName}</p>
          </div>
          <p className="mb-4 text-gray-700">
            Location: <strong>{product.location}</strong>
          </p>
          <p className="mb-4 text-gray-700">
            Resale Price:{" "}
            <strong className="bg-yellow-400 rounded-md p-1">
              ${product.resalePrice}
            </strong>
          </p>
          <p className="mb-4 text-gray-700">
            Original Price:{" "}
            <strong className="bg-yellow-200 rounded-md p-1">
              ${product.originalPrice}
            </strong>
          </p>
          <p className="mb-4 text-gray-700">
            Condition:{" "}
            <strong className="text-green-400">{product.Condition}</strong>
          </p>
          <p className="mb-4 text-gray-700">
            Years of Use: <strong>{product.use} year</strong>
          </p>

          <p className="mb-4 text-gray-700">
            Posted on:{" "}
            <strong>
              ${product.postedDate} | {product.postedTime}
            </strong>
          </p>
          <p className="mb-4 text-gray-700 flex items-center ">
            Seller: <strong className='ml-2'>{product.seller}</strong>
           
          </p>
          <button
            onClick={() => handleReportToAdmin(product)}
            className="btn btn-sm rounded-md bg-red-500 border-none text-white"
          >
            Report
          </button>
          <label
            onClick={() => handleBooking(product)}
            htmlFor="booking-modal"
            className="btn btn-primary w-full my-2 bg-blue-500 text-white font-bold rounded-md border-none"
          >
            Buy Now
          </label>
        </div>
      </div>
    </div>
        </div>
    );
};

export default CategoryCard;
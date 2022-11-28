import { useEffect, useState } from 'react';

const Product = ({product, handleReportToAdmin, handleBooking}) => {
const [userRole, setUserRole] = useState()

useEffect(()=> {
    if(product?.sellerEmail){  
    fetch(`${process.env.REACT_APP_URL}/user?email=${product?.sellerEmail}`)
    .then(res => res.json())
    .then(data => {
if(data?.isVerified){
    setUserRole(data?.isVerified)
}
    })
    }
}, [product?.sellerEmail])

console.log(product);

    return (
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
                <p className="text-xl font-semibold ">
                  {product.productName}
                </p>
              </div>
              <p className="mb-4 text-gray-700">
                Location: <strong>{product.location}</strong>
              </p>
              <p className="mb-4 text-gray-700">
                Resale Price: <strong className='bg-yellow-400 rounded-md p-1'>${product.resalePrice}</strong>
              </p>
              <p className="mb-4 text-gray-700">
                Original Price: <strong className='bg-yellow-200 rounded-md p-1'>${product.originalPrice}</strong>
              </p>
              <p className="mb-4 text-gray-700">
                Condition: <strong className='text-green-400'>{product.Condition}</strong>
              </p>
              <p className="mb-4 text-gray-700">
                Years of Use: <strong>{product.use} year</strong>
              </p>
              
              <p className="mb-4 text-gray-700">
                Posted on: <strong>${product.postedDate} | {product.postedTime}</strong>
              </p>
              <p className="mb-4 text-gray-700 flex items-center ">Seller: {product.seller}
            {
              userRole &&  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 ml-2 h-7 text-[#34e1eb]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            }
</p>
<button onClick={()=> handleReportToAdmin(product)} className="btn btn-sm rounded-md bg-red-500 border-none text-white">Report</button>
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
    );
};

export default Product;

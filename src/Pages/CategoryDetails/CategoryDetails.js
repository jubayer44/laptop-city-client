import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';

const CategoryDetails = () => {
  const [products, setProducts] = useState([]);
const [loader, setLoader] = useState(true); 

  useEffect(()=> {
    const id = window.location.pathname.split('/')[2];
    fetch(`${process.env.REACT_APP_URL}/products?id=${id}`)
    .then(res => res.json())
    .then(data => {
      setProducts(data);
      setLoader(false);
    })
  }, [])

  if(loader){
    return <Spinner/>
  }


    return (
        <div>
      <h2 className="text-2xl mt-8 font-bold text-center">All Laptop in this Category</h2>
      <div className=" py-8 mx-auto  lg:py-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:mx-auto ">
          {
            products?.map(product => (<div className="overflow-hidden transition-shadow duration-300 bg-white rounded"
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
                <p className="text-2xl font-bold">
                  {product.productName}
                </p>
              </div>
              <p className="mb-4 text-gray-700">
                Location: Dhaka
              </p>
              <p className="mb-4 text-gray-700">
              Resale Price: $120
              </p>
              <p className="mb-4 text-gray-700">
              Original Price: $260
              </p>
              <p className="mb-4 text-gray-700">
              Years of Use: 2 years
              </p>
              <p className="mb-4 text-gray-700">
              Posted on: 12/12/2022 | 11:20 pm
              </p>
              <p className="mb-4 text-gray-700">
              Seller: Jack
              </p>
              <p className="mb-4 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <button className="btn btn-primary w-full my-2 bg-blue" >Bye Now</button>
            </div>
          </div>))
          }
        </div>
      </div>
    </div>
    );
};

export default CategoryDetails;
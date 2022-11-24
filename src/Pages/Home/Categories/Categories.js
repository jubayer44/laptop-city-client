import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div>
      <h2 className="text-2xl mt-8 font-bold text-center">Explore By Category</h2>
      <div className=" py-8 mx-auto  lg:py-8">
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mx-auto ">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded max-w-xs">
            <Link to="/category" aria-label="Article">
              <img
                src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                className="object-cover w-full rounded"
                alt=""
              />
              <h3 className='text-2xl text-center'>Samsung brand</h3>
            </Link>
           
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded max-w-xs">
            <a href="/" aria-label="Article">
              <img
                src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                className="object-cover w-full rounded"
                alt=""
              />
              <h3 className='text-2xl text-center'>Samsung brand</h3>
            </a>
           
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded max-w-xs">
            <a href="/" aria-label="Article">
              <img
                src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                className="object-cover w-full rounded"
                alt=""
              />
              <h3 className='text-2xl text-center'>Samsung brand</h3>
            </a>
           
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded max-w-xs">
            <a href="/" aria-label="Article">
              <img
                src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                className="object-cover w-full rounded"
                alt=""
              />
              <h3 className='text-2xl text-center'>Samsung brand</h3>
            </a>
           
          </div>
        </div>
      </div>
    </div>
    );
};

export default Categories;
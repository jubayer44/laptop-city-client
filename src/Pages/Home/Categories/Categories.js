import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=> {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => {
      setCategories(data)
    })
  }, [])
  
console.log(categories);
    return (
        <div>
      <h2 className="text-2xl mt-8 font-bold text-center">Explore By Category</h2>
      <div className=" py-8 mx-auto  lg:py-8">
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mx-auto ">
          {
            categories?.map(category => (<div className="overflow-hidden transition-shadow duration-300 bg-white rounded max-w-xs">
            <Link to="/category" aria-label="Article">
              <img
                src={category?.img}
                className="object-cover w-full rounded h-[200px]"
                alt=""
              />
              <h3 className='text-2xl text-center'>{category?.CategoryName} brand</h3>
            </Link>
          </div>))
          }
        </div>
      </div>
    </div>
    );
};

export default Categories;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(()=> {
    fetch(`${process.env.REACT_APP_URL}/categories`)
    .then(res => res.json())
    .then(data => {
      setCategories(data);
      setLoader(false);
    })
    .catch(err => console.log(err));
  }, [])

    if(loader){
      return <Spinner/>
    }

  return (
    <div>
      <h2 className="text-2xl mt-8 font-bold text-center">
        Explore By Category
      </h2>
      <div className=" py-8 mx-auto  lg:py-8">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:mx-auto ">
          {categories?.map((category) => (
            <div key={category._id} className="overflow-hidden transition-shadow duration-300 bg-white rounded w-full">
              <Link to={`/category/${category._id}`} aria-label="Article">
                <img
                  src={category?.img}
                  className="object-cover w-full rounded h-[200px]"
                  alt=""
                />
                <h3 className="text-2xl text-center">
                  {category?.CategoryName} brand
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

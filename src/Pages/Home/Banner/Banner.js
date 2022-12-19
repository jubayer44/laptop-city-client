import React from "react";
import bannerPic from '../../../Images/banner-pic.jpg';

const Banner = () => {
  return (
    <div className="relative h-[80vh] ">
      <img
        src={bannerPic}
        className="absolute inset-0 object-cover w-full h-full rounded-md"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 h-[80vh]">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-center xl:flex-row">
            <div className="p-3 w-full mx-auto max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <h2 className="max-w-lg mb-6 text-center font-sans text-3xl font-bold  text-white lg:text-6xl">
                Buy and Sell Your Laptop With Us<br className="hidden md:block" />
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
              If you’re selling digital products online, you need more than a pretty way to deliver your content. You need an easy way to boost conversions, maximize customer value, and run your business without worrying about technology. 
              </p>
             <div className="flex justify-center">
             <button className="btn btn-primary border-none my-2 bg-blue-500 text-white font-bold rounded-md text-center">Get Start</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

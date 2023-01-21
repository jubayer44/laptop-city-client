import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";

const CustomerReviews = () => {
  return (
    <section className="my-8">
      <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:mb-10 md:px-12">
        <h1 className="text-2xl font-bold text-center">
          What Our Customers Are Saying
        </h1>
      </div>
      <div className="container mx-auto ">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg relative">
              <div>
                <p className="mt-2 text-gray-600 mb-20">
                  Thank you very much and thank you for your valuable feedback.
                  The bitter experience you had with the delivery man is truly
                  unfortunate and we apologize. I hope that the will give
                  importance to these issues and work to make the service chief
                  faster.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 absolute bottom-5">
                <img
                  className="w-10 h-10 object-cover rounded-full border-2 border-blue-500"
                  alt=""
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
                <a href="/" className="text-md font-medium text-blue-500">
                  John Doe
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg relative">
              <div>
                <p className="mt-2 text-gray-600 mb-20">
                Accusantium illum cupiditate harum asperiores iusto quos quasi
                  quis quae! Fugit doloribus, voluptatum quidem magnam velit
                  excepturi nobis, reprehenderit ducimus incidunt quisquam quae
                  veritatis, quos iure harum.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 absolute bottom-5">
                <img
                  className="w-10 h-10 object-cover rounded-full border-2 border-blue-500"
                  alt=""
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
                <a href="/" className="text-md font-medium text-blue-500">
                Leroy Jenkins
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg relative">
              <div>
                <p className="mt-2 text-gray-600 mb-20">
                I was a little nervous about the order that I made from
                  Laptop. but after getting the product I became fully
                  satisfied.. furthermore, the seller was outstanding. In one
                  word, 100% Satisfied. Highly recommend this store.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 absolute bottom-5">
                <img
                  className="w-10 h-10 object-cover rounded-full border-2 border-blue-500"
                  alt=""
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
                <a href="/" className="text-md font-medium text-blue-500">
                Jamil Hassan
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg relative">
              <div>
                <p className="mt-2 text-gray-600 mb-20">
                Received my laptop today. This is my first purchase from
                  laptop city. Everything is fine as I wanted. Seller is very
                  sincere and helpful. . Laptop city also called repeatedly
                  asking if the product is ok. I like Laptop City Service. In
                  one word, 100% Satisfied. Highly recommend this store.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 absolute bottom-5">
                <img
                  className="w-10 h-10 object-cover rounded-full border-2 border-blue-500"
                  alt=""
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
                <a href="/" className="text-md font-medium text-blue-500">
                Yamin Seikh
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg relative">
              <div>
                <p className="mt-2 text-gray-600 mb-20">
                Received my laptop today. This is my first purchase from
                  laptop city. Everything is fine as I wanted. Seller is very
                  sincere and helpful. . Laptop city also called repeatedly
                  asking if the product is ok. I like Laptop City Service. In
                  one word, 100% Satisfied. Highly recommend this store.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 absolute bottom-5">
                <img
                  className="w-10 h-10 object-cover rounded-full border-2 border-blue-500"
                  alt=""
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
                <a href="/" className="text-md font-medium text-blue-500">
                Yamin Seikh
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg relative">
              <div>
                <p className="mt-2 text-gray-600 mb-20">
                Received my laptop today. This is my first purchase from
                  laptop city. Everything is fine as I wanted. Seller is very
                  sincere and helpful. . Laptop city also called repeatedly
                  asking if the product is ok. I like Laptop City Service. In
                  one word, 100% Satisfied. Highly recommend this store.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 absolute bottom-5">
                <img
                  className="w-10 h-10 object-cover rounded-full border-2 border-blue-500"
                  alt=""
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
                <a href="/" className="text-md font-medium text-blue-500">
                Yamin Seikh
                </a>
              </div>
            </div>
          </SwiperSlide>
          
          
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReviews;

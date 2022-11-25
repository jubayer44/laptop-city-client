import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayouts = () => {
  return (
    <div>
      <Navbar />
      <label htmlFor="dashboard-drawer" className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to='/dashboard/myorders'>My Orders</Link>
            </li>
            <li>
              <Link to='/dashboard/addproduct'>Add a Product</Link>
            </li>
            <li>
              <Link to='/dashboard/allsellers'> All Sellers</Link>
            </li>
            <li>
              <Link to='/dashboard/allbuyers'>All Buyers</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayouts;

import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAdmin from "../hooks/useAdmin";

const DashboardLayouts = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const {data: currentUser = []} = useQuery({
      queryKey: ['user'],
      queryFn: async() => {
        const res = await fetch(`${process.env.REACT_APP_URL}/user?email=${user?.email}`)
        const data = res.json();
        return data;
      }
  })

  return (
    <div>
      <Navbar />
      <label htmlFor="dashboard-drawer" className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border lg:hidden">
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
        <div className="drawer-content justify-center">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 bg-gray-200 text-base-content">
            
              {
                currentUser?.role === "Buyer" && <><Link className="p-3 bg-blue-200 rounded-md mb-2 font-semibold" to='/dashboard/myOrders'>My Orders</Link>
                <Link className="p-3 bg-blue-200 rounded-md mb-2 font-semibold" to='/dashboard/wishList'>Wish List</Link>
                </>
              }
            
            
              {
                currentUser?.role === "Seller" && <><Link className="p-3 bg-blue-200 rounded-md mb-2 font-semibold" to='/dashboard/addProduct'>Add a Product</Link>
               <Link className="p-3 bg-blue-200 rounded-md mb-2 font-semibold" to='/dashboard/myproducts'>My Products</Link></>
              }
            
            
              {
                isAdmin && <> <Link className="p-3 bg-blue-200 rounded-md mb-2 font-semibold" to='/dashboard/allSellers'> All Sellers</Link> 
                <Link className="p-3 bg-blue-200 rounded-md mb-2 font-semibold" to='/dashboard/allBuyers'>All Buyers</Link>
                <Link className="p-3 bg-blue-200 rounded-md mb-2 font-semibold" to='/dashboard/report'>Reported Items</Link>
                </>
                
              }
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayouts;

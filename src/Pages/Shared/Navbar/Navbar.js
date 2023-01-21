import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import img from "../../../Images/laptop-city-logo.png";
import { FaHome, FaBook, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("access_token");
      })
      .catch((err) => console.error(err));
  };

  return (
    <nav className=" w-full bg-white">
      <div className="justify-between mx-auto md:items-center md:flex ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/" className="flex gap-2 items-center">
              <img src={img} alt="" className="h-10" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
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
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-gray-600 font-semibold hover:text-blue-600">
              
                <NavLink to="/home" className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold flex items-center gap-1" : "text-gray-600 font-semibold hover:text-blue-600 flex items-center gap-1"
            }><FaHome/> Home</NavLink>
              </li>
              <li className="text-gray-600 font-semibold hover:text-blue-600 flex items-center gap-1">
                
                <NavLink to="/blog" className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold flex items-center gap-1" : "text-gray-600 font-semibold hover:text-blue-600 flex items-center gap-1"
            }><FaBook className="h-[14px]"/> Blog</NavLink>
              </li>

              {user ? (
                <>
                  <li className="text-gray-600 font-semibold hover:text-blue-600 flex items-center gap-1">
                    
                    <NavLink to="/dashboard" className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold flex items-center gap-1" : "text-gray-600 font-semibold hover:text-blue-600 flex items-center gap-1"
            }><AiFillDashboard/> Dashboard</NavLink>
                  </li>
                  <li className="text-gray-600 font-semibold hover:text-blue-600 flex items-center gap-1">
                    
                    <NavLink onClick={handleLogout} to="/login" className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold flex items-center gap-1" : "text-gray-600 font-semibold hover:text-blue-600 flex items-center gap-1"
            }>
                    <FaSignOutAlt/>  Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="text-gray-600 font-semibold hover:text-blue-600 flex items-center gap-1">
                  
                  <NavLink to="/login" className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold flex items-center gap-1" : "text-gray-600 font-semibold hover:text-blue-600 flex items-center gap-1"
            }><FaSignInAlt/> Login</NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

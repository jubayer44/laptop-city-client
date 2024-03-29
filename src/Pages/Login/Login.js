import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";
import addUser from "../addUser/addUser";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [usr, setUsr] = useState("");
  const { logIn, googleLogIn, forgatPassword } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(usr);

  useEffect(()=> {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate])

  const handleLogin = (data) => {
    setLoading(true);
    logIn(data?.email, data?.password)
      .then((result) => {
        const user = result.user;
        if (user) {
          setUsr(user?.email);
          toast.success("Login successful");
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };

  const resetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    toast.success("Reset password link sent to your email")
    setIsVisible(false);
    forgatPassword(email)
    .then(result => {
    })
    .catch(err => console.log(err))
  };

  const handleGoogleLogin = () => {
    googleLogIn()
      .then((res) => {
        const user = res.user;
        addUser(user, setLoading, setUsr);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl my-10 mx-auto relative">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form
        onSubmit={handleSubmit(handleLogin)}
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block text-gray-700">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="your email"
            required
            className="input input-bordered w-full rounded-md"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="your password"
            required
            className="input input-bordered w-full rounded-md"
          />
          <div className="flex justify-end text-xs text-gray-700">
            <p
            className="cursor-pointer"
              onClick={()=>setIsVisible(true)}            
            >
              Forgot Password?
            </p>
          </div>
        </div>
        <button className="block w-full btn btn-primary text-center rounded-sm font-bold">
          {loading ? (
            <div
              style={{ borderTopColor: "transparent" }}
              className="w-6 h-6 border-4 border-black border-dotted rounded-full animate-spin mx-auto"
            ></div>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      <form
        onSubmit={resetPassword}
      className={isVisible ? "absolute bg-white py-10 px-24 rounded shadow-md top-[15%]" : "hidden"}
      >
        <p
        onClick={()=> setIsVisible(false)}
        className="absolute right-0 top-0 p-1 rounded font-bold bg-red-400 cursor-pointer">close</p>
        <h2 className="text-2xl font-bold text-center my-5">Enter Your Email</h2>
        <input type="text" name="email" placeholder="email" id="" className="input input-bordered w-full rounded-md" />
        <div className="flex justify-center">
        <button
        type="submit"
        className="bg-[#40abb0] p-2 rounded mt-3 font-bold text-white"
        >Submit</button>
        </div>
      </form>

      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        <p className="px-3 text-sm text-gray-700">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleGoogleLogin}
          aria-label="Log in with Google"
          className="p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 text-gray-700">
        Already have an account?
        <Link rel="noopener noreferrer" to="/signup" className="underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;

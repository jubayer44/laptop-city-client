import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import addUser from "../addUser/addUser";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [usr, setUsr] = useState("");
  const navigate = useNavigate();
  const { signUp, updateUser, googleLogIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [token] = useToken(usr);
  useEffect(()=> {
    if (token) {
      navigate("/");
      setLoading(false)
    }
  }, [token, navigate]);

  const handleRegister = (data) => {
    setLoading(true);
    signUp(data?.email, data?.password)
      .then((result) => {
        const user = result.user;
        updateUser(data?.name)
          .then(() => {
            if (user) {
              addUser(user, setLoading, setUsr, data, );
            }
          })
          .catch((err) => {
            console.log(err.message)
            toast.error(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleLogIn()
      .then((res) => {
        const user = res.user;
        addUser(user, setLoading, setUsr);
      })
      .catch((err) => {
        console.log(err)
        toast.error(err.message);
      });
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl my-10 mx-auto">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      <form
        onSubmit={handleSubmit(handleRegister)}
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block text-gray-700">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="your name"
            required
            className="input input-bordered w-full rounded-md"
          />
        </div>
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
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-gray-700">
            Account Type
          </label>
          <select
            {...register("accountType")}
            required
            className="select select-bordered w-full rounded-md"
          >
            <option selected className="text-base">
              Buyer
            </option>
            <option className="text-base">Seller</option>
          </select>
        </div>
        <button className="block w-full btn btn-primary text-center rounded-sm">
          {loading ? (
            <div
              style={{ borderTopColor: "transparent" }}
              className="w-6 h-6 border-4 border-black border-dotted rounded-full animate-spin mx-auto"
            ></div>
          ) : (
            "Sign Up"
          )}
        </button>
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
        <Link rel="noopener noreferrer" to="/login" className="underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;

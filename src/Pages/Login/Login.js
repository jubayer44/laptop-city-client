import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { AuthContext } from "../Context/AuthProvider";
// import useToken from "../hooks/useToken";

const Login = () => {
  const [loading, setLoading] = useState(false);
//   const [usr, setUsr] = useState("");
//   const { logIn, googleSignIn } = useContext(AuthContext);
//   const { register, handleSubmit } = useForm();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";
//   const [token] = useToken(usr);
//   if (token) {
//     navigate(from, { replace: true });
//   }

//   const handleLogin = (data) => {
//     setLoading(true);
//     logIn(data?.email, data?.password)
//       .then((result) => {
//         const user = result.user;
//         if (user) {
//           setUsr(user.email);
//           setLoading(false);
//         } else {
//           setLoading(false);
//         }
//       })
//       .catch((err) => {
//         console.log(err.message);
//         setLoading(false);
//       });
//   };

//   const handleGoogleLogin = () => {
//     googleSignIn()
//     .then(res => {
//       const user = res.user;
//       fetch(`http://localhost:5000/users`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: user?.displayName,
//           email: user?.email
//         })
//       })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         setUsr(user.email);
//       })
//     })
//     .catch(err => console.log(err));
//   }

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl my-10 mx-auto">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form
        // onSubmit={handleSubmit(handleLogin)}
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-400">
            Email
          </label>
          <input
            // {...register("email")}
            type="text"
            name="email"
            id="username"
            required
            placeholder="email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700  "
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-400">
            Password
          </label>
          <input
            // {...register("password")}
            type="password"
            name="password"
            required
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md   "
          />
          <div className="flex justify-end text-xs dark:text-gray-400">
            <a rel="noopener noreferrer" href="/">
              Forgot Password?
            </a>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
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

      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
        // onClick={handleGoogleLogin}
        aria-label="Log in with Google" className="p-3 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Already have an account?
        <Link rel="noopener noreferrer" to="/signup" className="underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;

import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const LogIn = () => {
  const { signInUser, googleLogIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Sign In Successfully done ✅");
      })
      .catch((error) => {
        toast.error(
          "Invalid email or password.please enter valid email or password"
        );
      });
  };
  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        // console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Sign In Successfully done ✅");
      })
      .catch((error) => {
        toast.error("the server can't verify your access");
      });
  };
  return (
    <div className="card bg-base-100 md:w-full md:max-w-sm w-11/12 my-10 mx-auto  shrink-0 shadow-2xl">
      <h2 className=" text-center font-semibold text-4xl pt-4 text-green-700">
        Log In Now
      </h2>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn text-white bg-green-700 mt-4">
            Log In
          </button>
        </form>
        <span>
          Don't have an account ? please{" "}
          <Link
            className="text-green-700 underline font-medium hover:text-blue-500"
            to="/register"
          >
            Register
          </Link>{" "}
        </span>
        <div className="divider">OR</div>

        {/* Google */}
        <button
          onClick={handleGoogleLogIn}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LogIn;

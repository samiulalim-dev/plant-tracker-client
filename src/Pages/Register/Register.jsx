import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUserProfile, setUsers } = use(AuthContext);
  const [validPass, setValidPass] = useState("");
  const [seePassword, setSeePassword] = useState(true);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const upperCaseRegx = /(?=.*[A-Z])/;
    const lowerCaseRegx = /(?=.*[a-z])/;
    // const userInfo = {
    //   name,
    //   photo,
    //   email,
    //   password,
    // };
    // console.log(userInfo);
    if (password.length < 6) {
      setValidPass("Password must be at least 6 characters");
      return;
    }
    if (upperCaseRegx.test(password) === false) {
      setValidPass(
        "Please include at least one uppercase letter in your password.like(A-Z)"
      );
      return;
    }
    if (lowerCaseRegx.test(password) === false) {
      setValidPass(
        "Please include at least one lowercase letter in your password.like(a-z)"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photo)
          .then((user) => {
            // console.log(user);
          })
          .catch((error) => {
            // console.log(error);
          });
        setUsers({ ...result.user, displayName: name, photoURL: photo });
        // console.log(result);
        navigate("/");
        toast.success(
          "Congratulation Your Account Has Been Successfully Created !"
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
      });
  };
  return (
    <div className="card bg-base-100 md:w-full md:max-w-sm w-11/12 my-10 mx-auto  shrink-0 shadow-2xl">
      <h2 className=" text-center font-semibold text-4xl pt-4 text-green-700">
        Register Now
      </h2>
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Enter Your Name"
            required
          />
          <label className="label">Photo URL</label>
          <input
            name="photo"
            type="text"
            className="input"
            placeholder="Photo URL"
            required
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          <div className=" relative">
            <label className="label">Password</label>
            <input
              name="password"
              type={seePassword ? "password" : "text"}
              className="input"
              placeholder="Password"
              required
            />
            <button
              onClick={() => setSeePassword(!seePassword)}
              className=" absolute right-7 top-7 cursor-pointer"
              type="button"
            >
              {seePassword ? (
                <FaEye size={20}></FaEye>
              ) : (
                <FaEyeSlash size={20}></FaEyeSlash>
              )}
            </button>
          </div>
          <div>
            <span className=" text-red-600">{validPass}</span>
          </div>
          <button type="submit" className="btn text-white bg-green-700 mt-4">
            Register
          </button>
        </form>
        <span>
          Already have an account ? please{" "}
          <Link
            className=" underline font-medium text-green-700 hover:text-blue-500"
            to="/logIn"
          >
            Login
          </Link>{" "}
        </span>
      </div>
    </div>
  );
};

export default Register;

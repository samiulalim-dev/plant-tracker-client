import React, { use, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/logos.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaSignOutAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { GiBottomRight3dArrow } from "react-icons/gi";
import ThemeToggle from "../ThemeToogle/ThemeToogle";

const Navbar = () => {
  const { users, signOutUser } = use(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign Out Successfully Done✅");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // console.log(users);
  return (
    <div className=" bg-base-100 shadow-sm py-1">
      <div className="navbar md:w-11/12 md:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn p-0 mr-2 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-green-600 underline" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allPlants"
                  className={({ isActive }) =>
                    isActive ? "text-green-600 underline" : ""
                  }
                >
                  All Plants
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myPlants"
                  className={({ isActive }) =>
                    isActive ? "text-green-600 underline" : ""
                  }
                >
                  My Plants
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addPlant"
                  className={({ isActive }) =>
                    isActive ? "text-green-600 underline" : ""
                  }
                >
                  Add Plant
                </NavLink>
              </li>
              {users && (
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "text-green-600 underline" : ""
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <Link className="flex items-center font-semibold gap-0 md:gap-2 text-lg md:text-2xl">
            <img className=" w-11 md:w-full" src={logo} alt="" /> PlantCare
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-green-600 underline" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allPlants"
                className={({ isActive }) =>
                  isActive ? "text-green-600 underline" : ""
                }
              >
                All Plants
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myPlants"
                className={({ isActive }) =>
                  isActive ? "text-green-600 underline" : ""
                }
              >
                My Plants
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addPlant"
                className={({ isActive }) =>
                  isActive ? "text-green-600 underline" : ""
                }
              >
                Add Plant
              </NavLink>
            </li>

            {users && (
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-green-600 underline" : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end gap-1 md:gap-2 flex items-center">
          <div>
            <ThemeToggle></ThemeToggle>
          </div>
          {users ? (
            <div className=" flex items-center gap-3">
              <div className="avatar">
                <div
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={users.displayName}
                  className="ring-success ring-offset-base-100 w-10 cursor-pointer  rounded-full ring-2 ring-offset-2 "
                >
                  <img src={users.photoURL} />
                  <Tooltip className=" z-10" id="my-tooltip"></Tooltip>
                </div>
              </div>
              <div>
                <button
                  onClick={handleLogOut}
                  className=" btn bg-green-700 text-white"
                >
                  <FaSignOutAlt></FaSignOutAlt> Log Out
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Link
                to="/logIn"
                className="btn px-2 md:px-4 mr-2 bg-green-700 text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn  px-2 md:px-4 bg-green-700 text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

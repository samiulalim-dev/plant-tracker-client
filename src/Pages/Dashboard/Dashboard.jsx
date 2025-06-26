import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, NavLink, Outlet } from "react-router";
import logo from "../../assets/logos.png";
import { FaHome, FaLeaf, FaSeedling, FaPlusCircle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-5 mt-5">
        <div className="navbar lg:hidden mb-4 bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link to="/dashboard" className="mx-1 px-1 flex-1">
            Dashboard
          </Link>

          <div className="hidden flex-none lg:hidden">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "underline text-lime-600" : "text-black"
                  }
                >
                  <FaHome className="inline mr-2" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/overView"
                  className={({ isActive }) =>
                    isActive ? "underline text-lime-600" : "text-black"
                  }
                >
                  <FaHome className="inline mr-2" /> Overview
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/all-Plants"
                  className={({ isActive }) =>
                    isActive ? "underline text-lime-600" : "text-black"
                  }
                >
                  <FaLeaf className="inline mr-2" /> All Plants
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-Plants"
                  className={({ isActive }) =>
                    isActive ? "underline text-lime-600" : "text-black"
                  }
                >
                  <FaSeedling className="inline mr-2" /> My Plants
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-Plant"
                  className={({ isActive }) =>
                    isActive ? "underline text-lime-600" : "text-black"
                  }
                >
                  <FaPlusCircle className="inline mr-2" /> Add Plant
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex lg:hidden flex-col">
            {/* Navbar */}

            {/* Page content here */}
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "underline text-lime-600" : "text-black"
                  }
                >
                  <FaHome className="inline mr-2" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/overView"
                  className={({ isActive }) =>
                    isActive ? "underline text-lime-600" : "text-black"
                  }
                >
                  <FaHome className="inline mr-2" /> Overview
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/all-Plants"
                  className={({ isActive }) =>
                    isActive ? "underline text-lime-600" : "text-black"
                  }
                >
                  <FaLeaf className="inline mr-2" /> All Plants
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-Plants"
                  className={({ isActive }) =>
                    isActive ? "underline text-lime-600" : "text-black"
                  }
                >
                  <FaSeedling className="inline mr-2" /> My Plants
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-Plant"
                  className={({ isActive }) =>
                    isActive ? "underline text-lime-600" : "text-black"
                  }
                >
                  <FaPlusCircle className="inline mr-2" /> Add Plant
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <div className=" mb-2 ">
            <Link to="/">
              <div className=" flex  items-center gap-3">
                <img className=" mb-1" src={logo} alt="" />
                <p className=" -ml-2 text-3xl font-extrabold">PlantCare</p>
              </div>
            </Link>
          </div>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline text-lime-600" : "text-black"
              }
            >
              <FaHome className="inline mr-2" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/overView"
              className={({ isActive }) =>
                isActive ? "underline text-lime-600" : "text-black"
              }
            >
              <FaHome className="inline mr-2" /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/all-Plants"
              className={({ isActive }) =>
                isActive ? "underline text-lime-600" : "text-black"
              }
            >
              <FaLeaf className="inline mr-2" /> All Plants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-Plants"
              className={({ isActive }) =>
                isActive ? "underline text-lime-600" : "text-black"
              }
            >
              <FaSeedling className="inline mr-2" /> My Plants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/add-Plant"
              className={({ isActive }) =>
                isActive ? "underline text-lime-600" : "text-black"
              }
            >
              <FaPlusCircle className="inline mr-2" /> Add Plant
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

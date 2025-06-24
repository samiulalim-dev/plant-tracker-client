import React from "react";
import logo from "../../assets/footer-logo.png";
import { Link } from "react-router";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-green-800 text-white">
      <footer className="w-full max-w-7xl mx-auto px-4 py-10 md:py-15 grid gap-10 md:grid-cols-3">
        {/* Company Info */}
        <aside className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link className="flex items-center font-semibold text-lg md:text-2xl mb-2">
            <img className=" mr-2" src={logo} alt="logo" />
            PlantCare
          </Link>
          <p>PlantCare Industries Ltd.</p>
        </aside>

        {/* Navigation & Socials */}
        <div className="flex flex-col items-center gap-6 md:gap-10">
          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/allPlants" className="hover:underline">
                All Plants
              </Link>
            </li>
            <li>
              <Link to="/addPlant" className="hover:underline">
                Add Plant
              </Link>
            </li>
            <li>
              <Link to="/myPlants" className="hover:underline">
                My Plants
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <FaSquareXTwitter size={24} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs md:text-sm text-center">
            © {new Date().getFullYear()} PlantCare Industries Ltd. All rights
            reserved.
          </p>
        </div>

        <nav className="flex flex-col items-center md:items-end text-center md:text-right gap-1">
          <h6 className="text-lg  font-semibold mb-2">Contact Us</h6>

          <a className="hover:text-blue-300 cursor-pointer">
            samiulalim@gmail.com
          </a>
          <span>
            Phone :{" "}
            <a className="hover:text-blue-300 cursor-pointer">01402700000</a>
          </span>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

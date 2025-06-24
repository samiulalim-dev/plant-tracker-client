import React from "react";
import { Link } from "react-router";
import LottieReact from "../Lottiereact/LottieReact";

const Error = () => {
  return (
    <div>
      <div className="flex w-11/12 mx-auto flex-col items-center justify-center">
        <div className=" max-w-md">
          <LottieReact></LottieReact>
        </div>
        <p className="text-2xl text-center font-semibold md:text-3xl">
          Sorry, we couldn't find this page.
        </p>
        <Link
          to="/"
          className="px-8 py-3 mt-4 font-semibold rounded bg-green-700 text-gray-50"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;

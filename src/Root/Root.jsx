import React, { use, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";

const Root = () => {
  const { loading } = use(AuthContext);

  if (loading) {
    return (
      <div className=" flex items-center justify-center h-screen ">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;

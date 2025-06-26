import { useContext, useEffect, useState } from "react";

import { FaBox, FaUserAlt } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import useAxiosInstance from "../../../Hooks/AxiosInstance";

const Overview = () => {
  const { users } = useContext(AuthContext);
  const [myPlantsLoading, setMyPlantsLoading] = useState([]);
  const [plants, setPlants] = useState([]);
  const axiosSecure = useAxiosInstance();
  const [stats, setStats] = useState({
    totalItems: 0,
    myItems: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    axiosSecure
      .get(`/email/${users.email}`)
      .then((res) => {
        setStats(res.data);
        setMyPlantsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    // fetch(`https://plant-tracker-server-umber.vercel.app/email/${users.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPlants(data);
    //     setMyPlantsLoading(false);
    //   });
  }, [users]);

  useEffect(() => {
    axiosSecure
      .get(`/plants`)
      .then((res) => {
        setPlants(res.data);
        setMyPlantsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

      {/* Logged-in User Info */}
      <div className="bg-white shadow p-4 rounded-lg mb-6">
        <h3 className="text-xl font-semibold">Welcome, {users?.displayName}</h3>
        <p>Email: {users?.email}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-lime-100 p-4 rounded-lg shadow flex items-center gap-4">
          <FaBox className="text-3xl text-lime-600" />
          <div>
            <p className="text-lg font-bold">{plants.length}</p>
            <p>Total Plants</p>
          </div>
        </div>
        <div className="bg-emerald-100 p-4 rounded-lg shadow flex items-center gap-4">
          <FaBox className="text-3xl text-emerald-600" />
          <div>
            <p className="text-lg font-bold">{stats.length}</p>
            <p>My Plants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

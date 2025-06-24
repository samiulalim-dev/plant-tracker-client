import React, { useEffect, useState } from "react";
import { data, Link } from "react-router";
import useAxiosInstance from "../../Hooks/AxiosInstance";

const NewPlants = () => {
  const [latest, setLatest] = useState([]);
  const [newPlantsLoading, setNewPlantsLoading] = useState(true);
  const axiosSecure = useAxiosInstance();
  // console.log(latest);
  useEffect(() => {
    axiosSecure.get("/latest").then((res) => {
      setLatest(res.data);
      setNewPlantsLoading(false);
    });
    // fetch("https://plant-tracker-server-umber.vercel.app/latest")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setLatest(data);
    //     setNewPlantsLoading(false);
    //   });
  }, []);
  return (
    <div>
      <h2 className=" text-4xl font-semibold text-center py-6 text-green-700">
        New Plants
      </h2>
      {newPlantsLoading ? (
        <div className=" flex items-center justify-center h-screen ">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      ) : (
        <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((lat) => (
            <div
              key={lat._id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img src={lat.image} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h2 className="text-xl font-bold text-green-800">{lat.name}</h2>

                <p className="text-sm mt-2 text-gray-500">{lat.category}</p>

                <Link
                  to={`/viewDetails/${lat._id}`}
                  className=" mt-3 btn bg-green-700 text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewPlants;

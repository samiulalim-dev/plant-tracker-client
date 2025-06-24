import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllPlants = () => {
  const initialPlants = useLoaderData();
  // console.log(plants);

  const [plants, setPlants] = useState(initialPlants);
  const [careLevel, setCareLevel] = useState("");
  const [allPlantsLoading, setAllPlantsLoading] = useState(false);
  // console.log(sort);
  useEffect(() => {
    if (careLevel) {
      setAllPlantsLoading(true);
      fetch(
        `https://plant-tracker-server-umber.vercel.app/plants?careLevel=${careLevel}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPlants(data);
          setAllPlantsLoading(false);
        });
    }
  }, [careLevel]);

  return (
    <div className=" w-11/12 min-h-screen mx-auto my-10">
      <h2 className="text-4xl font-semibold text-center pb-6 text-green-700">
        🌱 All Plant List
      </h2>
      <div className=" flex items-center justify-center gap-1 pb-8">
        <span className=" text-lg font-semibold">Sort By :</span>
        <select
          onChange={(e) => setCareLevel(e.target.value)}
          className="select select-bordered cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled>
            care level
          </option>

          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="difficult">Difficult</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Plant Image</th>
              <th>Plant Name</th>
              <th>Category</th>
              <th>Watering Frequency</th>
              <th>View Details</th>
            </tr>
          </thead>
          {allPlantsLoading ? (
            <div className=" flex items-center justify-center h-screen ">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          ) : (
            <tbody>
              {/* row 1 */}

              {plants.map((plant) => (
                <tr key={plant._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask  rounded-3xl h-20 w-22">
                          <img src={plant.image} alt="Plant Image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{plant.name}</td>
                  <td>{plant.category}</td>
                  <td>{plant.wateringFrequency}</td>
                  <td>
                    <Link
                      to={`/viewDetails/${plant._id}`}
                      className="btn bg-green-700 text-white"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default AllPlants;

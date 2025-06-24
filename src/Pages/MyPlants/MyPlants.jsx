import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosInstance from "../../Hooks/AxiosInstance";

const MyPlants = () => {
  const { users } = use(AuthContext);
  const axiosSecure = useAxiosInstance();

  const [plants, setPlants] = useState([]);
  const [myPlantsLoading, setMyPlantsLoading] = useState(true);

  useEffect(() => {
    axiosSecure
      .get(`/email/${users.email}`)
      .then((res) => {
        setPlants(res.data);
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
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plant-tracker-server-umber.vercel.app/plants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const filtering = plants.filter((plant) => plant._id !== id);
              setPlants(filtering);
              Swal.fire({
                title: "Deleted!",
                text: "Your Plant has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="p-6 min-h-screen max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
        My Plants ({plants.length})
      </h1>
      {myPlantsLoading ? (
        <div className=" flex items-center justify-center h-screen ">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plants.map((plant) => (
            <div
              key={plant._id}
              className="  rounded-xl shadow-lg overflow-hidden"
            >
              <img src={plant.image} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h2 className="text-xl font-bold text-green-800">
                  {plant.name}
                </h2>

                <ul className=" mt-1 flex flex-col gap-2 text-xs">
                  <li>
                    <span className="text-sm font-semibold">care Level</span> :{" "}
                    {plant.careLevel}
                  </li>
                  <li>
                    <span className="text-sm font-semibold">Category</span> :{" "}
                    {plant.category}
                  </li>
                  <li>
                    <span className="text-sm font-semibold">Description</span> :{" "}
                    {plant.description}
                  </li>
                  <li>
                    <span className="text-sm font-semibold">
                      Watering Frequency
                    </span>{" "}
                    : {plant.wateringFrequency}
                  </li>
                </ul>

                <div className="mt-4 flex justify-between">
                  <Link
                    to={`/updatePlants/${plant._id}`}
                    className="btn bg-green-700 text-white "
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(plant._id)}
                    className="btn bg-red-700 text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlants;

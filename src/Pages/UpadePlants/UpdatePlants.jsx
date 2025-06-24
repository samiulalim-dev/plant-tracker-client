import React, { use } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdatePlants = () => {
  const { users } = use(AuthContext);
  const plants = useLoaderData();
  //   console.log(plants._id);
  const handleUpdate = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const name = e.target.name.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const careLevel = e.target.careLevel.value;
    const wateringFrequency = e.target.wateringFrequency.value;
    const lastDate = e.target.lastDate.value;
    const nextDate = e.target.nextDate.value;
    const healthStatus = e.target.healthStatus.value;
    const email = e.target.email.value;
    const userName = e.target.userName.value;
    const updatePlants = {
      image,
      name,
      category,
      description,
      careLevel,
      wateringFrequency,
      lastDate,
      nextDate,
      healthStatus,
      email,
      userName,
    };
    // console.log(updatePlants);

    // modifiedCount;
    fetch(
      `https://plant-tracker-server-umber.vercel.app/plants/${plants._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatePlants),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your plant update has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h2 className=" my-10 text-green-700 text-center font-semibold text-4xl">
        Update Plants
      </h2>
      <div className="card bg-green-50   w-11/12 lg:w-3/5 my-10 mx-auto shrink-0 shadow-2xl">
        <div className="card-body ">
          <form onSubmit={handleUpdate}>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* image */}
              <fieldset className=" fieldset ">
                <label className="label">Plant Image</label>
                <input
                  type="text"
                  defaultValue={plants.image}
                  className="input w-full"
                  placeholder="Enter Plant Image"
                  required
                  name="image"
                />
              </fieldset>
              {/* name */}
              <fieldset className=" fieldset ">
                <label className="label">Plant Name</label>
                <input
                  type="text"
                  defaultValue={plants.name}
                  className="input w-full"
                  placeholder="Enter Plant Name"
                  required
                  name="name"
                />
              </fieldset>
              {/* category */}
              <fieldset className=" fieldset ">
                <label className="label">
                  <span className="label-text">Plant Category</span>
                </label>
                <select
                  name="category"
                  className="select select-bordered w-full"
                  required
                  defaultValue={plants.category}
                >
                  <option value="" disabled>
                    Select Plant Category
                  </option>
                  <option>Succulent</option>
                  <option>Fern</option>
                  <option>Flowering</option>
                  <option>Foliage</option>
                  <option>Herb</option>
                  <option>Indoor</option>
                  <option>Outdoor</option>
                </select>
              </fieldset>
              {/* description */}
              <fieldset className=" fieldset ">
                <label className="label">Description</label>
                <textarea
                  placeholder="Write something about the plant..."
                  className="input w-full"
                  name="description"
                  defaultValue={plants.description}
                  required
                ></textarea>
              </fieldset>
              {/* Care Level */}
              <fieldset className=" fieldset ">
                <label className="label">
                  <span className="label-text">Care Level</span>
                </label>
                <select
                  name="careLevel"
                  className="select select-bordered w-full"
                  required
                  defaultValue={plants.careLevel}
                >
                  <option value="" disabled>
                    Select care level
                  </option>
                  <option value="easy">Easy</option>
                  <option value="moderate">Moderate</option>
                  <option value="difficult">Difficult</option>
                </select>
              </fieldset>
              {/* wateringFrequency */}
              <fieldset className=" fieldset ">
                <label className="label">watering Frequency</label>
                <input
                  type="text"
                  className="input w-full"
                  name="wateringFrequency"
                  placeholder="e.g.. every 3 days"
                  defaultValue={plants.wateringFrequency}
                  required
                />
              </fieldset>
              {/* Last Watered Date */}
              <fieldset className=" fieldset ">
                <label className="label">Last Watered Date</label>
                <input
                  type="date"
                  className="input w-full"
                  placeholder="Enter Last Watered Date"
                  defaultValue={plants.lastDate}
                  required
                  name="lastDate"
                />
              </fieldset>
              {/* Next Watered Date */}
              <fieldset className=" fieldset ">
                <label className="label">Next Watered Date</label>
                <input
                  type="date"
                  className="input w-full"
                  placeholder="Enter Next Watered Date"
                  required
                  name="nextDate"
                  defaultValue={plants.nextDate}
                />
              </fieldset>
              {/* health status */}
              <fieldset className=" fieldset ">
                <label className="label">Health Status</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter Health Status"
                  required
                  name="healthStatus"
                  defaultValue={plants.healthStatus}
                />
              </fieldset>
              {/* User Email */}
              <fieldset className=" fieldset ">
                <label className="label">User Email</label>
                <input
                  type="text"
                  value={users?.email}
                  className="input w-full"
                  placeholder="text"
                  readOnly
                  name="email"
                />
              </fieldset>
              {/* User Name */}
              <fieldset className=" fieldset ">
                <label className="label">User Name</label>
                <input
                  value={users?.displayName}
                  type="text"
                  className="input w-full"
                  placeholder="text"
                  readOnly
                  name="userName"
                />
              </fieldset>
            </div>
            <button
              type="submit"
              className="btn bg-green-700 text-white w-full rounded-4xl mt-4"
            >
              Update Plant
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePlants;

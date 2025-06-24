import React from "react";
import { useLoaderData } from "react-router";

const ViewDetails = () => {
  const plantDetails = useLoaderData();
  const {
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
  } = plantDetails;
  //   console.log(plantDetails);
  return (
    <div className="lg:max-w-4xl w-11/12  mx-auto my-10 p-6 bg-white shadow-2xl rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt=""
          className="rounded-xl w-full h-auto object-cover max-h-96 border shadow-md"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-green-700">{name}</h2>
        <p className="text-sm text-gray-500 italic">{category}</p>
        <p className="text-gray-700">{description}</p>

        <div className="mt-4">
          <h4 className="font-semibold text-lg text-gray-800">
            Plant Care Info:
          </h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <span className="font-semibold">Care Level:</span> {careLevel}
            </li>
            <li>
              <span className="font-semibold">Watering Frequency:</span>{" "}
              {wateringFrequency}
            </li>
            <li>
              <span className="font-semibold">Last Watered:</span> {lastDate}
            </li>
            <li>
              <span className="font-semibold">Next Watering:</span> {nextDate}
            </li>
            <li>
              <span className="font-semibold">Health Status:</span>{" "}
              {healthStatus}
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-lg text-gray-800">User Info:</h4>
          <p className="text-gray-600">
            <span className="font-semibold">User Name:</span> {userName}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span> {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

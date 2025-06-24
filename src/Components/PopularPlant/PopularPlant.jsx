import React, { useEffect, useState } from "react";

const PopularPlant = () => {
  const [popularPlants, setPopularPlants] = useState([]);
  const [popularLoading, setPopularLoading] = useState(true);
  useEffect(() => {
    fetch("./popularPlants.json")
      .then((res) => res.json())
      .then((data) => {
        setPopularPlants(data);
        setPopularLoading(false);
      });
  }, []);
  return (
    <section className=" px-4 py-12">
      <h2 className="text-4xl font-bold text-green-700 text-center mb-6">
        🌿Popular Plants
      </h2>
      <p className="text-center text-gray-600 mb-10 text-lg">
        Start your plant journey with these low-maintenance and Popular greens!
      </p>
      {popularLoading ? (
        <div className=" flex items-center justify-center h-screen ">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularPlants.map((plant, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-xl  hover:shadow-lg "
            >
              <img
                src={plant.image}
                alt=""
                className="w-full rounded-t-xl h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-green-800 mb-1">
                  {plant.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  Care Difficulty:{" "}
                  <span className="font-medium">{plant.difficulty}</span>
                </p>
                <p className="text-gray-700 text-sm italic">
                  🌱Tip: {plant.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularPlant;

import React, { use, useEffect, useState } from "react";
import { data } from "react-router";

const QuickTips = () => {
  // const tips = use(fetchTips);
  const [tips, setTips] = useState([]);
  const [quickLoading, setQuickLoading] = useState(true);
  useEffect(() => {
    fetch("./tips.json")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setQuickLoading(false);
      });
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-extrabold text-green-700 text-center mb-3">
        🌿 Quick Plant Care Tips
      </h2>
      <p className="text-center text-gray-600 mb-10 text-lg">
        A few helpful reminders to keep your plants happy and healthy every day.
      </p>
      {quickLoading ? (
        <div className=" flex items-center justify-center h-screen ">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-700">{tip.text}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default QuickTips;

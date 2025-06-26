import React, { useState } from "react";

const seasons = [
  {
    name: "Summer ☀️",
    tips: [
      "Water plants early morning or late evening.",
      "Avoid direct sunlight for sensitive plants.",
      "Mist leaves for extra humidity.",
    ],
    bg: "bg-yellow-100",
  },
  {
    name: "Rainy 🌧️",
    tips: [
      "Ensure proper drainage to avoid root rot.",
      "Watch out for fungal diseases.",
      "Reduce watering frequency.",
    ],
    bg: "bg-blue-100",
  },
  {
    name: "Winter ❄️",
    tips: [
      "Place plants in sunny areas.",
      "Reduce watering as soil dries slower.",
      "Keep plants away from cold drafts.",
    ],
    bg: "bg-gray-100",
  },
  {
    name: "Autumn 🍂",
    tips: [
      "Prune dead leaves and branches.",
      "Fertilize before winter sets in.",
      "Repot if needed to refresh soil.",
    ],
    bg: "bg-orange-100",
  },
];

const SeasonalPlantCare = () => {
  const [activeSeason, setActiveSeason] = useState(seasons[0]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
        Seasonal Plant Care Guide
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {seasons.map((season) => (
          <button
            key={season.name}
            onClick={() => setActiveSeason(season)}
            className={`px-4 py-2 cursor-pointer rounded-full border ${
              activeSeason.name === season.name
                ? "bg-green-600 text-white"
                : "bg-white text-green-700 border-green-500"
            } transition`}
          >
            {season.name}
          </button>
        ))}
      </div>

      {/* Tips Card */}
      <div
        className={`rounded-lg shadow-md p-6 transition-all duration-300 ${activeSeason.bg}`}
      >
        <h3 className="text-xl font-semibold mb-4 text-green-800">
          Tips for {activeSeason.name}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {activeSeason.tips.map((tip, index) => (
            <li key={index}>✅ {tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeasonalPlantCare;

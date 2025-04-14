"use client";

export default function Head() {
  return (
    <div className="flex items-center justify-between px-3 py-2 bg-blue-50 shadow-md">
      <div className="flex items-center space-x-3">
        <img src="card.png" alt="" />

        <h1 className="text-2xl font-semibold text-gray-800">
          <span className="text-blue-600 font-bold">Flash</span>
          <span className="text-gray-700">Learn</span>
        </h1>
      </div>
    </div>
  );
}

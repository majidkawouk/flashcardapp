"use client";

export default function Deck() {
  return (
    <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-rows-3 w-full min-h-screen bg-gradient-to-br from-blue-100 to-blue-600">
      {/* Container for stacking */}
      <div className="relative group w-56 h-72 ml-20 mt-14">
        {/* Orange background card */}
        <div className="absolute -top-4 -left-4 w-56 h-72 bg-yellow-300 rotate-[10deg] rounded-xl z-0 transition-all duration-500 ease-in-out group-hover:-top-6 group-hover:-left-6 group-hover:rotate-[15deg] opacity-70" ></div>

        {/* Main yellow card */}
        <div className="relative w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform transform cursor-pointer z-10">
          <div className="h-full flex flex-col items-center justify-center space-y-3">
            <div className="absolute top-2 right-2 bg-orange-300 text-xs px-2 py-1 rounded-lg shadow">
              15 cards
            </div>
            <div className="text-5xl">⚡</div>
            <h1 className="font-bold text-center">JavaScript Pack</h1>
            <button className="py-2 bg-white mt-5 px-6 rounded-md text-sm shadow">
              Try
            </button>
          </div>
        </div>
      </div>
     {/* English Pack */}
<div className="relative group w-56 h-72 ml-20 mt-14">
  <div className="absolute -top-4 -left-4 w-56 h-72 bg-blue-300 rotate-[10deg] rounded-xl z-0 transition-all duration-500 ease-in-out group-hover:-top-6 group-hover:-left-6 group-hover:rotate-[15deg] opacity-70"></div>
  <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform transform cursor-pointer z-10">
    <div className="h-full flex flex-col items-center justify-center space-y-3">
      <div className="absolute top-2 right-2 bg-blue-400 text-xs px-2 py-1 rounded-lg shadow">20 cards</div>
      <div className="text-5xl">📘</div>
      <h1 className="font-bold text-center">English Basics</h1>
      <button className="py-2 bg-white mt-5 px-6 rounded-md text-sm shadow">Try</button>
    </div>
  </div>
</div>

{/* Spanish Pack */}
<div className="relative group w-56 h-72 ml-20 mt-14">
  <div className="absolute -top-4 -left-4 w-56 h-72 bg-red-300 rotate-[10deg] rounded-xl z-0 transition-all duration-500 ease-in-out group-hover:-top-6 group-hover:-left-6 group-hover:rotate-[15deg] opacity-70"></div>
  <div className="relative w-full h-full bg-gradient-to-br from-red-100 to-red-300 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform transform cursor-pointer z-10">
    <div className="h-full flex flex-col items-center justify-center space-y-3">
      <div className="absolute top-2 right-2 bg-red-400 text-xs px-2 py-1 rounded-lg shadow">18 cards</div>
      <div className="text-5xl">🇪🇸</div>
      <h1 className="font-bold text-center">Spanish Pack</h1>
      <button className="py-2 bg-white mt-5 px-6 rounded-md text-sm shadow">Try</button>
    </div>
  </div>
</div>

{/* Arabic Pack */}
<div className="relative group w-56 h-72 ml-20 mt-14">
  <div className="absolute -top-4 -left-4 w-56 h-72 bg-green-300 rotate-[10deg] rounded-xl z-0 transition-all duration-500 ease-in-out group-hover:-top-6 group-hover:-left-6 group-hover:rotate-[15deg] opacity-70"></div>
  <div className="relative w-full h-full bg-gradient-to-br from-green-100 to-green-300 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform transform cursor-pointer z-10">
    <div className="h-full flex flex-col items-center justify-center space-y-3">
      <div className="absolute top-2 right-2 bg-green-400 text-xs px-2 py-1 rounded-lg shadow">25 cards</div>
      <div className="text-5xl">🕌</div>
      <h1 className="font-bold text-center">Arabic Pack</h1>
      <button className="py-2 bg-white mt-5 px-6 rounded-md text-sm shadow">Try</button>
    </div>
  </div>
</div>

{/* Animals Pack */}
<div className="relative group w-56 h-72 ml-20 mt-14">
  <div className="absolute -top-4 -left-4 w-56 h-72 bg-orange-300 rotate-[10deg] rounded-xl z-0 transition-all duration-500 ease-in-out group-hover:-top-6 group-hover:-left-6 group-hover:rotate-[15deg] opacity-70"></div>
  <div className="relative w-full h-full bg-gradient-to-br from-orange-100 to-orange-300 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform transform cursor-pointer z-10">
    <div className="h-full flex flex-col items-center justify-center space-y-3">
      <div className="absolute top-2 right-2 bg-orange-400 text-xs px-2 py-1 rounded-lg shadow">12 cards</div>
      <div className="text-5xl">🐾</div>
      <h1 className="font-bold text-center">Animals Pack</h1>
      <button className="py-2 bg-white mt-5 px-6 rounded-md text-sm shadow">Try</button>
    </div>
  </div>
</div>

{/* Fun Facts Pack */}
<div className="relative group w-56 h-72 ml-20 mt-14">
  <div className="absolute -top-4 -left-4 w-56 h-72 bg-purple-300 rotate-[10deg] rounded-xl z-0 transition-all duration-500 ease-in-out group-hover:-top-6 group-hover:-left-6 group-hover:rotate-[15deg] opacity-70"></div>
  <div className="relative w-full h-full bg-gradient-to-br from-purple-100 to-purple-300 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform transform cursor-pointer z-10">
    <div className="h-full flex flex-col items-center justify-center space-y-3">
      <div className="absolute top-2 right-2 bg-purple-400 text-xs px-2 py-1 rounded-lg shadow">10 cards</div>
      <div className="text-5xl">🧠</div>
      <h1 className="font-bold text-center">Fun Facts</h1>
      <button className="py-2 bg-white mt-5 px-6 rounded-md text-sm shadow">Try</button>
    </div>
  </div>
</div>

      
    </div>
  );
}
 
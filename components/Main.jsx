"use client"

import { useRouter } from "next/navigation"
export default function ain() {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push("/deck")
  }
  const handleClick2 = (e) => {
    e.preventDefault()
    router.push("/createdeck")
  }
  const handleClick3 = (e) => {
    e.preventDefault()
    router.push("/customdeck")
  }
  return (
    <div className="bg-gradient-to-r from-[#c9e0ff] to-[#d1d1f3] w-full min-h-screen flex flex-col items-center justify-start py-10 px-6 text-slate-800">
        <div className="absolute rotate-12 transform">

  <img src="sec.png" className="opacity-[0.1]" alt="" />
</div>
<div className="absolute right-10 rotate-12 transform">
            
            <img src="flash-card.png" className="opacity-[0.1]" alt="" />
          </div>
          <div className="absolute bottom-3 rotate-12 transform">
            
            <img src="flash-card.png" className="opacity-[0.1]" alt="" />
          </div>

      <h1 className="text-4xl font-bold mb-4 text-center">👋 Welcome to FlashLearn</h1>
      <p className="text-lg text-center mb-8">
        Your personal space to study smarter — not harder.
      </p>
      <div className="text-base space-y-4 max-w-2xl">
        
        <p className="font-bold">With FlashLearn, you can:</p>
        <ul className="list-disc list-inside space-y-1">
          <li className="text-xl font-semibold">Create your own flashcard decks for anything you're learning</li>
          <li className="text-xl font-semibold">Practice with spaced repetition to boost memory</li>
          <li className="text-xl font-semibold">Track your progress and master topics over time</li>
        </ul>
        <div className="absolute left-18 rotate-12 transform">
            
            <img src="flash-card.png" className="opacity-[0.1]" alt="" />
          </div>
        <p>To help you get started, we’ve included two example decks:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>📘 <strong>Spanish Basics</strong> – a beginner-friendly set of essential Spanish words and phrases</li>
          <li>💻 <strong>JavaScript Essentials</strong> – key concepts and syntax for getting confident with coding</li>
        </ul>

        <p className="mt-4">👉 Explore them, try a study session, or start building your own deck from scratch!</p>
        <p className="mt-4 font-semibold text-lg">Ready to learn your way? Let’s go 🚀</p>
      </div>

      <div className="mt-8 flex gap-6">
        <button onClick={(e)=>handleClick(e)} className="z-22 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 ">
          Explore Decks
        </button>
        <button onClick={(e)=>handleClick2(e)} className="z-200 px-6 py-3 bg-white text-black border border-black rounded-xl hover:bg-gray-400   ">
          Create New Deck

        </button>
      
        <button onClick={(e)=>handleClick3(e)} className="z-200 px-6 py-3 bg-white text-black border border-black rounded-xl hover:bg-gray-400   ">
          View Costum Decks

        </button>
      

      </div>

    </div>
  )}
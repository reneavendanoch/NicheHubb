import { Trophy, Crown, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        NICHEHUBB
      </h1>
      <p className="text-2xl md:text-4xl text-center mb-12">
        The Pornhub of Sports
      </p>
      <div className="flex gap-6 flex-wrap justify-center">
        <button className="bg-purple-600 hover:bg-purple-700 px-10 py-5 rounded-2xl text-xl font-bold flex items-center gap-3">
          <Trophy className="w-8 h-8" /> Join as Athlete
        </button>
        <button className="border-2 border-white hover:bg-white hover:text-black px-10 py-5 rounded-2xl text-xl font-bold flex items-center gap-3">
          <Crown className="w-8 h-8" /> Explore Athletes
        </button>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl text-center">
        <div><Zap className="w-20 h-20 mx-auto text-yellow-400 mb-4" /><p className="text-lg">Strava & Garmin Auto-Import</p></div>
        <div><Crown className="w-20 h-20 mx-auto text-pink-400 mb-4" /><p className="text-lg">Fan Subscriptions</p></div>
        <div><Trophy className="w-20 h-20 mx-auto text-green-400 mb-4" /><p className="text-lg">Real Contracts & Scouting</p></div>
      </div>
    </div>
  )
}

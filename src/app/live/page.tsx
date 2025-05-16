"use client"

import { Bell, User, Video, Play, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function LivePage() {
  const recentRecordings = [
    {
      id: 1,
      date: "2024-01-20",
      time: "14:30",
      isNew: true,
    },
    {
      id: 2,
      date: "2024-01-20",
      time: "12:15",
      isNew: true,
    },
    {
      id: 3,
      date: "2024-01-20",
      time: "10:00",
      isNew: false,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white flex">
      {/* Sidebar */}
      <div className="w-20 md:w-64 border-r border-white/10 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-white/10 flex items-center justify-center md:justify-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
            Logo
          </div>
          <h1 className="text-xl font-bold hidden md:block">GuardianEye</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2">
          <ul className="space-y-2">
            {/* <li>
              <Link
                href="/"
                className="flex items-center justify-center md:justify-start gap-3 px-4 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                <Video size={20} className="rotate-0" />
                <span className="hidden md:block">Dashboard</span>
              </Link>
            </li> */}
            <li>
              <Link
                href="/live"
                className="flex items-center justify-center md:justify-start gap-3 px-4 py-2 rounded-lg bg-white/10 text-white"
              >
                <Video size={20} />
                <span className="hidden md:block">Live</span>
              </Link>
            </li>
            <li>
              <Link
                href="/notifications"
                className="flex items-center justify-center md:justify-start gap-3 px-4 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                <Bell size={20} />
                <span className="hidden md:block">Notification</span>
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="flex items-center justify-center md:justify-start gap-3 px-4 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                <User size={20} />
                <span className="hidden md:block">Account</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Live Stream */}
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Live Stream</h1>
            <div className="text-sm text-gray-400 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Camera Active
            </div>
          </div>

          {/* Video Stream */}
          <div className="aspect-video bg-black/50 rounded-lg overflow-hidden flex items-center justify-center mb-4">
            <div className="text-gray-500 text-lg">1920 × 1080</div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4">
            <button className="p-3 bg-[#1f2937] rounded-full hover:bg-[#1f2937]/80 transition-colors">
              <Play size={20} className="fill-white" />
            </button>
          </div>
        </div>

        {/* Right Sidebar - Recent Recordings */}
        <div className="w-full md:w-72 border-t md:border-t-0 md:border-l border-white/10 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Motion Recordings</h2>
            <div className="flex gap-2">
              <button className="text-xs bg-[#1f2937] px-2 py-1 rounded hover:bg-[#1f2937]/80 transition-colors">
                Most Recent
              </button>
              <button className="text-xs bg-transparent px-2 py-1 rounded text-gray-400 hover:bg-white/5 transition-colors">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Recording Thumbnails */}
          <div className="space-y-3">
            {recentRecordings.map((recording) => (
              <div key={recording.id} className="group cursor-pointer">
                <div className="relative aspect-video bg-gray-800 rounded overflow-hidden flex items-center justify-center text-gray-500 text-sm mb-1">
                  320 × 180
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play size={24} className="text-white" />
                  </div>
                  {recording.isNew && (
                    <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-[#00a3ff] text-white text-[10px] rounded">
                      NEW
                    </div>
                  )}
                </div>
                <div className="text-xs text-gray-400">
                  {recording.date} {recording.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { ArrowLeft, Calendar, Filter, Search, Camera, Shield, Users, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  const events = [
    {
      id: 1,
      type: "Motion Detected",
      location: "Front Door",
      timestamp: "Today, 2:45 PM",
      icon: Camera,
      color: "blue",
    },
    {
      id: 2,
      type: "User Logged In",
      user: "Admin",
      timestamp: "Today, 10:30 AM",
      icon: Users,
      color: "purple",
    },
    {
      id: 3,
      type: "System Armed",
      user: "Admin",
      timestamp: "Today, 8:15 AM",
      icon: Shield,
      color: "green",
    },
    {
      id: 4,
      type: "Motion Detected",
      location: "Back Yard",
      timestamp: "Yesterday, 9:45 PM",
      icon: Camera,
      color: "blue",
    },
    {
      id: 5,
      type: "System Disarmed",
      user: "Admin",
      timestamp: "Yesterday, 6:30 PM",
      icon: Shield,
      color: "red",
    },
    {
      id: 6,
      type: "User Logged Out",
      user: "Admin",
      timestamp: "Yesterday, 6:25 PM",
      icon: Users,
      color: "purple",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white">
      {/* Header */}
      <header className="border-b border-white/10 p-4">
        <div className="container mx-auto flex items-center gap-4">
          <Link href="/dashboard" className="p-2 rounded-full hover:bg-white/10">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold">History</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search history..."
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4318d1]/50"
              />
            </div>
            <div className="flex gap-2">
              <button className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm flex items-center gap-2 hover:bg-white/10">
                <Filter size={16} />
                <span>Filter</span>
              </button>
              <button className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm flex items-center gap-2 hover:bg-white/10">
                <Calendar size={16} />
                <span>Date Range</span>
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Timeline</h3>

            <div className="bg-white/5 rounded-xl border border-white/10 p-4">
              <div className="flex justify-between items-center mb-4">
                <button className="p-1 rounded-full hover:bg-white/10">
                  <ChevronLeft size={20} />
                </button>
                <h4 className="font-medium">May 15, 2025</h4>
                <button className="p-1 rounded-full hover:bg-white/10">
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="relative h-16 mb-4">
                {/* Timeline bar */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2"></div>

                {/* Timeline events */}
                <div className="absolute top-0 left-[10%] w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-0 left-[25%] w-4 h-4 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-0 left-[40%] w-4 h-4 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-0 left-[70%] w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

                {/* Time markers */}
                <div className="absolute bottom-0 left-0 text-xs text-gray-400">12:00 AM</div>
                <div className="absolute bottom-0 left-1/4 text-xs text-gray-400 -translate-x-1/2">6:00 AM</div>
                <div className="absolute bottom-0 left-1/2 text-xs text-gray-400 -translate-x-1/2">12:00 PM</div>
                <div className="absolute bottom-0 left-3/4 text-xs text-gray-400 -translate-x-1/2">6:00 PM</div>
                <div className="absolute bottom-0 right-0 text-xs text-gray-400">11:59 PM</div>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h3 className="font-medium">Event History</h3>
              <button className="text-xs text-[#00a3ff] hover:underline">Export</button>
            </div>

            {events.map((event) => {
              const IconComponent = event.icon
              let bgColor = "bg-blue-500/10"
              let textColor = "text-blue-500"

              if (event.color === "purple") {
                bgColor = "bg-purple-500/10"
                textColor = "text-purple-500"
              } else if (event.color === "green") {
                bgColor = "bg-green-500/10"
                textColor = "text-green-500"
              } else if (event.color === "red") {
                bgColor = "bg-red-500/10"
                textColor = "text-red-500"
              }

              return (
                <div key={event.id} className="p-4 border-b border-white/10 hover:bg-white/5">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center ${textColor}`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{event.type}</h4>
                          <p className="text-xs text-gray-400">
                            {event.location || event.user} • {event.timestamp}
                          </p>
                        </div>
                        <button className="text-xs text-[#00a3ff] hover:underline">Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className="p-4 flex justify-between items-center">
              <button className="text-sm flex items-center gap-1 text-gray-400 hover:text-white">
                <ChevronLeft size={16} />
                <span>Previous</span>
              </button>
              <div className="text-sm">Page 1 of 5</div>
              <button className="text-sm flex items-center gap-1 text-[#00a3ff] hover:underline">
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

"use client"

import { AlertTriangle, ArrowLeft, Calendar, Filter, Search, Camera, Shield } from "lucide-react"
import Link from "next/link"

export default function AlertsPage() {
  const alerts = [
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
      type: "System Warning",
      location: "Back Yard Camera",
      timestamp: "Today, 1:30 PM",
      icon: AlertTriangle,
      color: "yellow",
    },
    {
      id: 3,
      type: "Motion Detected",
      location: "Garage",
      timestamp: "Yesterday, 11:20 PM",
      icon: Camera,
      color: "blue",
    },
    {
      id: 4,
      type: "System Armed",
      location: "All Zones",
      timestamp: "Yesterday, 8:00 PM",
      icon: Shield,
      color: "green",
    },
    {
      id: 5,
      type: "Battery Low",
      location: "Living Room Camera",
      timestamp: "Yesterday, 3:15 PM",
      icon: AlertTriangle,
      color: "yellow",
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
          <h1 className="text-xl font-bold">Alerts</h1>
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
                placeholder="Search alerts..."
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

          {/* Alerts List */}
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h3 className="font-medium">Recent Alerts</h3>
              <button className="text-xs text-[#00a3ff] hover:underline">Mark All as Read</button>
            </div>

            {alerts.map((alert) => {
              const IconComponent = alert.icon
              let bgColor = "bg-blue-500/10"
              let textColor = "text-blue-500"

              if (alert.color === "yellow") {
                bgColor = "bg-yellow-500/10"
                textColor = "text-yellow-500"
              } else if (alert.color === "green") {
                bgColor = "bg-green-500/10"
                textColor = "text-green-500"
              } else if (alert.color === "red") {
                bgColor = "bg-red-500/10"
                textColor = "text-red-500"
              }

              return (
                <div key={alert.id} className="p-4 border-b border-white/10 hover:bg-white/5">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center ${textColor}`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{alert.type}</h4>
                          <p className="text-xs text-gray-400">
                            {alert.location} • {alert.timestamp}
                          </p>
                        </div>
                        <button className="text-xs text-[#00a3ff] hover:underline">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className="p-4 text-center">
              <button className="text-sm text-[#00a3ff] hover:underline">Load More</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

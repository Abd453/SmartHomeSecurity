"use client"

import { Bell, User, Video } from "lucide-react"
import Link from "next/link"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      location: "Living Room",
      date: "2024-01-20",
      time: "14:30",
      isNew: false,
      hasRecording: true,
    },
    {
      id: 2,
      location: "Front Door",
      date: "2024-01-20",
      time: "12:15",
      isNew: true,
      hasRecording: true,
    },
    {
      id: 3,
      location: "Backyard",
      date: "2024-01-20",
      time: "10:00",
      isNew: false,
      hasRecording: true,
    },
    {
      id: 4,
      location: "Garage",
      date: "2024-01-19",
      time: "23:45",
      isNew: false,
      hasRecording: false,
    },
    {
      id: 5,
      location: "Kitchen",
      date: "2024-01-19",
      time: "21:30",
      isNew: false,
      hasRecording: true,
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
                <Home size={20} />
                <span className="hidden md:block">Dashboard</span>
              </Link>
            </li> */}
            <li>
              <Link
                href="/live"
                className="flex items-center justify-center md:justify-start gap-3 px-4 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                <Video size={20} />
                <span className="hidden md:block">Live</span>
              </Link>
            </li>
            <li>
              <Link
                href="/notifications"
                className="flex items-center justify-center md:justify-start gap-3 px-4 py-2 rounded-lg bg-white/10 text-white"
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
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Notifications</h1>
            <div className="text-sm text-gray-400">
              <span className="text-[#00a3ff]">2</span> new alerts
            </div>
          </div>

          <h2 className="text-lg font-medium mb-4">Recent Motion Detections</h2>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="bg-[#111827] rounded-xl overflow-hidden border border-white/10">
                <div className="flex flex-col md:flex-row">
                  {/* Image placeholder */}
                  <div className="md:w-64 aspect-video bg-gray-800 flex items-center justify-center text-gray-500 text-sm">
                    400 × 225
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">Motion detected in {notification.location}</h3>
                          {notification.isNew && (
                            <span className="px-2 py-0.5 bg-[#00a3ff] text-white text-xs rounded-full">New</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 mt-1">
                          {notification.date} • {notification.time}
                        </p>
                      </div>
                    </div>

                    {notification.hasRecording && (
                      <button className="self-start mt-4 px-4 py-2 bg-[#1f2937] hover:bg-[#1f2937]/80 rounded-lg text-sm text-white transition-colors">
                        View Recording
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Bell, User, Video} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AccountPage() {
  const [allMotionAlerts, setAllMotionAlerts] = useState(true)
  const [timeBasedAlerts, setTimeBasedAlerts] = useState(false)
  const [soundAlerts, setSoundAlerts] = useState(true)
  const storageUsed = 85

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
                <Settings size={20} />
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
                className="flex items-center justify-center md:justify-start gap-3 px-4 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                <Bell size={20} />
                <span className="hidden md:block">Notification</span>
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="flex items-center justify-center md:justify-start gap-3 px-4 py-2 rounded-lg bg-white/10 text-white"
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>

          {/* User Profile */}
          <div className="bg-[#111827] rounded-xl p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center text-gray-400">JD</div>
              <div>
                <h2 className="font-medium">John Doe</h2>
                <p className="text-sm text-gray-400">john.doe@gmail.com</p>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 bg-[#1f2937] hover:bg-[#1f2937]/80 rounded text-sm transition-colors">
              Sign Out
            </button>
          </div>

          {/* Device Management */}
          <div className="bg-[#111827] rounded-xl p-6 mb-6">
            <h2 className="font-medium mb-4">Device Management</h2>

            <div className="border-b border-white/10 pb-4 mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Living Room Camera</h3>
                  <p className="text-sm text-gray-400">Last active: 2 minutes ago</p>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-xs text-gray-400">Online</span>
                </div>
              </div>
            </div>

            <button className="px-4 py-2 bg-[#1f2937] hover:bg-[#1f2937]/80 rounded text-sm transition-colors w-full">
              Test Connection
            </button>
          </div>

          {/* Notification Preferences */}
          <div className="bg-[#111827] rounded-xl p-6 mb-6">
            <h2 className="font-medium mb-4">Notification Preferences</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>All Motion Alerts</span>
                <button
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${allMotionAlerts ? "bg-[#00a3ff]" : "bg-gray-700"}`}
                  onClick={() => setAllMotionAlerts(!allMotionAlerts)}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transform transition-transform ${allMotionAlerts ? "translate-x-6" : "translate-x-0"}`}
                  ></div>
                </button>
              </div>

              <div className="flex justify-between items-center">
                <span>Time-based Alerts</span>
                <button
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${timeBasedAlerts ? "bg-[#00a3ff]" : "bg-gray-700"}`}
                  onClick={() => setTimeBasedAlerts(!timeBasedAlerts)}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transform transition-transform ${timeBasedAlerts ? "translate-x-6" : "translate-x-0"}`}
                  ></div>
                </button>
              </div>

              <div className="flex justify-between items-center">
                <span>Sound Alerts</span>
                <button
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${soundAlerts ? "bg-[#00a3ff]" : "bg-gray-700"}`}
                  onClick={() => setSoundAlerts(!soundAlerts)}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transform transition-transform ${soundAlerts ? "translate-x-6" : "translate-x-0"}`}
                  ></div>
                </button>
              </div>
            </div>
          </div>

          {/* Storage & Recordings */}
          <div className="bg-[#111827] rounded-xl p-6 mb-6">
            <h2 className="font-medium mb-4">Storage & Recordings</h2>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span>Storage Used</span>
                <span className="text-sm">{storageUsed}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-[#00a3ff]" style={{ width: `${storageUsed}%` }}></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center">
                <span>Auto-delete after</span>
                <div className="relative">
                  <select className="appearance-none bg-gray-700 text-white rounded px-3 py-1 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#00a3ff]">
                    <option>7 days</option>
                    <option>14 days</option>
                    <option>30 days</option>
                  </select>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <button className="px-4 py-2 bg-[#1f2937] hover:bg-[#1f2937]/80 rounded text-sm transition-colors w-full">
              Clear Old Recordings
            </button>
          </div>

          {/* Security Options */}
          <div className="bg-[#111827] rounded-xl p-6">
            <h2 className="font-medium mb-4">Security Options</h2>

            <div className="space-y-3">
              <button className="px-4 py-2 bg-[#1f2937] hover:bg-[#1f2937]/80 rounded text-sm transition-colors w-full">
                Enable Two-Factor Authentication
              </button>
              <button className="px-4 py-2 bg-[#1f2937] hover:bg-[#1f2937]/80 rounded text-sm transition-colors w-full">
                Link Another Gmail Account
              </button>
              <button className="px-4 py-2 bg-[#1f2937] hover:bg-[#1f2937]/80 rounded text-sm transition-colors w-full">
                View Recent Login Activity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

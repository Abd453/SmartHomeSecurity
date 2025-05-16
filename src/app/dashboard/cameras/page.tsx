"use client"

import { Camera, ArrowLeft, MoreVertical, Pause, Volume2, Download, Maximize } from "lucide-react"
import Link from "next/link"

export default function CamerasPage() {
  const cameras = [
    { id: 1, name: "Front Door", lastMotion: "2 hours ago", status: "online" },
    { id: 2, name: "Back Yard", lastMotion: "30 minutes ago", status: "online" },
    { id: 3, name: "Garage", lastMotion: "1 day ago", status: "online" },
    { id: 4, name: "Living Room", lastMotion: "3 hours ago", status: "online" },
  ]

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white">
      {/* Header */}
      <header className="border-b border-white/10 p-4">
        <div className="container mx-auto flex items-center gap-4">
          <Link href="/dashboard" className="p-2 rounded-full hover:bg-white/10">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold">Camera Feeds</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto p-6">
        <div className="max-w-6xl mx-auto">
          {/* Featured Camera */}
          <div className="mb-8">
            <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
              <div className="relative">
                <div className="aspect-video bg-black/50 flex items-center justify-center">
                  <Camera size={64} className="text-gray-600" />
                </div>

                {/* Camera Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Front Door</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="flex items-center gap-1 text-xs text-green-500">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span> Live
                        </span>
                        <span className="text-xs text-gray-400">• 1080p</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="p-2 rounded-full hover:bg-white/10">
                        <Pause size={18} />
                      </button>
                      <button className="p-2 rounded-full hover:bg-white/10">
                        <Volume2 size={18} />
                      </button>
                      <button className="p-2 rounded-full hover:bg-white/10">
                        <Download size={18} />
                      </button>
                      <button className="p-2 rounded-full hover:bg-white/10">
                        <Maximize size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Cameras */}
          <div>
            <h3 className="text-xl font-medium mb-4">All Cameras</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cameras.map((camera) => (
                <div key={camera.id} className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
                  <div className="aspect-video bg-black/50 flex items-center justify-center">
                    <Camera size={36} className="text-gray-600" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{camera.name}</h4>
                      <button className="p-1 rounded-full hover:bg-white/10">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-xs text-gray-400">Last motion: {camera.lastMotion}</p>
                      <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-500 rounded-full">
                        {camera.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Camera Card */}
              <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 border-dashed flex flex-col items-center justify-center aspect-[4/3]">
                <div className="w-12 h-12 rounded-full bg-[#4318d1]/20 flex items-center justify-center text-[#4318d1] mb-2">
                  <Camera size={24} />
                </div>
                <p className="text-sm font-medium">Add Camera</p>
                <p className="text-xs text-gray-400 mt-1">Connect a new device</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

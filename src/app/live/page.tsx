"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Play, ChevronDown, Maximize2, Minimize2 } from "lucide-react";

export default function LivePage() {
  const recentRecordings = [
    { id: 1, date: "2024-01-20", time: "14:30", isNew: true },
    { id: 2, date: "2024-01-20", time: "12:15", isNew: false },
    { id: 3, date: "2024-01-20", time: "10:00", isNew: true },
    { id: 4, date: "2024-01-19", time: "09:00", isNew: false },
    { id: 5, date: "2024-01-19", time: "08:00", isNew: true },
  ];

  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`min-h-screen bg-[#0a0f1c] text-white flex ${isFullscreen ? "fixed inset-0 z-50" : ""}`}>
      <Sidebar />

      <div className="flex-1 flex flex-col md:flex-row">
        {/* Live Stream */}
        <div className={`flex-1 p-6 ${isFullscreen ? "fixed inset-0 z-50 bg-black" : ""} transition-all duration-300`}>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Live Stream</h1>
            <div className="text-sm text-gray-400 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Camera Active
            </div>
          </div>

          <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden flex items-center justify-center mb-4">
            <div className="text-gray-500 text-lg">1920 × 1080</div>

            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
              <Play size={50} className="text-white" />
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors bg-black/70 p-2 rounded-full"
            >
              {isFullscreen ? <Minimize2 size={25} /> : <Maximize2 size={30} />}
            </button>
          </div>
        </div>

        {/* Right Sidebar - Recent Recordings */}
        {!isFullscreen && (
          <div className="w-full md:w-72 border-t md:border-t-0 md:border-l border-white/10 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium">Motion Recordings</h2>
              <button className="flex items-center gap-1 text-xs bg-[#1f2937] px-3 py-2 rounded hover:bg-[#1f2937]/80 transition-colors">
                Most Recent <ChevronDown size={14} />
              </button>
            </div>

            <div className="space-y-3 overflow-y-scroll h-130 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
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
        )}
      </div>
    </div>
  );
}

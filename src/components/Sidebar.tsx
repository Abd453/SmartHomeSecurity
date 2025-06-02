"use client";

import { Bell, User, Video } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-20 md:w-64 border-r border-white/10 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-white/10 flex items-center justify-center md:justify-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-xl font-bold hidden md:block">GuardianEye</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2">
        <ul className="space-y-2">
          <li>
            <Link
              href="/live"
              className={`flex items-center justify-center md:justify-start gap-3 px-4 py-2 rounded-lg transition-colors ${
                pathname === "/live"
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Video size={20} />
              <span className="hidden md:block">Live</span>
            </Link>
          </li>
          <li>
            <Link
              href="/notifications"
              className={`flex items-center justify-center md:justify-start gap-3 px-4 py-2 rounded-lg transition-colors ${
                pathname === "/notifications"
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Bell size={20} />
              <span className="hidden md:block">Notification</span>
            </Link>
          </li>
          <li>
            <Link
              href="/account"
              className={`flex items-center justify-center md:justify-start gap-3 px-4 py-2 rounded-lg transition-colors ${
                pathname === "/account"
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <User size={20} />
              <span className="hidden md:block">Account</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

"use client"

import { ArrowLeft, Search, Plus, Shield, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

export default function UsersPage() {
  const users = [
    {
      id: 1,
      name: "Admin User",
      email: "admin@example.com",
      role: "Administrator",
      lastActive: "2 minutes ago",
    },
    {
      id: 2,
      name: "John Smith",
      email: "john@example.com",
      role: "Standard User",
      lastActive: "1 hour ago",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Standard User",
      lastActive: "3 days ago",
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "michael@example.com",
      role: "Guest",
      lastActive: "1 week ago",
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
          <h1 className="text-xl font-bold">Users</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          {/* Search and Add */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search users..."
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4318d1]/50"
              />
            </div>
            <button className="bg-gradient-to-r from-[#4318d1] to-[#00a3ff] rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2 hover:opacity-90">
              <Plus size={16} />
              <span>Add User</span>
            </button>
          </div>

          {/* Users List */}
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h3 className="font-medium">System Users</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 text-left text-xs text-gray-400">
                    <th className="p-4">User</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Last Active</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4318d1] to-[#00a3ff] flex items-center justify-center">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-xs text-gray-400">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {user.role === "Administrator" && <Shield size={14} className="text-[#00a3ff]" />}
                          <span className={user.role === "Administrator" ? "text-[#00a3ff]" : ""}>{user.role}</span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-400">{user.lastActive}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <button className="p-1 rounded-full hover:bg-white/10" title="Edit">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 rounded-full hover:bg-white/10 text-red-400" title="Delete">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

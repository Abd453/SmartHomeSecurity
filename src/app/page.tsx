import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0a0f1c] via-[#0a0f1c] to-[#0a0f1c]/90 p-4">
      <div className="relative w-full max-w-md">
        {/* Background glow effects */}
        <div className="absolute -top-40 -left-20 w-60 h-60 bg-[#4318d1]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-20 w-60 h-60 bg-[#00a3ff]/20 rounded-full blur-3xl"></div>

        {/* Card container */}
        <div className="relative backdrop-blur-sm bg-[#0a0f1c]/80 rounded-3xl border border-white/10 shadow-xl p-8 flex flex-col items-center">
          {/* Logo placeholder */}
          <div className="w-20 h-20 rounded-3xl bg-gray-200 flex items-center justify-center text-gray-400 mb-6">
            80 × 80
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white mb-3">GuardianEye</h1>

          {/* Welcome text */}
          <p className="text-gray-300 text-center mb-6">Welcome to your smart home security system</p>

          {/* Sign in instructions */}
          <p className="text-gray-400 text-center text-sm mb-8">
            Sign in with your Google account to start
            <br />
            monitoring your space
          </p>

          {/* Google sign in button */}
          <Link
            href="/notifications"
            className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#4318d1] to-[#00a3ff] text-white font-medium flex items-center justify-center gap-2 mb-8 hover:opacity-90 transition-opacity"
          >
            <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
              <span className="text-xs text-gray-500">G</span>
            </div>
            Continue with Google
          </Link>

          {/* Terms and privacy */}
          <p className="text-gray-400 text-xs text-center">
            By signing in, you agree to our{" "}
            <a href="#" className="text-[#00a3ff]">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#00a3ff]">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}

// middleware.ts

import { NextResponse } from "next/server";
import { betterAuth, betterAuthConfig } from "better-auth";

const authConfig: BetterAuthConfig = {
  secret: process.env.AUTH_SECRET || "default-secret",
  providers: [
    {
      name: "Google",
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorizationUrl: "https://accounts.google.com/o/oauth2/auth",
      tokenUrl: "https://oauth2.googleapis.com/token",
      userUrl: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
  ],
};

const auth = new BetterAuth(authConfig);

export async function middleware(request: Request) {
  try {
    const session = await auth.getSession(request);

    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Authentication error:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};

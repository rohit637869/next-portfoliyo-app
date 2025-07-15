import GetDatabase from "@/lib/database"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  const cookieStore = cookies()
  const response = NextResponse.redirect(new URL("/sign-in", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"))

  response.cookies.delete("user") // ✅ ye sahi tarika hai cookie delete karne ka

  return response
}

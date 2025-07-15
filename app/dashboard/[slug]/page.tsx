'use client'
// import ImageCropper from "@/components/personal/ImageCroper"
import Profile from "@/components/personal/Profile"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Bell, Earth, LogOut, Settings, StickerIcon, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import path from "path"
import NotificationsSection from '@/components/personal/NotificationsSection'
import SettingsSection from '@/components/personal/Settings'
// import { cookies } from "next/headers"

export default function DashboardLayout() {
  // const ck = cookies()
  const pathname = usePathname()
  const links = [
    {
      path: "/dashboard/profile",
      text: "Profile",
      icon: <User />,
      component: <Profile />
    }
    ,
    {
      path: "/dashboard/Notifications",
      text: "Notifications",
      icon: <Bell />,
      component: <NotificationsSection />

    },
    // {
    //   path: "/dashboard/settings",
    //   text: "Settings",
    //   icon: <Settings />,
    //   component: <SettingsSection />
    // }
  ]

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-background border-r p-6 space-y-4 shadow-md">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <Separator />

        <nav className="flex flex-col space-y-2">
          <Button onClick={(e) => e.currentTarget.querySelector('a')?.click()} variant='outline' className="justify-start ">
            <Link href='/' className="justify-center gap-3 flex">
              <Earth />
              Retun To Website
            </Link>
          </Button>
          {links.map((lnk, index) =>
            <div key={index}>
              <Button onClick={(e) => e.currentTarget.querySelector('a')?.click()} variant={pathname.startsWith(lnk.path) ? 'default' : "ghost"} className="justify-start w-full">
                <Link href={lnk.path} className="justify-center gap-3 flex">
                  {lnk.icon}
                  {lnk.text}
                </Link>
              </Button>
            </div>
          )}
          <Button onClick={(e) => e.currentTarget.querySelector('a')?.click()} variant="ghost" className="justify-start text-red-500 hover:text-red-600">
            <Link href={'/api/logout'} className="justify-center gap-3 flex">
              <LogOut className="mr-2 h-5 w-5" />

              Logout
            </Link>
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
        {
          links.find(e => pathname.startsWith(e.path))?.component
        }
        {/* Add your dashboard content here */}
      </main>
    </div>
  )
}

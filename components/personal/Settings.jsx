'use client'

import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function SettingsSection() {
  return (
    <>
      <h2 className="text-xl font-semibold">Settings - Not working right now</h2>

      {/* Account Settings */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Account</h3>
        <div className="space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="your@email.com" />
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <Input type="password" placeholder="••••••••" />
        </div>
        <Button className="mt-2">Update Account</Button>
      </div>

      <Separator />

      {/* Preferences */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Preferences</h3>
        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <Switch id="dark-mode" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="email-notify">Email Notifications</Label>
          <Switch id="email-notify" defaultChecked />
        </div>
      </div>

      <Separator />

      {/* Danger Zone */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-red-600">Danger Zone</h3>
        <Button variant="destructive">Delete Account</Button>
      </div>
    </>

  )
}

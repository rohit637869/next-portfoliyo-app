'use client'

import { Bell } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

const notifications = [
    {
        id: 1,
        title: "Welcome to RXMAT",
        description: "Your Account Created Successfully",
        time: "2 min ago",
    },
]

export default function NotificationsSection() {
    return (

        <>
        <div className="mt-4"></div>
            <ScrollArea className="h-[400px] pr-2">
                <div className="space-y-4">
                    {notifications.map((note) => (
                        <div
                            key={note.id}
                            className="border rounded-xl p-4 bg-muted/50 hover:bg-muted transition-all"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium text-base">{note.title}</h3>
                                {/* <span className="text-xs text-gray-500">{note.time}</span> */}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                                {note.description}
                            </p>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </>

    )
}

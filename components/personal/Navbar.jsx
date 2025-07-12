'use client'

import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ArrowUpRight, Badge, CirclePlay } from "lucide-react";
import { CardStack } from "../ui/card-stack";
import { CommentsCards } from "./CommentsCards";
import { ContainerTextFlip } from "../ui/container-text-flip";

export const Navbar = () => {
    return (
        <div className=" bg-muted">
            <nav className="z-50 fixed top-6 inset-x-4 h-16 max-w-screen-xl mx-auto rounded-full border border-slate-700/70 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
                <div className="h-full flex items-center justify-between mx-auto px-4">
                    <h1 className="text-2xl text-orange-500 px-3 font-bold">RXMAT</h1>
                    {/* Desktop Menu */}
                    <NavMenu className="hidden md:block" />
                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            className="hidden sm:inline-flex rounded-full"
                        >
                            Sign In
                        </Button>
                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <NavigationSheet />
                        </div>
                    </div>
                </div>
            </nav>

        </div>



    )
}

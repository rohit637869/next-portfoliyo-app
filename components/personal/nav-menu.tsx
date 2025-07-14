'use client'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";


const links = [
    {
        path: "/",
        text: "Home",
    },
    {
        path: "/blogs",
        text: "Blogs",
    },
    {
        path: "/about",
        text: "About",
    },
    {
        path: "/contact",
        text: "Contact",
    }
]

export const NavMenu = (props: NavigationMenuProps) => (

    <NavigationMenu {...props}>
        <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
            {
                links.map((link, index) => 
                    <NavigationMenuItem key={index}>
                        <NavigationMenuLink asChild>
                            <Link className={""} href={link.path}>{link.text}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                )
            }

            
        </NavigationMenuList>
    </NavigationMenu>
);

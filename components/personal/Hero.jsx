import React from 'react'
import { Button } from '../ui/button'
import { CommentsCards } from './CommentsCards'
import { ArrowUpRight, Badge, CirclePlay } from 'lucide-react'
import { ContainerTextFlip } from '../ui/container-text-flip'
import { AuroraBackground } from '../ui/aurora-background'
import { FlipWords } from '../ui/flip-words'

export default function Hero() {
    return (

        <AuroraBackground className="min-h-screen flex items-center justify-center px-6">
            <div className="flex items-center flex-col gap-2 md:flex-row">

                <div className="text-center max-w-2xl">
                    <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
                        Just released v1.0.0
                    </Badge>
                    <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold">
                        Hi, My Name is  Rohit and I am a <FlipWords words={["Software Developer", "Tech Enthusiast", "Problem Solver", "Web Architect", "Code Crafter", "Creative Thinker"]} />.

                    </h1>
                    <p className="mt-6 text-[17px] md:text-lg">
                        rom web apps to mobile UIs, from automation tools to game design — if it’s digital, I’m probably already experimenting with it. I love blending creativity with logic, whether that means crafting clean user interfaces or writing smart backend logic that just works.
                    </p>
                    <div className="mt-12 flex items-center justify-center gap-4">
                        <Button size="lg" className="rounded-full text-base">
                            Get Started <ArrowUpRight className="!h-5 !w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full text-base shadow-none"
                        >
                            <CirclePlay className="!h-5 !w-5" /> Watch Demo
                        </Button>
                    </div>
                </div>

                <CommentsCards />
            </div>

        </AuroraBackground>
    )
}

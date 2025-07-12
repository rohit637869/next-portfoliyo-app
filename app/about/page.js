import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto mt-19 px-6 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-12">About Me</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left - Profile */}
        <Card className="flex-shrink-0 w-full md:w-1/3 p-6 flex flex-col items-center text-center">
          <Avatar className="h-32 w-32 mb-4">
            <AvatarImage src="/profile.jpg" alt="Rohit Verma" />
            <AvatarFallback>RV</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-semibold mb-1">Rohit Verma</h2>
          <p className="text-muted-foreground mb-4">
            Full Stack Developer | Tech Enthusiast | Lifelong Learner
          </p>

          <div className="flex gap-4">
            <Button
              as="a"
              href="https://github.com/rohitverma"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Github size={18} /> GitHub
            </Button>

            <Button
              as="a"
              href="https://linkedin.com/in/rohitverma"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Linkedin size={18} /> LinkedIn
            </Button>
          </div>
        </Card>

        {/* Right - Content */}
        <div className="flex-1 space-y-10">
          {/* Introduction */}
          <section>
            <h3 className="text-3xl font-semibold mb-3">Hi, I'm Rohit!</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate <strong>full-stack developer</strong> with experience in building modern web and mobile applications. I enjoy solving real-world problems through technology and always stay curious about new trends like AI, cloud computing, and automation.
            </p>
            <p className="mt-4 text-muted-foreground">
              Currently pursuing my B.Tech degree, I balance my academic life with personal projects, freelancing, and gaming. When not coding, I love exploring PUBG and brainstorming startup ideas.
            </p>
          </section>

          <Separator />

          {/* Skills */}
          <section>
            <h3 className="text-3xl font-semibold mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Node.js",
                "PHP",
                "Flutter",
                "Dart",
                "C++",
                "JavaScript",
                "Tailwind CSS",
                "MySQL",
                "Firebase",
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-lg px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          <Separator />

          {/* Education */}
          <section>
            <h3 className="text-3xl font-semibold mb-4">Education</h3>
            <Card>
              <CardHeader>
                <CardTitle>Bachelor of Technology (B.Tech)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Major: Computer Science & Engineering
                </p>
                <p className="text-muted-foreground">
                  XYZ Institute of Technology, 2022 - Present
                </p>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Interests */}
          <section>
            <h3 className="text-3xl font-semibold mb-4">Interests & Hobbies</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Competitive Programming & Problem Solving</li>
              <li>Gaming — PUBG and other Battle Royale games</li>
              <li>Startup Ideas & Entrepreneurship</li>
              <li>AI & Automation</li>
              <li>Reading Tech Blogs and Tutorials</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

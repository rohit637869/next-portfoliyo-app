import { ModeToggle } from "@/components/ModeToggle";
import Blogs from "@/components/personal/Blogs";
import Certifications from "@/components/personal/Certifications";
import Contact from "@/components/personal/Contact";
import Footer from "@/components/personal/Footer";
import Hero from "@/components/personal/Hero";
import { Navbar } from "@/components/personal/Navbar";
import { Projects } from "@/components/personal/Projects";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <>
      <Hero />
      <Projects />
      <Blogs blogs={[1,2,3]} />
      <Certifications />
      <Contact />
    </>
  )
}

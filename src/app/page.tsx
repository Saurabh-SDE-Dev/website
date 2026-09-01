import { Hero } from "@/components/sections/Hero";
import { Profile } from "@/components/sections/Profile";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Architecture } from "@/components/sections/Architecture";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* 01 HERO */}
      <Hero />
      
      {/* 01 PROFILE & 02 CORE COMPETENCIES */}
      <Profile />

      {/* 03 EXPERIENCE */}
      <Experience />

      {/* 04 SELECTED WORK */}
      <Projects />

      {/* 05 ENGINEERING IMPACT & SYSTEM ARCHITECTURE */}
      <Architecture />

      {/* 06 CERTIFICATIONS, 07 EDUCATION, 08 DETAILS */}
      <Credentials />

      {/* 09 CONTACT */}
      <Contact />
    </main>
  );
}

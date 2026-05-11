import { useEffect } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/hero/Hero"
import { AboutSection } from "@/components/sections/AboutSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectsSection } from "@/components/projects/ProjectsSection"
import { EducationSection } from "@/components/sections/EducationSection"
import { ContactSection } from "@/components/layout/Contact"
import { CustomCursor } from "@/components/ui/CustomCursor"

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right")
    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="min-h-screen font-sans antialiased text-foreground">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <div className="reveal">
            <AboutSection />
          </div>
          <div className="reveal">
            <ExperienceSection />
          </div>
          <div className="reveal">
            <SkillsSection />
          </div>
          <div className="reveal">
            <ProjectsSection />
          </div>
          <div className="reveal">
            <EducationSection />
          </div>
        </main>
        <div className="reveal">
          <ContactSection />
        </div>
    </div>
  )
}

export default App

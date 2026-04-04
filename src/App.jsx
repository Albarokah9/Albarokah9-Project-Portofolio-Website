import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/hero/Hero"
import { AboutSection } from "@/components/sections/AboutSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectsSection } from "@/components/projects/ProjectsSection"
import { EducationSection } from "@/components/sections/EducationSection"
import { ContactSection } from "@/components/layout/Contact"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans antialiased text-foreground">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
        </main>
        <ContactSection />
      </div>
    </ThemeProvider>
  )
}

export default App

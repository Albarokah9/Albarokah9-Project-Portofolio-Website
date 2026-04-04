import { useState } from "react"
import { projects } from "@/data/projects"
import { ProjectCard } from "./ProjectCard"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProjectsSection() {
  const [filter, setFilter] = useState("all")
  
  const categories = [
    { id: "all", label: "All Works" },
    { id: "automation", label: "Automation", pattern: /automation|cypress|katalon|jmeter/i },
    { id: "manual", label: "Manual Testing", pattern: /manual|test plan|test cases/i },
  ]

  const filteredProjects = projects.filter(p => {
    if (filter === "all") return true
    const cat = categories.find(c => c.id === filter)
    return cat.pattern.test(p.title) || p.tags.some(t => cat.pattern.test(t))
  })

  return (
    <section id="projects" data-cy="projects-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h2 data-cy="projects-title" className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground">A collection of my recent testing and automation work.</p>
          </div>
          
          <Tabs value={filter} onValueChange={setFilter} data-cy="project-tabs" className="w-full md:w-auto">
            <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
              {categories.map(cat => (
                <TabsTrigger key={cat.id} value={cat.id}>
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

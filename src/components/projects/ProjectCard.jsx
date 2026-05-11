import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, FileText, Table } from "lucide-react"

export function ProjectCard({ project }) {
  return (
    <Card data-cy="project-card" className="group flex flex-col h-full rounded-none border-4 border-black shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all overflow-hidden bg-white">
      {/* Window Header */}
      <div className="h-10 bg-black text-white border-b-4 border-black flex items-center justify-between px-3 z-10 relative">
        <div className="flex gap-2">
          <div className="w-3 h-3 border-2 border-white bg-red-500" />
          <div className="w-3 h-3 border-2 border-white bg-yellow-500" />
          <div className="w-3 h-3 border-2 border-white bg-green-500" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest">{project.shortLabel}</span>
      </div>

      <div className="relative aspect-video overflow-hidden border-b-4 border-black">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute top-4 right-4">
           <span className="text-xs font-black text-white bg-black border-2 border-white px-2 py-1 shadow-brutal-sm">{project.date}</span>
        </div>
      </div>
      
      <CardHeader className="p-5 pb-2">
        <CardTitle data-cy="project-card-title" className="text-2xl font-display font-black uppercase tracking-tight leading-tight line-clamp-2">
          {project.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-5 pt-0 flex-grow space-y-4">
        <CardDescription data-cy="project-card-description" className="text-base font-black uppercase tracking-tight text-foreground leading-tight line-clamp-3 bg-accent inline-block p-2 border-2 border-black transition-transform group-hover:skew-x-[-10deg] group-hover:scale-105">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} data-cy="project-tag" variant="secondary" className="border-2 border-black font-black hover:bg-primary hover:text-white">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 flex flex-wrap gap-3">
        {project.github && (
          <Button variant="outline" size="sm" asChild className="h-10 border-4 border-black shadow-brutal-sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer" data-cy="project-github-link">
              <Github size={16} /> <span className="ml-2 font-black uppercase tracking-widest text-[10px]">Code</span>
            </a>
          </Button>
        )}
        {project.demo && (
          <Button variant="default" size="sm" asChild className="h-10 border-4 border-black shadow-brutal-sm">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" data-cy="project-demo-link">
              <ExternalLink size={16} /> <span className="ml-2 font-black uppercase tracking-widest text-[10px]">Demo</span>
            </a>
          </Button>
        )}
        {project.docs && (
          <Button variant="outline" size="sm" asChild className="h-10 border-4 border-black shadow-brutal-sm">
            <a href={project.docs} target="_blank" rel="noopener noreferrer">
              <FileText size={16} /> <span className="ml-2 font-black uppercase tracking-widest text-[10px]">Docs</span>
            </a>
          </Button>
        )}
        {project.spreadsheet && (
          <Button variant="outline" size="sm" asChild className="h-10 border-4 border-black shadow-brutal-sm">
            <a href={project.spreadsheet} target="_blank" rel="noopener noreferrer">
              <Table size={16} /> <span className="ml-2 font-black uppercase tracking-widest text-[10px]">Sheet</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

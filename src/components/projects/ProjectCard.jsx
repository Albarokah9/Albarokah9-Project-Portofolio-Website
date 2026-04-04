import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, FileText, Table } from "lucide-react"

export function ProjectCard({ project }) {
  return (
    <Card data-cy="project-card" className="flex flex-col h-full overflow-hidden group border-border/50 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10 bg-background/60 backdrop-blur-xl hover:-translate-y-1">
      {/* Mock macOS Window Header */}
      <div className="h-8 bg-muted/40 border-b border-border/50 flex items-center px-3 gap-1.5 z-10 relative">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]/50"></div>
      </div>

      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
           <span className="text-xs font-medium text-primary-foreground bg-primary px-3 py-1 rounded-md shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.date}</span>
        </div>
      </div>
      
      <CardHeader className="p-5 pb-2">
        <div className="flex justify-between items-start gap-2 mb-2">
           <Badge variant="outline" className="text-[10px] uppercase tracking-wider font-bold border-primary/40 text-primary bg-primary/5">
            {project.shortLabel}
          </Badge>
        </div>
        <CardTitle data-cy="project-card-title" className="text-xl leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-5 pt-0 flex-grow">
        <CardDescription data-cy="project-card-description" className="text-sm line-clamp-3 mb-5 text-muted-foreground/80">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Badge key={tag} data-cy="project-tag" variant="secondary" className="text-[10px] px-2 py-0.5 whitespace-nowrap bg-secondary/60 hover:bg-secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 flex flex-wrap gap-2">
        {project.github && (
          <Button variant="outline" size="sm" asChild className="h-8 gap-1.5 text-xs hover:text-primary hover:border-primary/50 transition-colors">
            <a href={project.github} target="_blank" rel="noopener noreferrer" data-cy="project-github-link">
              <Github size={14} /> Code
            </a>
          </Button>
        )}
        {project.demo && (
          <Button variant="default" size="sm" asChild className="h-8 gap-1.5 text-xs shadow-md hover:shadow-lg transition-all">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" data-cy="project-demo-link">
              <ExternalLink size={14} /> Demo
            </a>
          </Button>
        )}
        {project.docs && (
          <Button variant="outline" size="sm" asChild className="h-8 gap-1.5 text-xs">
            <a href={project.docs} target="_blank" rel="noopener noreferrer">
              <FileText size={14} /> Docs
            </a>
          </Button>
        )}
        {project.spreadsheet && (
          <Button variant="outline" size="sm" asChild className="h-8 gap-1.5 text-xs">
            <a href={project.spreadsheet} target="_blank" rel="noopener noreferrer">
              <Table size={14} /> Sheet
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

import { experiences } from "@/data/experience";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" data-cy="experience-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 data-cy="experience-title" className="text-3xl md:text-4xl font-bold tracking-tight">Professional Journey</h2>
          <p className="text-muted-foreground">My career path across technical testing and network engineering.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} data-cy="experience-card" className="relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <CardTitle data-cy="experience-role" className="text-xl flex items-center gap-2">
                      <Briefcase size={18} className="text-primary" />
                      {exp.role}
                    </CardTitle>
                    <CardDescription data-cy="experience-company" className="text-base font-medium text-foreground">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                    <Badge data-cy="experience-date" variant="outline" className="flex items-center gap-1.5 whitespace-nowrap">
                      <Calendar size={12} />
                      {exp.period}
                    </Badge>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} data-cy="experience-responsibilities" className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

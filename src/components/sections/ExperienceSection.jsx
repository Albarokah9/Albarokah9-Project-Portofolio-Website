import { experiences } from "@/data/experience";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" data-cy="experience-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 data-cy="experience-title" className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">Professional Journey</h2>
          <p className="text-xl text-foreground font-black uppercase tracking-tight bg-secondary p-4 border-4 border-black shadow-brutal inline-block">My career path across technical testing and network engineering.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              data-cy="experience-card" 
              className="reveal border-4 border-black shadow-brutal-lg hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-xl overflow-hidden bg-white"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-4 w-full bg-primary border-b-4 border-black" />
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <CardTitle data-cy="experience-role" className="text-2xl font-black flex items-center gap-2">
                      <Briefcase size={20} className="text-black" />
                      {exp.role}
                    </CardTitle>
                    <CardDescription data-cy="experience-company" className="text-lg font-black uppercase tracking-tight text-foreground bg-accent inline-block px-2 border-2 border-black">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                    <Badge data-cy="experience-date" variant="secondary" className="border-4 border-black font-black">
                      <Calendar size={14} className="mr-1.5" />
                      {exp.period}
                    </Badge>
                    <div className="text-xs font-black uppercase tracking-widest flex items-center gap-1 border-b-2 border-black">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {exp.achievements.map((item, i) => (
                    <li key={i} data-cy="experience-responsibilities" className="flex gap-3 text-base font-bold leading-tight border-l-4 border-black pl-4 py-2 hover:bg-secondary/50">
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

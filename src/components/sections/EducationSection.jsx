import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EducationSection() {
  return (
    <section id="education" data-cy="education-section" className="py-20 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Education */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 data-cy="education-title" className="text-3xl font-bold tracking-tight">Education</h2>
              <p className="text-muted-foreground">My academic and bootcamp background.</p>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} data-cy="education-card" className="flex gap-4 group">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <GraduationCap size={20} />
                  </div>
                  <div className="space-y-1">
                    <h3 data-cy="education-degree" className="font-bold">{edu.degree}</h3>
                    <p data-cy="education-institution" className="text-sm text-muted-foreground">{edu.institution} | {edu.year}</p>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin size={12} />
                      {edu.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
              <p className="text-muted-foreground">Ongoing learning and professional validation.</p>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} data-cy="certification-card" className="bg-card/50 hover:bg-card transition-colors duration-300">
                  <CardHeader className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <CardTitle data-cy="cert-card-title" className="text-base flex items-center gap-2">
                          <Award size={16} className="text-primary" />
                          {cert.title}
                        </CardTitle>
                        <CardDescription data-cy="cert-card-description" className="text-sm">
                          {cert.issuer} • {cert.year}
                        </CardDescription>
                      </div>
                      <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" data-cy="view-certificate-button">
                          <ExternalLink size={14} />
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

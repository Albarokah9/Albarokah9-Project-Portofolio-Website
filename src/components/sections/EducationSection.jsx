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
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 data-cy="education-title" className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight">Education</h2>
              <p className="text-xl text-foreground font-black uppercase tracking-tight bg-secondary p-4 border-4 border-black shadow-brutal inline-block">My academic and bootcamp background.</p>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} data-cy="education-card" className="flex gap-6 group">
                  <div className="mt-1 w-14 h-14 border-4 border-black bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-brutal-sm group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-brutal transition-all">
                    <GraduationCap size={28} />
                  </div>
                  <div className="space-y-2">
                    <h3 data-cy="education-degree" className="text-2xl font-display font-black uppercase tracking-tight leading-tight">{edu.degree}</h3>
                    <p data-cy="education-institution" className="text-lg font-black uppercase tracking-tight text-foreground leading-tight bg-accent inline-block px-2 border-2 border-black">{edu.institution} | {edu.year}</p>
                    <div className="text-xs font-black uppercase tracking-widest flex items-center gap-2 border-b-2 border-black inline-flex">
                      <MapPin size={14} className="text-black" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight">Certifications</h2>
              <p className="text-xl text-foreground font-black uppercase tracking-tight bg-secondary p-4 border-4 border-black shadow-brutal inline-block">Ongoing learning and professional validation.</p>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} data-cy="certification-card" className="border-4 border-black shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all overflow-hidden bg-white">
                  <CardHeader className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle data-cy="cert-card-title" className="text-xl font-display font-black uppercase tracking-tight leading-tight flex items-center gap-2">
                          <Award size={20} className="text-black" />
                          {cert.title}
                        </CardTitle>
                        <CardDescription data-cy="cert-card-description" className="text-base font-black uppercase tracking-tight text-foreground bg-accent inline-block px-2 border-2 border-black">
                          {cert.issuer} • {cert.year}
                        </CardDescription>
                      </div>
                      <Button asChild variant="outline" size="icon" className="h-10 w-10 border-4 border-black shadow-brutal-sm">
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" data-cy="view-certificate-button">
                          <ExternalLink size={18} />
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

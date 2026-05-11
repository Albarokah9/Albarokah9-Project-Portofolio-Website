import { Badge } from "@/components/ui/badge";
import { skillCategories, detailedSkills } from "@/data/skills";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, CheckCircle2, FlaskConical, Settings, Workflow } from "lucide-react";

const ANTIGRAVITY_ICON = "https://www.searchyour.ai/archivos/antigravity-google-ai-logo.jpg";

const KATALON_ICON = "https://tse3.mm.bing.net/th/id/OIP.VV3O7kjnhK6MpUefdHb8MgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";

const TOOLS_DATA = [
  { name: "Cypress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" },
  { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
  { name: "Katalon Studio", icon: KATALON_ICON },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "JMeter", icon: "https://cdn.simpleicons.org/apachejmeter/D22128" },
  { name: "ClickUp", icon: "https://cdn.simpleicons.org/clickup/7B68EE" },
  { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Antigravity IDE", icon: ANTIGRAVITY_ICON },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Cucumber", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg" },
];

export function SkillsSection() {
  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'testing frameworks': return <FlaskConical size={20} className="text-blue-500" />;
      case 'tools & technologies': return <Settings size={20} className="text-indigo-500" />;
      case 'methodologies': return <Workflow size={20} className="text-purple-500" />;
      default: return <CheckCircle2 size={20} className="text-green-500" />;
    }
  };

  return (
    <section id="skills" data-cy="skills-section" className="py-20 border-y-4 border-black bg-accent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border-4 border-black bg-primary text-primary-foreground text-xs font-black uppercase tracking-widest shadow-brutal-sm">
            Capabilities
          </div>
          <h2 data-cy="skills-title" className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-xl text-foreground font-black uppercase tracking-tight bg-secondary p-4 border-4 border-black shadow-brutal inline-block">The tools and technologies I use to break things and then ensure they never break again.</p>
        </div>

        {/* Moving Marquee */}
        <div className="mb-20 relative overflow-hidden group py-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-accent via-accent/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-accent via-accent/80 to-transparent z-20 pointer-events-none" />
          
          <div className="flex w-max whitespace-nowrap animate-marquee pause-on-hover px-4">
            {[...TOOLS_DATA, ...TOOLS_DATA, ...TOOLS_DATA].map((tool, index) => (
              <div key={index} className="flex items-center gap-4 mx-12 group cursor-default py-2">
                <div className="w-14 h-14 flex items-center justify-center p-2 border-4 border-black bg-white shadow-brutal-sm group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-brutal transition-all">
                  <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-display font-black uppercase tracking-tight text-black group-hover:text-primary transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, index) => (
            <Card 
              key={index} 
              className="reveal border-4 border-black shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all overflow-hidden bg-white"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-4 w-full bg-secondary border-b-4 border-black" />
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 border-4 border-black bg-primary/20 shadow-brutal-sm">
                    {getIcon(cat.title)}
                  </div>
                  <h3 data-cy="skills-category-title" className="font-display font-black text-xl uppercase tracking-tight">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="border-2 border-black font-black hover:bg-primary hover:text-white"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical List Grid */}
        <div className="mt-20 p-8 border-4 border-black bg-white shadow-brutal-lg overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 text-black/5">
            <Terminal size={120} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 relative z-10">
            {detailedSkills.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-black bg-primary inline-block px-2 py-1 font-display font-black text-lg uppercase tracking-widest border-4 border-black shadow-brutal-sm">
                  {section.category}
                </h4>
                <p className="text-base font-black uppercase tracking-tight text-slate-900 leading-tight border-l-4 border-black pl-4">
                  {section.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

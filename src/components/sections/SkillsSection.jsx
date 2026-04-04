import { Badge } from "@/components/ui/badge";
import { skillCategories, detailedSkills } from "@/data/skills";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, CheckCircle2, FlaskConical, Settings, Workflow } from "lucide-react";

const ANTIGRAVITY_ICON = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="g" x1="0%" y1="95%" x2="0%" y2="5%">
      <stop offset="0%" style="stop-color:#4285f4;" />
      <stop offset="35%" style="stop-color:#34a853;" />
      <stop offset="65%" style="stop-color:#fbbc05;" />
      <stop offset="100%" style="stop-color:#ea4335;" />
    </linearGradient>
  </defs>
  <path d="M5,85 C25,5 75,5 95,85 C75,65 25,65 5,85 Z" fill="url(#g)" />
</svg>
`)}`;

const KATALON_ICON = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x="15" y="60" width="28" height="28" fill="#32c58e" rx="4" />
  <path d="M15 54 L85 54 L60 12 L15 12 Z" fill="black" />
</svg>
`)}`;

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
    <section id="skills" data-cy="skills-section" className="py-20 border-y bg-slate-50/50 dark:bg-slate-950/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="px-3 py-1">Capabilities</Badge>
          <h2 data-cy="skills-title" className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground">The tools and technologies I use to break things and then ensure they never break again.</p>
        </div>

        {/* Moving Marquee */}
        <div className="mb-20 relative overflow-hidden group py-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 via-slate-50/80 dark:via-slate-950/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 via-slate-50/80 dark:via-slate-950/80 to-transparent z-20 pointer-events-none" />
          
          <div className="flex w-max whitespace-nowrap animate-marquee pause-on-hover px-4">
            {[...TOOLS_DATA, ...TOOLS_DATA, ...TOOLS_DATA].map((tool, index) => (
              <div key={index} className="flex items-center gap-4 mx-12 group hover:scale-105 transition-all duration-300 cursor-default py-2">
                <div className="w-12 h-12 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:shadow-md group-hover:border-primary/20 transition-all">
                  <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-lg font-semibold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, index) => (
            <Card key={index} className="overflow-hidden bg-background/60 backdrop-blur-xl border-border/50 hover:border-primary/50 shadow-lg hover:shadow-xl group hover:-translate-y-1 transition-all duration-500">
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    {getIcon(cat.title)}
                  </div>
                  <h3 data-cy="skills-category-title" className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-3 py-1.5 text-xs font-medium bg-secondary/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default"
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
        <div className="mt-20 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 text-blue-500/5 dark:text-blue-500/10">
            <Terminal size={120} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 relative z-10">
            {detailedSkills.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-blue-600 dark:text-blue-400 font-mono text-sm uppercase tracking-widest border-b border-slate-200 dark:border-white/10 pb-2">
                  {section.category}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
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

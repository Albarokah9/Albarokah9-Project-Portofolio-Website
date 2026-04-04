import { personalInfo } from "@/data/personal";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" data-cy="about-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Terminal size={14} />
              <span>~/professional-summary</span>
            </div>
            <h2 data-cy="about-title" className="text-3xl md:text-4xl font-bold tracking-tight">Crafting Quality Through Precision</h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <Card className="border-primary/20 bg-slate-50 dark:bg-primary/5 backdrop-blur-sm overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 shadow-lg dark:shadow-none">
              <CardContent className="p-0">
                <div className="bg-slate-100 dark:bg-slate-900 p-4 border-b border-primary/20 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono ml-2">about_me.json</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-1 bg-white dark:bg-transparent overflow-x-auto">
                  <div className="text-slate-400">{"{"}</div>
                  <div className="flex gap-2 pl-4">
                    <span className="text-blue-600 dark:text-blue-400">"status"</span>
                    <span className="text-slate-400">:</span>
                    <span className="text-green-600 dark:text-green-400">"Hiring Ready",</span>
                  </div>
                  <div className="flex gap-2 pl-4">
                    <span className="text-blue-600 dark:text-blue-400">"role"</span>
                    <span className="text-slate-400">:</span>
                    <span className="text-green-600 dark:text-green-400">"Quality Assurance Engineer",</span>
                  </div>
                  <div className="flex flex-col pl-4">
                    <div className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400">"specialization"</span>
                      <span className="text-slate-400">: [</span>
                    </div>
                    <div className="pl-4 text-green-600 dark:text-green-400">
                      "Automation Testing",<br />
                      "Performance Testing",<br />
                      "API & Security Testing"
                    </div>
                    <span className="text-slate-400">],</span>
                  </div>
                  <div className="flex flex-col pl-4">
                    <div className="flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400">"metrics"</span>
                      <span className="text-slate-400">: {"{"}</span>
                    </div>
                    <div className="pl-4 flex flex-col">
                      <div className="flex gap-2">
                        <span className="text-purple-600 dark:text-purple-400">"test_cases"</span>
                        <span className="text-slate-400">:</span>
                        <span className="text-orange-600 dark:text-orange-400">"1000+",</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-purple-600 dark:text-purple-400">"feature_coverage"</span>
                        <span className="text-slate-400">:</span>
                        <span className="text-orange-600 dark:text-orange-400">"99.9%"</span>
                      </div>
                    </div>
                    <span className="text-slate-400">{"}"},</span>
                  </div>
                  <div className="flex gap-2 pl-4">
                    <span className="text-blue-600 dark:text-blue-400">"location"</span>
                    <span className="text-slate-400">:</span>
                    <span className="text-green-600 dark:text-green-400">"{personalInfo.location}"</span>
                  </div>
                  <div className="text-slate-400">{"}"}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

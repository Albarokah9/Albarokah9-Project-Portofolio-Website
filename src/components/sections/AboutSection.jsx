import { personalInfo } from "@/data/personal";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" data-cy="about-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border-4 border-black bg-primary text-primary-foreground text-xs font-black uppercase tracking-widest shadow-brutal-sm">
              <Terminal size={14} />
              <span>~/professional-summary</span>
            </div>
            <h2 data-cy="about-title" className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight leading-none">Crafting Quality Through Precision</h2>
            <div className="max-w-none">
              <p className="text-xl text-foreground leading-tight font-black uppercase tracking-tight bg-secondary p-4 border-4 border-black shadow-brutal">
                {personalInfo.summary}
              </p>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <Card className="border-4 border-black shadow-brutal-lg hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-xl">
              <CardContent className="p-0">
                <div className="bg-black text-white p-4 border-b-4 border-black flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 border-2 border-white bg-red-500" />
                    <div className="w-3 h-3 border-2 border-white bg-yellow-500" />
                    <div className="w-3 h-3 border-2 border-white bg-green-500" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest">about_me.json</span>
                </div>
                <div className="p-6 font-mono font-bold text-sm space-y-1 bg-white overflow-x-auto text-slate-900">
                  <div className="text-slate-500">{"{"}</div>
                  <div className="flex gap-2 pl-4">
                    <span className="text-blue-600">"status"</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-green-600">"Hiring Ready",</span>
                  </div>
                  <div className="flex gap-2 pl-4">
                    <span className="text-blue-600">"role"</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-green-600">"Quality Assurance Engineer",</span>
                  </div>
                  <div className="flex flex-col pl-4">
                    <div className="flex gap-2">
                      <span className="text-blue-600">"specialization"</span>
                      <span className="text-slate-500">: [</span>
                    </div>
                    <div className="pl-4 text-green-600">
                      "Automation Testing",<br />
                      "Performance Testing",<br />
                      "API & Security Testing"
                    </div>
                    <span className="text-slate-500">],</span>
                  </div>
                  <div className="flex flex-col pl-4">
                    <div className="flex gap-2">
                      <span className="text-blue-600">"metrics"</span>
                      <span className="text-slate-500">: {"{"}</span>
                    </div>
                    <div className="pl-4 flex flex-col">
                      <div className="flex gap-2">
                        <span className="text-purple-600">"test_cases"</span>
                        <span className="text-slate-500">:</span>
                        <span className="text-orange-600">"1000+",</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-purple-600">"feature_coverage"</span>
                        <span className="text-slate-500">:</span>
                        <span className="text-orange-600">"99.9%"</span>
                      </div>
                    </div>
                    <span className="text-slate-500">{"}"},</span>
                  </div>
                  <div className="flex gap-2 pl-4">
                    <span className="text-blue-600">"location"</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-green-600">"{personalInfo.location}"</span>
                  </div>
                  <div className="text-slate-500">{"}"}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

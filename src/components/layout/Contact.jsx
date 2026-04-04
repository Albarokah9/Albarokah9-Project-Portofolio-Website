import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, MessageSquare, Phone } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" data-cy="contact-section" className="py-20 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10 text-center space-y-12">
        <div className="max-w-2xl mx-auto space-y-4">
          <Badge variant="outline" className="text-blue-400 border-blue-400/30">Connect with me</Badge>
          <h2 data-cy="contact-title" className="text-4xl md:text-5xl font-bold tracking-tight">Let's build something <br /><span className="text-blue-400">bug-free</span> together.</h2>
          <p className="text-slate-400 text-lg">
            I'm currently looking for new opportunities in QA Engineering. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Button asChild size="lg" className="rounded-full gap-2 bg-blue-600 hover:bg-blue-700">
            <a href={personalInfo.emailLink} data-cy="contact-email">
              <Mail size={18} />
              Email Me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full gap-2 bg-white/5 border-white/10 hover:bg-white/10">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" data-cy="contact-linkedin">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full gap-2 bg-white/5 border-white/10 hover:bg-white/10">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" data-cy="contact-github">
              <Github size={18} />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full gap-2 bg-white/5 border-white/10 hover:bg-white/10">
            <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" data-cy="contact-whatsapp">
              <Phone size={18} />
              WhatsApp
            </a>
          </Button>
        </div>

        <div data-cy="contact-footer" className="pt-20 border-t border-white/5 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

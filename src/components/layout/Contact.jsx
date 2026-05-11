import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, MessageSquare, Phone } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" data-cy="contact-section" className="py-20 bg-primary border-t-8 border-black text-black overflow-hidden relative">
      
      <div className="container mx-auto px-4 relative z-10 text-center space-y-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border-4 border-black bg-white text-black text-xs font-black uppercase tracking-widest shadow-brutal-sm">
            Connect with me
          </div>
          <h2 data-cy="contact-title" className="text-5xl md:text-8xl font-display font-black uppercase tracking-tight leading-none text-black">Let's build something <br /><span className="bg-white px-4 border-4 border-black inline-block mt-2 shadow-brutal">bug-free</span> together.</h2>
          <p className="text-xl text-black font-black uppercase tracking-tight bg-secondary border-4 border-black shadow-brutal p-4 inline-block">
            I'm currently looking for new opportunities in QA Engineering. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <Button asChild variant="outline" size="lg" className="h-16 px-8 rounded-none border-4 border-black shadow-brutal bg-[#ea4335] text-white hover:bg-white hover:text-[#ea4335] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all">
            <a href={personalInfo.emailLink} data-cy="contact-email" className="flex items-center gap-3">
              <Mail size={24} />
              <span className="text-lg font-display font-black uppercase tracking-widest">Email Me</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-16 px-8 rounded-none border-4 border-black shadow-brutal bg-[#0077B5] text-white hover:bg-white hover:text-[#0077B5] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" data-cy="contact-linkedin" className="flex items-center gap-3">
              <Linkedin size={24} />
              <span className="text-lg font-display font-black uppercase tracking-widest">LinkedIn</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-16 px-8 rounded-none border-4 border-black shadow-brutal bg-[#24292e] text-white hover:bg-white hover:text-[#24292e] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" data-cy="contact-github" className="flex items-center gap-3">
              <Github size={24} />
              <span className="text-lg font-display font-black uppercase tracking-widest">GitHub</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-16 px-8 rounded-none border-4 border-black shadow-brutal bg-[#25D366] text-white hover:bg-white hover:text-[#25D366] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all">
            <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" data-cy="contact-whatsapp" className="flex items-center gap-3">
              <Phone size={24} />
              <span className="text-lg font-display font-black uppercase tracking-widest">WhatsApp</span>
            </a>
          </Button>
        </div>

        <div data-cy="contact-footer" className="pt-20 border-t-4 border-black text-black text-sm space-y-2">
          <p className="font-black">&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Terminal, Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react"
import { personalInfo } from "@/data/personal"

export function Hero() {
  const [terminalText, setTerminalText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const fullText = "npm start --project qa-engineer-portfolio"

  // Drag state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y
      });
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);
  
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTerminalText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(interval)
        setIsTyping(false)
      }
    }, 70)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" aria-label="QA Engineer Portfolio Introduction" data-cy="hero-section" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <Badge variant="default" data-cy="hero-badge" className="px-3 py-1 text-xs font-black uppercase tracking-widest animate-in fade-in slide-in-from-bottom-3 duration-1000 border-4 border-black shadow-brutal-sm">
              👋 Available for new opportunities
            </Badge>
            <h1 data-cy="hero-name" className="text-5xl md:text-8xl font-display font-black tracking-tight leading-[0.9] uppercase text-left animate-in fade-in slide-in-from-left-12 duration-1000 delay-150">
              <span className="block mb-4 text-foreground">{personalInfo.name}</span>
              <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 border-4 border-black shadow-brutal">
                {personalInfo.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto md:mx-0 leading-tight font-bold uppercase tracking-tight animate-in fade-in slide-in-from-left-12 duration-1000 delay-300">
              Transforming complex requirements into <strong className="text-foreground">robust automation</strong>, reliable <strong className="text-foreground">API testing</strong>, and <strong className="text-foreground">seamless user experiences</strong>.
            </p>

            {/* SEO & Screen Reader Keywords */}
            <span className="sr-only">
              Specialties and Skills: Software Quality Assurance, SDET, Automation Testing, Cypress, Katalon Studio, Postman, JMeter, Manual Testing, CI/CD, Agile.
            </span>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <Button asChild size="lg" className="px-8 bg-[#0077B5] hover:bg-[#006699] text-white border-4 border-black shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 bg-[#24292e] hover:bg-[#1b1f23] text-white border-4 border-black shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 bg-white hover:bg-slate-50 text-black border-4 border-black shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all">
                <a href="https://drive.google.com/file/d/1AGv4fKBpBtGfYO2UZNpSdCeBiF9exiXt/view?usp=sharing" target="_blank" rel="noopener noreferrer" data-cy="hero-resume">
                  <ExternalLink className="mr-2 h-5 w-5" /> Cover Letter
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" data-cy="hero-github" className="p-3 border-4 border-black bg-white hover:bg-[#24292e] hover:text-white transition-all shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg" title="GitHub">
                <Github size={24} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" data-cy="hero-linkedin" className="p-3 border-4 border-black bg-white hover:bg-[#0077B5] hover:text-white transition-all shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg" title="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href={personalInfo.emailLink} data-cy="hero-email" className="p-3 border-4 border-black bg-white hover:bg-[#ea4335] hover:text-white transition-all shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg" title="Email Me">
                <Mail size={24} />
              </a>
              <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" data-cy="hero-whatsapp" className="p-3 border-4 border-black bg-white hover:bg-[#25D366] hover:text-white transition-all shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg" title="WhatsApp">
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Terminal Feature */}
          <div className="flex-1 w-full max-w-[550px] animate-in zoom-in duration-1000 relative z-10">
            <div 
              className={`rounded-none border-4 border-black bg-white shadow-brutal-xl overflow-hidden font-mono transition-transform ${isDragging ? 'cursor-grabbing shadow-brutal-2xl scale-[1.02]' : 'cursor-grab'}`}
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out, box-shadow 0.3s ease'
              }}
            >
              {/* Terminal Header */}
              <div 
                className="bg-black text-white px-4 py-3 flex items-center justify-between border-b-4 border-black select-none"
                onMouseDown={handleMouseDown}
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 border-2 border-white bg-red-500" />
                  <div className="w-3 h-3 border-2 border-white bg-yellow-500" />
                  <div className="w-3 h-3 border-2 border-white bg-green-500" />
                </div>
                <div className="text-xs font-black uppercase tracking-widest flex items-center gap-1.5">
                  <Terminal size={12} />
                  ROOT@ALBAROKAH: ~
                </div>
              </div>
              {/* Terminal Body */}
              <div className="p-5 h-[280px] bg-white text-slate-900 text-sm md:text-base leading-relaxed overflow-y-auto custom-scrollbar">
                <div className="flex gap-2">
                  <span className="text-green-600 font-bold">➜</span>
                  <span className="text-blue-600 font-bold">~</span>
                  <span className="text-slate-900 font-bold">{terminalText}</span>
                  {isTyping && <span className="w-2 h-5 bg-black animate-pulse" />}
                </div>
                
                {!isTyping && (
                  <div className="mt-4 space-y-2 animate-in fade-in duration-500">
                    <div className="text-blue-600 font-bold">INFO: Launching Portfolio v2.0...</div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-2">
                      <div className="text-slate-600 font-bold">Status:</div>
                      <div className="text-green-600 font-bold">Stable</div>
                      <div className="text-slate-600 font-bold">Environment:</div>
                      <div className="text-yellow-600 font-bold">Production</div>
                      <div className="text-slate-600 font-bold">Last Commit:</div>
                      <div className="text-slate-900 font-bold">Just now</div>
                    </div>
                    <div className="pt-4 text-slate-500 italic font-bold">
                      Type 'help' to see available commands...
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

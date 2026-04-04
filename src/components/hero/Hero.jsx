import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Terminal, Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react"
import { personalInfo } from "@/data/personal"

export function Hero() {
  const [terminalText, setTerminalText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const fullText = "npm start --project qa-engineer-portfolio"
  
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
            <Badge variant="secondary" data-cy="hero-badge" className="px-3 py-1 text-sm font-medium animate-in fade-in slide-in-from-bottom-3 duration-1000">
              👋 Available for new opportunities
            </Badge>
            <h1 data-cy="hero-name" className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              <span className="block mb-2 text-slate-900 dark:text-white">{personalInfo.name}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
                {personalInfo.title}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
              Transforming complex requirements into <strong className="text-foreground font-semibold">robust automation (Cypress)</strong>, reliable <strong className="text-foreground font-semibold">API testing</strong>, and <strong className="text-foreground font-semibold">seamless user experiences</strong> through comprehensive Quality Assurance.
            </p>

            {/* SEO & Screen Reader Keywords */}
            <span className="sr-only">
              Specialties and Skills: Software Quality Assurance, SDET, Automation Testing, Cypress, Katalon Studio, Postman, JMeter, Manual Testing, CI/CD, Agile.
            </span>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <a href="files/Cover_Letter.pdf" target="_blank" rel="noopener noreferrer" data-cy="hero-resume">
                  <ExternalLink className="mr-2 h-4 w-4" /> Cover Letter
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-6">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" data-cy="hero-github" className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110" title="GitHub">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" data-cy="hero-linkedin" className="p-3 bg-muted hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300 hover:scale-110" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={personalInfo.emailLink} data-cy="hero-email" className="p-3 bg-muted hover:bg-red-500 hover:text-white rounded-full transition-all duration-300 hover:scale-110" title="Email Me">
                <Mail size={20} />
              </a>
              <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" data-cy="hero-whatsapp" className="p-3 bg-muted hover:bg-green-600 hover:text-white rounded-full transition-all duration-300 hover:scale-110" title="WhatsApp">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Terminal Feature */}
          <div className="flex-1 w-full max-w-[550px] animate-in zoom-in duration-1000">
            <div className="rounded-xl border bg-card text-card-foreground shadow-2xl overflow-hidden font-mono">
              {/* Terminal Header */}
              <div className="bg-muted px-4 py-3 flex items-center justify-between border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                  <Terminal size={12} />
                  zsh — 80x24
                </div>
              </div>
              {/* Terminal Body */}
              <div className="p-5 h-[280px] bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm md:text-base leading-relaxed overflow-y-auto custom-scrollbar">
                <div className="flex gap-2">
                  <span className="text-green-600 dark:text-green-400">➜</span>
                  <span className="text-blue-600 dark:text-blue-400">~</span>
                  <span className="text-slate-700 dark:text-slate-300">{terminalText}</span>
                  {isTyping && <span className="w-2 h-5 bg-slate-100 animate-pulse" />}
                </div>
                
                {!isTyping && (
                  <div className="mt-4 space-y-2 animate-in fade-in duration-500">
                    <div className="text-blue-600 dark:text-blue-400 font-bold">INFO: Launching Portfolio v2.0...</div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-2">
                      <div className="text-slate-500 dark:text-slate-400">Status:</div>
                      <div className="text-green-600 dark:text-green-400">Stable</div>
                      <div className="text-slate-500 dark:text-slate-400">Environment:</div>
                      <div className="text-yellow-600 dark:text-yellow-400">Production</div>
                      <div className="text-slate-500 dark:text-slate-400">Last Commit:</div>
                      <div className="text-slate-700 dark:text-slate-300">Just now</div>
                    </div>
                    <div className="pt-4 text-slate-400 dark:text-slate-500 italic">
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

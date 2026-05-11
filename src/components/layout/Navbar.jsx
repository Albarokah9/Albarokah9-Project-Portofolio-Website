import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Terminal, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      data-cy="navbar"
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b-4 border-black bg-background",
        isScrolled ? "py-3 shadow-brutal" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" data-cy="nav-logo" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center border-4 border-black bg-primary text-primary-foreground transition-all group-hover:rotate-6 shadow-brutal-sm">
            <Terminal size={22} strokeWidth={3} />
          </div>
          <span className="font-display font-black text-2xl tracking-tighter uppercase italic bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-left-bottom bg-no-repeat transition-all duration-300 group-hover:bg-[length:100%_4px]">Albarokah.</span>
        </a>

        {/* Desktop Nav */}
        <nav data-cy="desktop-nav-links" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-cy={`nav-link-${link.name.toLowerCase()}`}
              className="text-sm font-black uppercase tracking-widest text-foreground hover:bg-secondary border-2 border-transparent hover:border-black hover:shadow-brutal-sm px-3 py-1 transition-all hover-brutal-skew"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2 md:hidden">
            <Button
                variant="outline"
                size="icon"
                data-cy="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-none h-10 w-10 border-2 border-black"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        data-cy="mobile-nav-links"
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background border-b-4 border-black transition-all duration-300 ease-in-out px-4 py-6 flex flex-col gap-4 shadow-brutal-lg",
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            data-cy={`nav-link-${link.name.toLowerCase()}`}
            className="text-xl font-black uppercase tracking-wider py-2 border-b-4 border-black last:border-0 hover:pl-2 transition-all hover:bg-secondary"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  )
}

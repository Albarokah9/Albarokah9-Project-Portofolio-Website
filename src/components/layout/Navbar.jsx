import { useState, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Terminal, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { theme, setTheme } = useTheme()
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
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" data-cy="nav-logo" className="flex items-center gap-2 group">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-md transition-transform group-hover:scale-110">
            <Terminal size={18} />
          </div>
          <span className="font-bold text-xl tracking-tight">Albarokah.</span>
        </a>

        {/* Desktop Nav */}
        <nav data-cy="desktop-nav-links" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-cy={`nav-link-${link.name.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            data-cy="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full shadow-sm border border-border"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2 md:hidden">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full overflow-hidden"
            >
                <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                data-cy="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-md"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        data-cy="mobile-nav-links"
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background border-b transition-all duration-300 ease-in-out px-4 py-6 flex flex-col gap-4 shadow-xl",
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            data-cy={`nav-link-${link.name.toLowerCase()}`}
            className="text-lg font-medium py-2 border-b border-muted last:border-0"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  )
}

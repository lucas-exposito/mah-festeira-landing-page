import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Sobre", href: "sobre" },
  { label: "Serviços", href: "servicos" },
  { label: "Galeria", href: "galeria" },
  { label: "Pacotes", href: "pacotes" },
  { label: "Depoimentos", href: "depoimentos" },
  { label: "Orçamento", href: "orcamento" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-bold bg-gradient-to-r from-festa-pink via-festa-lilac to-festa-blue bg-clip-text text-transparent"
        >
          Mah Festeira 🎉
        </button>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-display font-medium transition-all duration-200",
                link.href === "orcamento"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm ml-2"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-muted transition-colors text-foreground"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-4"
          >
            <nav className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    scrollTo(link.href);
                    setMenuOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-xl text-sm font-display font-medium transition-all duration-200",
                    link.href === "orcamento"
                      ? "bg-primary text-primary-foreground mt-1"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;

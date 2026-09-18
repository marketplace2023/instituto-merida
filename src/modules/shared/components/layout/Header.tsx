import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/modules/shared/components/ui/button"

export function Header() {
  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Instituto", href: "/instituto" },
    { label: "Beneficencia", href: "/beneficencia" },
    { label: "Lotería", href: "/loteria" },
    { label: "Trámites", href: "/tramites" },
    { label: "Transparencia", href: "/transparencia" },
    { label: "Normativa", href: "/normativa" },
    { label: "Noticias", href: "/noticias" },
    { label: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface text-text shadow-sm h-[80px]">
      <div className="container mx-auto flex h-full max-w-[1280px] items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Lotería de Mérida" className="h-12 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link to="/portal">Portal en línea</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/modules/shared/components/ui/button"

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const { pathname } = useLocation()

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

  // Cierra el menú móvil al navegar a otra ruta
  React.useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

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
        <div className="flex items-center gap-2 sm:gap-4">
          <Button asChild>
            <Link to="/portal">Portal en línea</Link>
          </Button>
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-primary hover:bg-surface-alt transition-colors"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="menu-movil"
          className="lg:hidden absolute left-0 right-0 top-full max-h-[calc(100vh-80px)] overflow-y-auto border-b border-border bg-surface shadow-modal"
        >
          <ul className="container mx-auto max-w-[1280px] px-4 py-2">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
              return (
                <li key={item.label} className="border-b border-border last:border-b-0">
                  <Link
                    to={item.href}
                    className={`block py-3 text-base font-medium transition-colors hover:text-primary ${
                      active ? "text-primary" : "text-text"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}

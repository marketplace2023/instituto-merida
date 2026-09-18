import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/modules/shared/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/modules/shared/components/ui/card"

export function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-surface-alt py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto max-w-[1280px] px-4 relative z-10">
          <div className="max-w-2xl space-y-6">
            <span className="text-sm font-bold text-primary tracking-widest uppercase">
              Beneficencia y Servicio Público
            </span>
            <h1 className="text-primary">
              Beneficencia, transparencia y servicio para Mérida
            </h1>
            <p className="text-lg text-text-muted max-w-xl leading-relaxed">
              Trabajamos por la salud, educación, deporte y cultura del pueblo merideño. Portal institucional sujeto a validación oficial.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <Link to="/beneficencia">Conocer programas sociales</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/tramites">Trámites y servicios</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Placeholder for real hero image */}
        <div className="absolute inset-0 z-0 opacity-10 bg-primary pointer-events-none" />
      </section>

      {/* Áreas Sociales */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-[1280px] px-4">
          <div className="text-center mb-12">
            <h2>Áreas de Acción Social</h2>
            <p className="text-text-muted mt-2">Dato pendiente de publicación oficial</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Salud", "Educación", "Deporte", "Cultura"].map((area) => (
              <Card key={area} className="hover:shadow-modal transition-shadow">
                <CardHeader>
                  <CardTitle className="text-secondary">{area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Programas y ayudas orientadas a fortalecer este sector en el estado Mérida.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto max-w-[1280px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2>Lotería Regulada y Responsable</h2>
              <p className="text-text-muted">
                Consulta los operadores autorizados, reglamentos y resultados oficiales.
              </p>
              <ul className="space-y-4">
                <li>
                  <Link to="/resultados" className="text-primary font-medium hover:underline flex items-center gap-2">
                    → Resultados Oficiales
                  </Link>
                </li>
                <li>
                  <Link to="/operadores" className="text-primary font-medium hover:underline flex items-center gap-2">
                    → Operadores Autorizados
                  </Link>
                </li>
                <li>
                  <Link to="/normativa" className="text-primary font-medium hover:underline flex items-center gap-2">
                    → Normativa
                  </Link>
                </li>
              </ul>
            </div>
            <Card className="bg-surface-alt border-none shadow-none">
              <CardHeader>
                <CardTitle>Accesos Rápidos</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <Button variant="ghost" className="justify-start w-full bg-surface" asChild>
                  <Link to="/beneficencia/solicitar">Solicitar ayuda</Link>
                </Button>
                <Button variant="ghost" className="justify-start w-full bg-surface" asChild>
                  <Link to="/beneficencia/consultar">Consultar solicitud</Link>
                </Button>
                <Button variant="ghost" className="justify-start w-full bg-surface" asChild>
                  <Link to="/contacto">Contacto</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

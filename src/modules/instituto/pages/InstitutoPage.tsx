import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/modules/shared/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/modules/shared/components/ui/card"

export function InstitutoPage() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Hero Institucional */}
      <section className="bg-primary text-on-primary py-20 px-4">
        <div className="container mx-auto max-w-[1280px]">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-on-primary">El Instituto</h1>
            <p className="text-lg opacity-90 leading-relaxed">
              Conoce la naturaleza, propósito y marco legal del Instituto de Beneficencia Pública y Asistencia Social "Lotería de Mérida".
            </p>
          </div>
        </div>
      </section>

      {/* Propósito y Naturaleza */}
      <section className="py-20 px-4 bg-surface">
        <div className="container mx-auto max-w-[1280px]">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-primary">Naturaleza Institucional</h2>
            <div className="p-4 border-l-4 border-warning bg-surface-alt rounded-r-md">
              <p className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">Aviso</p>
              <p className="text-text">Pendiente de validación institucional.</p>
            </div>
            <p className="text-text-muted leading-relaxed">
              [Texto descriptivo pendiente de publicación oficial sobre la creación y naturaleza jurídica del Instituto].
            </p>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <Card className="bg-surface shadow-sm hover:shadow-card transition-shadow">
              <CardHeader>
                <CardTitle className="text-secondary">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted italic">[Misión pendiente de publicación oficial]</p>
              </CardContent>
            </Card>
            <Card className="bg-surface shadow-sm hover:shadow-card transition-shadow">
              <CardHeader>
                <CardTitle className="text-secondary">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted italic">[Visión pendiente de publicación oficial]</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <h3 className="text-primary text-center">Nuestros Valores</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Solidaridad", "Transparencia", "Responsabilidad", "Eficiencia"].map((valor) => (
                <div key={valor} className="p-6 bg-surface-alt rounded-md text-center">
                  <span className="font-semibold text-text">{valor}</span>
                  <p className="text-xs text-text-muted mt-2">Pendiente de validación</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gobernanza y Legal */}
      <section className="py-20 px-4 bg-surface border-t border-border">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-primary">Autoridades y Organigrama</h2>
              <p className="text-text-muted">
                Conoce la estructura organizativa y las autoridades que rigen el funcionamiento del Instituto.
              </p>
              <Button asChild>
                <Link to="/instituto/autoridades">Ver Autoridades</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <h2 className="text-primary">Marco Legal</h2>
              <p className="text-text-muted">
                Accede a las leyes, reglamentos y providencias que regulan nuestra actividad institucional y de lotería.
              </p>
              <Button variant="secondary" asChild>
                <Link to="/normativa">Consultar Normativa</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

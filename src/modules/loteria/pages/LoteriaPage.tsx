import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/modules/shared/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/modules/shared/components/ui/card"

export function LoteriaPage() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Hero Institucional - Actividad Regulada */}
      <section className="bg-primary text-on-primary py-24 px-4">
        <div className="container mx-auto max-w-[1280px]">
          <div className="max-w-3xl space-y-6">
            <span className="text-sm font-bold tracking-widest uppercase opacity-80">
              Actividad Regulada
            </span>
            <h1 className="text-on-primary">Lotería y Juegos Autorizados</h1>
            <p className="text-lg opacity-90 leading-relaxed">
              Supervisamos y regulamos la actividad de envite y azar en el estado Mérida para garantizar transparencia, recaudación para obras sociales y protección al ciudadano.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link to="/loteria/resultados">Consultar Resultados</Link>
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white" size="lg" asChild>
                <Link to="/loteria/juegos">Ver Juegos Oficiales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Accesos Principales */}
      <section className="py-20 px-4 bg-surface">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-card transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-primary">Resultados Oficiales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted mb-6">
                  Consulta el historial de resultados verificados de los juegos autorizados.
                </p>
                <Link to="/loteria/resultados" className="text-primary font-medium hover:underline flex items-center gap-2">
                  Buscar resultados →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-shadow border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="text-primary">Operadores Legales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted mb-6">
                  Directorio de empresas y centros de apuestas con licencia vigente en el estado.
                </p>
                <Link to="/loteria/operadores" className="text-primary font-medium hover:underline flex items-center gap-2">
                  Ver directorio oficial →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-shadow border-t-4 border-t-tertiary">
              <CardHeader>
                <CardTitle className="text-primary">Juego Responsable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-muted mb-6">
                  Información, políticas de prevención y canales de ayuda para mantener una actividad sana.
                </p>
                <Link to="/contacto" className="text-primary font-medium hover:underline flex items-center gap-2">
                  Más información →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regulación y Normativa */}
      <section className="py-20 px-4 bg-background border-t border-border">
        <div className="container mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-primary">Marco Regulatorio</h2>
            <p className="text-text-muted leading-relaxed">
              Toda actividad de lotería en la jurisdicción debe cumplir con los reglamentos, el pago oportuno de tributos y la contribución directa a la asistencia social. Evite sanciones operando exclusivamente bajo la normativa vigente.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-text-muted">
                <span className="w-2 h-2 rounded-full bg-secondary" /> Ley de Registro y Control
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <span className="w-2 h-2 rounded-full bg-secondary" /> Reglamentos de Juegos
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <span className="w-2 h-2 rounded-full bg-secondary" /> Providencias Administrativas
              </li>
            </ul>
            <div className="pt-4">
              <Button asChild>
                <Link to="/normativa">Biblioteca Normativa</Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center pt-8">
              <img src="/logo_two.png" alt="Logo 2" className="h-14 w-auto object-contain rounded-md shadow-sm" />
              <img src="/logo_three.jpg" alt="Logo 3" className="h-14 w-auto object-contain rounded-md shadow-sm" />
              <img src="/logo_four.png" alt="Logo 4" className="h-14 w-auto object-contain rounded-md shadow-sm" />
              <img src="/mayor18_.jpg" alt="Mayor de 18 años" className="h-14 w-auto object-contain rounded-md shadow-sm" />
            </div>
          </div>
          <div className="bg-surface-alt p-8 rounded-lg border border-border text-center">
            <div className="w-16 h-16 mx-auto bg-border rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">⚖️</span>
            </div>
            <h3 className="text-text font-bold mb-4">¿Es usted operador comercial?</h3>
            <p className="text-text-muted mb-6">
              Acceda a la taquilla virtual para registro de su empresa, juegos, locales y declaración de tributos correspondientes.
            </p>
            <Button variant="secondary" asChild>
              <Link to="/tramites">Ir a Trámites y Servicios</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/modules/shared/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/modules/shared/components/ui/card"

export function TramitesPage() {
  const tramitesCiudadanos = [
    { title: "Solicitud de Ayuda Social", desc: "Requisitos y formulario para optar por los programas de salud, educación y contingencias.", link: "/beneficencia/solicitar" },
    { title: "Atención Ciudadana y Reclamos", desc: "Canal para denuncias sobre operadores no autorizados o sugerencias sobre el servicio.", link: "/contacto" }
  ]

  const tramitesOperadores = [
    { title: "Registro de Operador", desc: "Inscripción inicial como sujeto regulado para comercializar juegos autorizados." },
    { title: "Registro de Juego / Modalidad", desc: "Aprobación técnica y legal de un nuevo juego de lotería." },
    { title: "Licencias y Renovaciones", desc: "Gestión de vigencia para centros de apuestas y comercializadoras." },
    { title: "Pagos y Contribuciones", desc: "Declaración y pago de tributos y aportes de beneficencia." }
  ]

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Hero Trámites */}
      <section className="bg-primary text-on-primary py-24 px-4">
        <div className="container mx-auto max-w-[1280px]">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-on-primary">Trámites y Servicios</h1>
            <p className="text-lg opacity-90 leading-relaxed">
              Catálogo de servicios digitales de la Lotería de Mérida. Seleccione su perfil para visualizar los trámites disponibles.
            </p>
          </div>
        </div>
      </section>

      {/* Aviso de validación */}
      <div className="bg-warning text-white p-4 text-sm text-center font-medium">
        Nota Institucional: Las tasas, plazos y listados de requisitos están sujetos a la validación de competencia y normativa de Mérida. No se deben considerar definitivos en esta versión.
      </div>

      <div className="container mx-auto max-w-[1280px] px-4 py-20 space-y-24">
        
        {/* Ciudadanos */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 border-b border-border pb-4">
            <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xl">👤</div>
            <h2 className="text-primary m-0">Para Ciudadanos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tramitesCiudadanos.map(t => (
              <Card key={t.title} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{t.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-text-muted">{t.desc}</p>
                  <Button variant="secondary" asChild>
                    <Link to={t.link}>Ir al Trámite</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Operadores */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 border-b border-border pb-4">
            <div className="w-12 h-12 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center text-xl">🏢</div>
            <div>
              <h2 className="text-primary m-0">Para Operadores y Sujetos Regulados</h2>
              <p className="text-text-muted mt-1">Requiere autenticación en el Portal en línea.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tramitesOperadores.map(t => (
              <Card key={t.title} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{t.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-text-muted text-sm">{t.desc}</p>
                  <div className="bg-surface-alt p-3 rounded-md text-xs space-y-2 border border-border">
                    <div className="flex justify-between">
                      <span className="font-semibold text-text">Tasa administrativa:</span>
                      <span className="text-text-muted italic">Consultar normativa vigente</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-text">Plazo estimado:</span>
                      <span className="text-text-muted italic">Pendiente validación</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button asChild className="w-full">
                      <Link to="/portal">Ingresar al Portal</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

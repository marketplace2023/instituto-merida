import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/modules/shared/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/modules/shared/components/ui/card"

export function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="grid w-full grid-cols-1 lg:grid-cols-2 lg:min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Izquierda: foto con texto superpuesto */}
        <div className="relative flex min-h-130 items-center overflow-hidden">
          <img
            src="/foto.png"
            alt="Jornada de atención a la comunidad merideña"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 w-full px-6 py-16 sm:px-10 lg:px-14">
            <div className="max-w-xl space-y-6">
              <span className="text-sm font-bold text-white/90 tracking-widest uppercase">
                Beneficencia y Servicio Público
              </span>
              <h1 className="text-white">
                Beneficencia, transparencia y servicio para Mérida
              </h1>
              <p className="text-lg text-white/90 leading-relaxed">
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
        </div>

        {/* Derecha: video */}
        <div className="relative min-h-80 lg:min-h-0 bg-black">
          <video
            src="/Create_a_warm_cinematic_websi.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Áreas Sociales */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-[1280px] px-4">
          <div className="text-center mb-12">
            <h2>Áreas de Acción Social</h2>
            <p className="text-text-muted mt-2">Dato pendiente de publicación oficial</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Salud", image: "/inicio_salud.jpg" },
              { name: "Educación", image: "/inicio_educacion.jpg" },
              { name: "Deporte", image: "/inicio_deporte.jpg" },
              { name: "Cultura", image: "/inicio_cultura.jpg" },
            ].map((area) => (
              <Card key={area.name} className="relative overflow-hidden hover:shadow-modal transition-shadow">
                <img
                  src={area.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-white/55" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-secondary">{area.name}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-text">
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

import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/modules/shared/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/modules/shared/components/ui/card"

export function BeneficenciaPage() {
  const areas = [
    { title: "Salud", description: "Atención médica, entrega de insumos y jornadas quirúrgicas." },
    { title: "Educación", description: "Becas, dotación de útiles y apoyo a instituciones educativas." },
    { title: "Deporte", description: "Impulso a atletas, equipos locales y rescate de canchas." },
    { title: "Cultura", description: "Fomento de tradiciones, eventos culturales y artistas merideños." },
    { title: "Atención Comunitaria", description: "Asistencia directa a comunidades vulnerables." },
    { title: "Emergencias", description: "Respuesta rápida ante contingencias naturales o sociales." }
  ]

  const steps = [
    { number: "1", title: "Conoce", description: "Explora los programas sociales activos." },
    { number: "2", title: "Revisa", description: "Verifica los requisitos necesarios para tu caso." },
    { number: "3", title: "Solicita", description: "Ingresa tu petición a través del formulario online." },
    { number: "4", title: "Consulta", description: "Haz seguimiento al estado de tu trámite." }
  ]

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Hero Beneficencia */}
      <section className="relative bg-secondary text-on-secondary py-24 px-4 overflow-hidden">
        <div className="container mx-auto max-w-[1280px] relative z-10">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-on-secondary">Beneficencia y Asistencia Social</h1>
            <p className="text-lg opacity-90 leading-relaxed">
              El corazón de la Lotería de Mérida late por su gente. Destinamos recursos para apoyar a quienes más lo necesitan a través de programas transparentes y directos.
            </p>
            <div className="pt-4 flex gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link to="/beneficencia/solicitar">Solicitar Apoyo</Link>
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white" size="lg" asChild>
                <Link to="/beneficencia/programas">Ver Programas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atención */}
      <section className="py-20 px-4 bg-surface">
        <div className="container mx-auto max-w-[1280px]">
          <div className="text-center mb-12">
            <h2 className="text-primary">Áreas de Atención</h2>
            <p className="text-text-muted mt-2">La lista final de competencias depende de publicación oficial.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Card key={area.title} className="hover:shadow-card transition-all">
                <CardHeader>
                  <CardTitle className="text-secondary">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{area.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-[1280px]">
          <h2 className="text-primary text-center mb-16">¿Cómo funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Line connector for desktop */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-border z-0" />
            
            {steps.map((step) => (
              <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-surface border-4 border-secondary flex items-center justify-center mb-6 text-2xl font-bold text-secondary shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-surface-alt border-t border-border text-center">
        <div className="container mx-auto max-w-[1280px] space-y-6">
          <h2 className="text-primary">¿Necesitas ayuda o quieres hacer seguimiento?</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Nuestro portal te permite iniciar una solicitud de ayuda social o consultar el estado de un trámite previamente introducido, sin necesidad de intermediarios.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link to="/beneficencia/solicitar">Iniciar Solicitud</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/beneficencia/consultar">Consultar Estado</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

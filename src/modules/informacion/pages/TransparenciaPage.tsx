import React from "react"
import { PageBanner } from "@/modules/shared/components/layout/PageBanner"
import { Card, CardHeader, CardContent } from "@/modules/shared/components/ui/card"
import { CountUp } from "@/modules/shared/components/ui/count-up"

export function TransparenciaPage() {
  // Cifras de ejemplo: reemplazar por los datos oficiales cuando el Instituto los valide.
  const metricas = [
    { label: "Beneficiarios Directos", value: 1800 },
    { label: "Ayudas Entregadas", value: 1200 },
    { label: "Programas Activos", value: 12 },
    { label: "Municipios Atendidos", value: 23 },
  ]

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Header Breve */}
      <PageBanner>
        <h1 className="text-white">Transparencia e Impacto</h1>
        <p className="text-white/85 mt-2">Rendición de cuentas y datos abiertos del Instituto.</p>
      </PageBanner>

      {/* Métricas Generales */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-[1280px]">
          <div className="mb-12">
            <h2 className="text-primary">Impacto Social (Año en Curso)</h2>
            <p className="text-text-muted">Métricas consolidadas de nuestra gestión de beneficencia.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricas.map((metrica) => (
              <Card key={metrica.label} className="bg-surface border-none shadow-sm hover:shadow-card transition-shadow">
                <CardHeader className="pb-2">
                  <p className="text-sm font-semibold text-text-muted uppercase tracking-wider">{metrica.label}</p>
                </CardHeader>
                <CardContent>
                  <CountUp end={metrica.value} className="block text-3xl font-bold text-secondary tabular-nums" />
                  <p className="text-xs text-text-muted mt-2">Dato pendiente de publicación oficial</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Memorias y Cuentas */}
      <section className="py-16 px-4 bg-surface border-t border-border">
        <div className="container mx-auto max-w-[1280px]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-primary text-center mb-6">Memorias de Gestión</h2>
            <div className="p-8 border border-dashed border-border rounded-lg bg-surface-alt text-center">
              <svg className="w-12 h-12 text-text-muted mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-text font-semibold mb-2">Informes Oficiales</h3>
              <p className="text-text-muted">Los informes de gestión, balances y memorias institucionales estarán disponibles en este repositorio una vez sean publicados oficialmente.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

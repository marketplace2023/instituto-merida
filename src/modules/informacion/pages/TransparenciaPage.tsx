import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/modules/shared/components/ui/card"

export function TransparenciaPage() {
  const metricas = [
    { label: "Beneficiarios Directos", value: "Pendiente" },
    { label: "Ayudas Entregadas", value: "Pendiente" },
    { label: "Programas Activos", value: "Pendiente" },
    { label: "Municipios Atendidos", value: "Pendiente" },
  ]

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Header Breve */}
      <section className="bg-surface py-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-[1280px]">
          <h1 className="text-primary">Transparencia e Impacto</h1>
          <p className="text-text-muted mt-2">Rendición de cuentas y datos abiertos del Instituto.</p>
        </div>
      </section>

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
                  <p className="text-3xl font-bold text-secondary">{metrica.value}</p>
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
          <div className="max-w-3xl">
            <h2 className="text-primary mb-6">Memorias de Gestión</h2>
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

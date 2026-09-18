import React from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/modules/shared/components/ui/card"

export function AutoridadesPage() {
  const autoridades = [
    { cargo: "Presidencia", nombre: "Pendiente de validación institucional" },
    { cargo: "Gerencia General", nombre: "Pendiente de validación institucional" },
    { cargo: "Consultoría Jurídica", nombre: "Pendiente de validación institucional" },
    { cargo: "Gerencia de Beneficencia", nombre: "Pendiente de validación institucional" },
  ]

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Header Breve */}
      <section className="bg-surface py-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-[1280px]">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
            <Link to="/instituto" className="hover:text-primary transition-colors">El Instituto</Link>
            <span>/</span>
            <span className="text-text font-medium">Autoridades</span>
          </div>
          <h1 className="text-primary">Autoridades y Organigrama</h1>
        </div>
      </section>

      {/* Autoridades */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-[1280px] space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {autoridades.map((autoridad, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-modal transition-shadow">
                <div className="h-48 bg-surface-alt flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-border flex items-center justify-center mb-3">
                      {/* Generic User Icon SVG */}
                      <svg className="w-10 h-10 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-xs text-text-muted font-medium uppercase tracking-wider">Fotografía oficial pendiente</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-secondary text-lg mb-1">{autoridad.cargo}</h3>
                  <p className="text-sm text-text-muted">{autoridad.nombre}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Organigrama */}
          <div className="mt-20 pt-16 border-t border-border">
            <h2 className="text-primary mb-8 text-center">Estructura Organizativa</h2>
            <div className="max-w-4xl mx-auto p-12 border border-dashed border-border rounded-lg bg-surface-alt text-center">
              <svg className="w-12 h-12 text-text-muted mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="text-text font-semibold mb-2">Organigrama Oficial</h3>
              <p className="text-text-muted mb-4">Pendiente de publicación institucional.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

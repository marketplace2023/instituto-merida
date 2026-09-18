import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/modules/shared/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/modules/shared/components/ui/card"
import { Input } from "@/modules/shared/components/ui/input"

export function ProgramasSocialesPage() {
  // Mock data para el diseño visual
  const programas = [
    { id: 1, nombre: "Programa [Nombre Oficial 1]", area: "Salud", objetivo: "Objetivo pendiente de validación", estado: "Activo" },
    { id: 2, nombre: "Programa [Nombre Oficial 2]", area: "Educación", objetivo: "Objetivo pendiente de validación", estado: "En revisión" },
    { id: 3, nombre: "Programa [Nombre Oficial 3]", area: "Deporte", objetivo: "Objetivo pendiente de validación", estado: "Activo" },
    { id: 4, nombre: "Programa [Nombre Oficial 4]", area: "Cultura", objetivo: "Objetivo pendiente de validación", estado: "Próximamente" },
  ]

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Header Breve */}
      <section className="bg-surface py-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-[1280px]">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
            <Link to="/beneficencia" className="hover:text-primary transition-colors">Beneficencia</Link>
            <span>/</span>
            <span className="text-text font-medium">Programas Sociales</span>
          </div>
          <h1 className="text-primary">Programas Sociales</h1>
          <p className="text-text-muted mt-2">Catálogo oficial de programas de asistencia del Instituto.</p>
        </div>
      </section>

      {/* Toolbar & Filters */}
      <section className="py-8 px-4 bg-surface-alt border-b border-border">
        <div className="container mx-auto max-w-[1280px] flex flex-col md:flex-row gap-4">
          <Input 
            placeholder="Buscar programas..." 
            className="md:max-w-sm bg-surface"
          />
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {["Todos", "Salud", "Educación", "Deporte", "Cultura"].map(filter => (
              <Button key={filter} variant={filter === "Todos" ? "primary" : "ghost"} size="sm" className={filter !== "Todos" ? "bg-surface" : ""}>
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Listado de Programas */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programas.map((programa) => (
              <Card key={programa.id} className="hover:border-primary/50 transition-colors">
                <CardHeader className="pb-3 border-b border-border mb-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary">{programa.area}</span>
                      <CardTitle className="text-primary mt-1">{programa.nombre}</CardTitle>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      programa.estado === 'Activo' ? 'bg-success/10 text-success' : 
                      programa.estado === 'En revisión' ? 'bg-warning/10 text-warning' : 
                      'bg-surface-alt text-text-muted'
                    }`}>
                      {programa.estado}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-text-muted">{programa.objetivo}</p>
                  <div className="pt-2">
                    <Button variant="ghost" className="text-primary hover:text-primary-hover p-0 h-auto font-semibold">
                      Ver detalles →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

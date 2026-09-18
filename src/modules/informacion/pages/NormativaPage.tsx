import React from "react"
import { Button } from "@/modules/shared/components/ui/button"
import { Input } from "@/modules/shared/components/ui/input"

export function NormativaPage() {
  const documentos = [
    { id: 1, tipo: "Ley", titulo: "Ley de Registro y Control", numero: "Pendiente", fecha: "Pendiente" },
    { id: 2, tipo: "Reglamento", titulo: "Reglamento General de Loterías", numero: "Pendiente", fecha: "Pendiente" },
    { id: 3, tipo: "Providencia", titulo: "Providencia Administrativa sobre Tributos", numero: "Pendiente", fecha: "Pendiente" },
  ]

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <section className="bg-surface py-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-[1280px]">
          <h1 className="text-primary">Biblioteca Normativa</h1>
          <p className="text-text-muted mt-2">Leyes, reglamentos, resoluciones y providencias que rigen la institución.</p>
        </div>
      </section>

      <section className="py-8 px-4 bg-surface-alt border-b border-border">
        <div className="container mx-auto max-w-[1280px] flex flex-col md:flex-row gap-4">
          <Input placeholder="Buscar por título o número de gaceta..." className="md:max-w-md bg-surface" />
          <select className="h-12 rounded-sm border border-border bg-surface px-4 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Tipo de Documento</option>
            <option value="ley">Ley</option>
            <option value="reglamento">Reglamento</option>
            <option value="providencia">Providencia</option>
          </select>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-[1280px] space-y-4">
          {documentos.map(doc => (
            <div key={doc.id} className="bg-surface p-6 rounded-md border border-border hover:border-primary/50 transition-colors flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">{doc.tipo}</span>
                <h3 className="text-primary text-lg font-semibold">{doc.titulo}</h3>
                <div className="flex gap-4 text-sm text-text-muted">
                  <span>Nº Gaceta/Providencia: {doc.numero}</span>
                  <span>Fecha: {doc.fecha}</span>
                </div>
              </div>
              <Button variant="secondary" size="sm">Descargar PDF</Button>
            </div>
          ))}
          <div className="mt-8 p-4 bg-surface-alt border border-border rounded-md text-sm text-text-muted text-center">
            Mostrando estructura de prueba. Documentos legales reales pendientes de publicación institucional.
          </div>
        </div>
      </section>
    </div>
  )
}

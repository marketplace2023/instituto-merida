import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/modules/shared/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/modules/shared/components/ui/card"
import { Input } from "@/modules/shared/components/ui/input"

export function JuegosAutorizadosPage() {
  const juegos = [
    { id: 1, nombre: "Juego Oficial [Pendiente]", operador: "Operador A", modalidad: "Lotería Tradicional", licencia: "LIC-001", estado: "Activo" },
    { id: 2, nombre: "Juego Oficial [Pendiente]", operador: "Operador B", modalidad: "Triple", licencia: "LIC-002", estado: "Activo" },
    { id: 3, nombre: "Juego Oficial [Pendiente]", operador: "Operador C", modalidad: "Lotería Instantánea", licencia: "LIC-003", estado: "Suspendido" },
  ]

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Header Breve */}
      <section className="bg-surface py-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-[1280px]">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
            <Link to="/loteria" className="hover:text-primary transition-colors">Lotería y Juegos</Link>
            <span>/</span>
            <span className="text-text font-medium">Juegos Autorizados</span>
          </div>
          <h1 className="text-primary">Juegos Oficiales Autorizados</h1>
          <p className="text-text-muted mt-2">Catálogo de modalidades de juego con licencia vigente en el estado Mérida.</p>
        </div>
      </section>

      {/* Toolbar & Filters */}
      <section className="py-8 px-4 bg-surface-alt border-b border-border">
        <div className="container mx-auto max-w-[1280px] flex flex-col md:flex-row gap-4">
          <Input 
            placeholder="Buscar por nombre o licencia..." 
            className="md:max-w-md bg-surface"
          />
          <select className="h-12 rounded-sm border border-border bg-surface px-4 text-sm text-text md:w-64 focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Todas las modalidades</option>
            <option value="tradicional">Lotería Tradicional</option>
            <option value="triple">Triples y Terminales</option>
            <option value="instantanea">Instantánea (Raspaítos)</option>
          </select>
        </div>
      </section>

      {/* Listado de Juegos */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {juegos.map((juego) => (
              <Card key={juego.id} className="hover:border-primary/50 transition-colors">
                <CardHeader className="pb-4 border-b border-border">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary">{juego.modalidad}</span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      juego.estado === 'Activo' ? 'bg-success/10 text-success' : 'bg-error/10 text-error'
                    }`}>
                      {juego.estado}
                    </span>
                  </div>
                  <CardTitle className="text-primary">{juego.nombre}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-text-muted">Operador:</span>
                    <span className="font-medium text-text">{juego.operador}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-text-muted">Licencia/Resolución:</span>
                    <span className="font-mono text-text">{juego.licencia}</span>
                  </div>
                  <div className="pt-4 flex gap-2">
                    <Button variant="secondary" className="w-full" size="sm">Ver Reglamento</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Warning Footer */}
          <div className="mt-12 p-4 bg-info/10 border border-info/20 rounded-md text-sm text-info flex gap-3">
            <span className="text-xl">ℹ️</span>
            <p>
              Cualquier modalidad de juego que no se encuentre en este listado oficial no está autorizada para operar en el estado Mérida. Denuncie irregularidades a través de nuestros canales de Atención Ciudadana.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

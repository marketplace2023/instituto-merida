import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/modules/shared/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/modules/shared/components/ui/card"
import { Input } from "@/modules/shared/components/ui/input"

export function ResultadosOficialesPage() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Header Breve */}
      <section className="bg-surface py-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-[1280px]">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
            <Link to="/loteria" className="hover:text-primary transition-colors">Lotería y Juegos</Link>
            <span>/</span>
            <span className="text-text font-medium">Resultados Oficiales</span>
          </div>
          <h1 className="text-primary">Resultados Oficiales</h1>
          <p className="text-text-muted mt-2">Buscador y verificador de actas de sorteos institucionales.</p>
        </div>
      </section>

      {/* Warning */}
      <div className="bg-warning text-white p-4 text-sm text-center font-medium">
        Advertencia: El único resultado oficial válido para cobro de premios es el avalado en el acta de la Lotería de Mérida.
      </div>

      <div className="container mx-auto max-w-[1280px] px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Buscador Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="sticky top-24">
            <CardHeader className="border-b border-border pb-4 mb-4">
              <CardTitle>Consultar Sorteo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text">Juego Autorizado</label>
                <select className="w-full h-12 rounded-sm border border-border bg-surface px-4 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Seleccione un juego</option>
                  <option value="juego1">Juego Oficial 1</option>
                  <option value="juego2">Juego Oficial 2</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text">Fecha del Sorteo</label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text">Número de Sorteo (Opcional)</label>
                <Input placeholder="Ej. 1024" />
              </div>
              <div className="pt-4">
                <Button className="w-full">Buscar Resultados</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resultados View */}
        <div className="lg:col-span-8 space-y-6">
          <Card>
            <CardHeader className="bg-surface-alt border-b border-border pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider block mb-1">
                    Sorteo N° 1024
                  </span>
                  <CardTitle className="text-primary text-2xl">Juego Oficial [Pendiente]</CardTitle>
                </div>
                <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 bg-success/10 text-success rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  VERIFICADO
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="space-y-1">
                  <p className="text-xs text-text-muted">Fecha</p>
                  <p className="font-medium text-text">15 Sep 2026</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-text-muted">Hora</p>
                  <p className="font-medium text-text">19:00 VET</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-text-muted">Operador</p>
                  <p className="font-medium text-text">Operador Demo C.A.</p>
                </div>
              </div>

              {/* Resultado Visual Sobrio */}
              <div className="bg-background rounded-md p-8 text-center border border-border mb-8">
                <p className="text-sm text-text-muted mb-4 uppercase tracking-widest font-semibold">Combinación Ganadora</p>
                <div className="flex justify-center gap-3">
                  {/* Cajas de resultado sin animaciones */}
                  <div className="w-16 h-16 rounded-md bg-surface border-2 border-primary flex items-center justify-center text-2xl font-bold text-primary">0</div>
                  <div className="w-16 h-16 rounded-md bg-surface border-2 border-primary flex items-center justify-center text-2xl font-bold text-primary">4</div>
                  <div className="w-16 h-16 rounded-md bg-surface border-2 border-primary flex items-center justify-center text-2xl font-bold text-primary">7</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-border">
                <p className="text-xs text-text-muted">
                  Acta firmada digitalmente. ID: <span className="font-mono">PENDIENTE-VALIDACION</span>
                </p>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button variant="secondary" size="sm" className="w-full sm:w-auto">Ver Acta Completa</Button>
                  <Button variant="ghost" size="sm" className="w-full sm:w-auto">Compartir</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Incidencias Bloque */}
          <div className="p-4 border-l-4 border-info bg-surface-alt rounded-r-md flex gap-3">
            <span className="text-xl">ℹ️</span>
            <div>
              <p className="text-sm font-semibold text-text mb-1">Correcciones e Incidencias</p>
              <p className="text-sm text-text-muted">No se han registrado correcciones para este sorteo. El resultado actual es firme y definitivo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

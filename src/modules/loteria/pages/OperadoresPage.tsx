import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/modules/shared/components/ui/button"
import { Input } from "@/modules/shared/components/ui/input"

export function OperadoresPage() {
  const operadores = [
    { id: 1, razonSocial: "Operadora Andina C.A.", nombreComercial: "Suerte Mérida", tipo: "Comercializadora", licencia: "LIC-001", municipio: "Libertador", estado: "Activo" },
    { id: 2, nombreComercial: "Juegos del Páramo", razonSocial: "Inversiones Páramo C.A.", tipo: "Centro de Apuestas", licencia: "LIC-CA-042", municipio: "Ejido", estado: "Activo" },
    { id: 3, nombreComercial: "Lotería El Teleférico", razonSocial: "Corp Teleférico C.A.", tipo: "Comercializadora", licencia: "LIC-005", municipio: "Libertador", estado: "Suspendido" },
  ]

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Header Breve */}
      <section className="bg-surface py-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-[1280px]">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
            <Link to="/loteria" className="hover:text-primary transition-colors">Lotería y Juegos</Link>
            <span>/</span>
            <span className="text-text font-medium">Operadores Autorizados</span>
          </div>
          <h1 className="text-primary">Directorio de Operadores</h1>
          <p className="text-text-muted mt-2">Empresas, comercializadoras y centros con licencia vigente expedida por el Instituto.</p>
        </div>
      </section>

      {/* Toolbar & Filters */}
      <section className="py-8 px-4 bg-surface-alt border-b border-border">
        <div className="container mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <Input placeholder="Buscar por Razón Social, Nombre Comercial o RIF..." className="bg-surface" />
          </div>
          <select className="h-12 rounded-sm border border-border bg-surface px-4 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Tipo de Autorización</option>
            <option value="comercializadora">Comercializadora</option>
            <option value="centro">Centro de Apuestas</option>
          </select>
          <select className="h-12 rounded-sm border border-border bg-surface px-4 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Municipio</option>
            <option value="libertador">Libertador</option>
            <option value="ejido">Campo Elías (Ejido)</option>
          </select>
        </div>
      </section>

      {/* Desktop Table View */}
      <section className="py-12 px-4 hidden lg:block">
        <div className="container mx-auto max-w-[1280px]">
          <div className="bg-surface rounded-lg border border-border overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-alt border-b border-border text-sm text-text-muted font-semibold uppercase tracking-wider">
                  <th className="p-4">Operador</th>
                  <th className="p-4">Tipo</th>
                  <th className="p-4">Licencia</th>
                  <th className="p-4">Ubicación</th>
                  <th className="p-4">Estado</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-border">
                {operadores.map(op => (
                  <tr key={op.id} className="hover:bg-background/50 transition-colors">
                    <td className="p-4">
                      <p className="font-semibold text-primary">{op.nombreComercial}</p>
                      <p className="text-text-muted text-xs">{op.razonSocial}</p>
                    </td>
                    <td className="p-4 text-text">{op.tipo}</td>
                    <td className="p-4 font-mono text-text-muted">{op.licencia}</td>
                    <td className="p-4 text-text">{op.municipio}</td>
                    <td className="p-4">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                        op.estado === 'Activo' ? 'bg-success/10 text-success' : 'bg-error/10 text-error'
                      }`}>
                        {op.estado}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">Ficha</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center text-sm text-text-muted">
            <p>Mostrando {operadores.length} operadores registrados.</p>
            <p>Última actualización: Pendiente de validación</p>
          </div>
        </div>
      </section>

      {/* Mobile Card View */}
      <section className="py-6 px-4 lg:hidden">
        <div className="container mx-auto space-y-4">
          {operadores.map(op => (
            <div key={op.id} className="bg-surface p-4 rounded-md border border-border space-y-3">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h3 className="font-semibold text-primary">{op.nombreComercial}</h3>
                  <p className="text-xs text-text-muted">{op.razonSocial}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  op.estado === 'Activo' ? 'bg-success/10 text-success' : 'bg-error/10 text-error'
                }`}>
                  {op.estado}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm border-t border-border pt-3">
                <div>
                  <p className="text-xs text-text-muted">Tipo</p>
                  <p>{op.tipo}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted">Licencia</p>
                  <p className="font-mono">{op.licencia}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted">Municipio</p>
                  <p>{op.municipio}</p>
                </div>
              </div>
              <Button variant="secondary" className="w-full mt-2" size="sm">Ver Ficha Completa</Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

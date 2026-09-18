import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/modules/shared/components/ui/button"
import { Card, CardContent } from "@/modules/shared/components/ui/card"
import { Input } from "@/modules/shared/components/ui/input"

export function SolicitudPage() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <section className="bg-surface py-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-[1280px]">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
            <Link to="/beneficencia" className="hover:text-primary transition-colors">Beneficencia</Link>
            <span>/</span>
            <span className="text-text font-medium">Solicitar Apoyo</span>
          </div>
          <h1 className="text-primary">Solicitud de Asistencia Social</h1>
          <p className="text-text-muted mt-2">Formulario oficial para ingresar solicitudes de ayudas y programas sociales.</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-[1280px] max-w-3xl">
          <div className="bg-info/10 border border-info/20 text-info p-4 rounded-md mb-8 text-sm flex gap-3">
            <span className="text-xl">ℹ️</span>
            <div>
              <p className="font-semibold mb-1">Antes de comenzar</p>
              <p>Asegúrese de tener a mano digitalizados los informes médicos, constancias o recaudos correspondientes a su solicitud para agilizar el trámite.</p>
            </div>
          </div>

          <Card className="bg-surface">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">Datos del Solicitante</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text">Nombre completo *</label>
                      <Input placeholder="Ej. Juan Pérez" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text">Cédula de Identidad *</label>
                      <Input placeholder="Ej. V-12345678" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text">Teléfono de contacto *</label>
                      <Input placeholder="Ej. 0414-0000000" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text">Correo electrónico</label>
                      <Input type="email" placeholder="Para recibir notificaciones" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">Detalles de la Solicitud</h3>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text">Área de Atención *</label>
                    <select className="w-full h-12 rounded-sm border border-border bg-surface px-4 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary" required>
                      <option value="">Seleccione el tipo de ayuda</option>
                      <option value="salud">Salud (Tratamientos, Insumos, Cirugías)</option>
                      <option value="educacion">Educación (Becas, Útiles)</option>
                      <option value="deporte">Deporte (Equipos, Instalaciones)</option>
                      <option value="contingencia">Contingencias y Casos Especiales</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text">Descripción breve del caso *</label>
                    <textarea 
                      className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px] resize-y" 
                      placeholder="Describa brevemente la situación y qué tipo de apoyo específico requiere..."
                      required
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text">Adjuntar Documentación de Respaldo</label>
                    <div className="border-2 border-dashed border-border rounded-md p-6 text-center bg-surface-alt">
                      <p className="text-sm text-text-muted mb-2">Arrastre aquí sus archivos (PDF, JPG) o haga clic para seleccionar.</p>
                      <Button variant="secondary" size="sm" type="button">Seleccionar archivos</Button>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex justify-end gap-4">
                  <Button variant="ghost" asChild>
                    <Link to="/beneficencia">Cancelar</Link>
                  </Button>
                  <Button type="submit">Enviar Solicitud</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

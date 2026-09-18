import React from "react"
import { Button } from "@/modules/shared/components/ui/button"
import { Card, CardContent } from "@/modules/shared/components/ui/card"
import { Input } from "@/modules/shared/components/ui/input"

export function ContactoPage() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <section className="bg-surface py-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-[1280px]">
          <h1 className="text-primary">Atención Ciudadana y Contacto</h1>
          <p className="text-text-muted mt-2">Canales oficiales de comunicación con la Lotería de Mérida.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Canales Oficiales */}
          <div className="space-y-8">
            <h2 className="text-primary">Información de Contacto</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-surface shadow-sm border border-border">
                <CardContent className="p-6 space-y-2">
                  <div className="text-secondary text-2xl mb-2">📍</div>
                  <h3 className="text-text font-semibold">Sede Principal</h3>
                  <p className="text-sm text-text-muted">Dirección oficial pendiente de publicación institucional.</p>
                </CardContent>
              </Card>
              <Card className="bg-surface shadow-sm border border-border">
                <CardContent className="p-6 space-y-2">
                  <div className="text-secondary text-2xl mb-2">📞</div>
                  <h3 className="text-text font-semibold">Teléfonos</h3>
                  <p className="text-sm text-text-muted">Pendiente de publicación institucional.</p>
                </CardContent>
              </Card>
              <Card className="bg-surface shadow-sm border border-border">
                <CardContent className="p-6 space-y-2">
                  <div className="text-secondary text-2xl mb-2">✉️</div>
                  <h3 className="text-text font-semibold">Correo Electrónico</h3>
                  <p className="text-sm text-text-muted">Pendiente de publicación institucional.</p>
                </CardContent>
              </Card>
              <Card className="bg-surface shadow-sm border border-border">
                <CardContent className="p-6 space-y-2">
                  <div className="text-secondary text-2xl mb-2">🕒</div>
                  <h3 className="text-text font-semibold">Horario de Atención</h3>
                  <p className="text-sm text-text-muted">Pendiente de publicación institucional.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Formulario */}
          <Card className="bg-surface">
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-primary text-2xl font-semibold mb-2">Envíanos un mensaje</h3>
                <p className="text-sm text-text-muted">Complete el siguiente formulario para consultas, reclamos o sugerencias.</p>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text">Nombre completo *</label>
                  <Input placeholder="Ingrese su nombre" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text">Correo electrónico o Teléfono *</label>
                  <Input placeholder="Medio para contactarle" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text">Asunto *</label>
                  <select className="w-full h-12 rounded-sm border border-border bg-surface px-4 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary" required>
                    <option value="">Seleccione un asunto</option>
                    <option value="consulta">Consulta General</option>
                    <option value="reclamo">Reclamo / Denuncia</option>
                    <option value="tramite">Ayuda con un Trámite</option>
                    <option value="sugerencia">Sugerencia</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text">Mensaje *</label>
                  <textarea 
                    className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px] resize-y" 
                    placeholder="Describa su solicitud..."
                    required
                  ></textarea>
                </div>
                <div className="flex items-start gap-2 py-2">
                  <input type="checkbox" id="consent" className="mt-1" required />
                  <label htmlFor="consent" className="text-xs text-text-muted leading-tight">
                    Consiento el tratamiento de mis datos personales únicamente para gestionar esta solicitud, de acuerdo con las políticas de privacidad.
                  </label>
                </div>
                <Button type="submit" className="w-full">Enviar Mensaje</Button>
              </form>
            </div>
          </Card>

        </div>
      </section>
    </div>
  )
}

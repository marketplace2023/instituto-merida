import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/modules/shared/components/ui/button"
import { Card, CardContent } from "@/modules/shared/components/ui/card"
import { Input } from "@/modules/shared/components/ui/input"

export function ConsultaSolicitudPage() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <section className="bg-surface py-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-[1280px]">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
            <Link to="/beneficencia" className="hover:text-primary transition-colors">Beneficencia</Link>
            <span>/</span>
            <span className="text-text font-medium">Consultar Estado</span>
          </div>
          <h1 className="text-primary">Consulta de Trámites</h1>
          <p className="text-text-muted mt-2">Verifique el estatus de su solicitud ingresando el número de seguimiento.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-[1280px] max-w-xl text-center">
          <Card className="bg-surface">
            <CardContent className="p-8 space-y-6">
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl mb-4">
                🔍
              </div>
              <div>
                <h2 className="text-xl font-semibold text-text mb-2">Ingresar Localizador</h2>
                <p className="text-sm text-text-muted">El código de seguimiento fue enviado a su correo electrónico al momento de realizar la solicitud.</p>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Input placeholder="Ej. LMER-2026-0001" className="text-center font-mono uppercase text-lg" required />
                </div>
                <div className="pt-2">
                  <Button type="submit" className="w-full">Consultar Estatus</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-sm text-text-muted">
            ¿Perdió su código de seguimiento? <Link to="/contacto" className="text-primary font-medium hover:underline">Contacte a atención ciudadana</Link>.
          </div>
        </div>
      </section>
    </div>
  )
}

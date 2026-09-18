import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/modules/shared/components/ui/button"
import { Card, CardContent } from "@/modules/shared/components/ui/card"
import { Input } from "@/modules/shared/components/ui/input"

export function PortalLoginPage() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Navbar simplificada para el portal */}
      <header className="bg-surface border-b border-border py-4 px-6 flex justify-between items-center">
        <div className="font-bold text-primary flex items-center gap-3">
          <img src="/logo.jpg" alt="Lotería de Mérida" className="h-8 w-auto" />
          <span className="text-xs font-normal px-2 py-0.5 bg-secondary/10 text-secondary rounded-full">Portal Privado</span>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/">Volver al Sitio Público</Link>
        </Button>
      </header>

      {/* Login Area */}
      <div className="flex-1 flex items-center justify-center p-4 py-12">
        <Card className="w-full max-w-md bg-surface shadow-modal border-none">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-primary mb-2">Ingreso al Sistema</h1>
              <p className="text-sm text-text-muted">Exclusivo para operadores legales, centros autorizados y personal institucional.</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text">Correo electrónico o Usuario</label>
                <Input type="text" placeholder="usuario@operador.com" required />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-text">Contraseña</label>
                  <a href="#" className="text-xs text-primary hover:underline">¿Olvidó su contraseña?</a>
                </div>
                <Input type="password" placeholder="••••••••" required />
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="w-full text-md h-12">Iniciar Sesión</Button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-text-muted">
                ¿Es un nuevo operador y desea registrarse?
                <br />
                <Link to="/tramites" className="text-primary font-medium hover:underline mt-2 inline-block">Consultar Requisitos de Registro</Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="py-6 text-center text-xs text-text-muted bg-surface border-t border-border">
        <p>Instituto de Beneficencia Pública y Asistencia Social del Estado Mérida</p>
        <p className="mt-1">El acceso no autorizado a este sistema está penado por la ley.</p>
      </footer>
    </div>
  )
}

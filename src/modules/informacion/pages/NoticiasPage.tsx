import React from "react"
import { Card, CardContent } from "@/modules/shared/components/ui/card"

export function NoticiasPage() {
  const noticias = [
    { id: 1, categoria: "Beneficencia", titulo: "Jornada de Salud Atendió a Comunidades del Páramo", fecha: "Pendiente" },
    { id: 2, categoria: "Institucional", titulo: "Nuevas Autoridades de la Lotería de Mérida", fecha: "Pendiente" },
    { id: 3, categoria: "Trámites", titulo: "Actualización de Requisitos para Registro de Operadores", fecha: "Pendiente" },
    { id: 4, categoria: "Lotería", titulo: "Resultados Oficiales del Sorteo Especial", fecha: "Pendiente" },
  ]

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <section className="bg-surface py-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-[1280px]">
          <h1 className="text-primary">Noticias e Información</h1>
          <p className="text-text-muted mt-2">Sala de prensa oficial de la Lotería de Mérida.</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map(noticia => (
              <Card key={noticia.id} className="overflow-hidden hover:shadow-card transition-shadow">
                <div className="h-48 bg-surface-alt flex items-center justify-center border-b border-border">
                  <span className="text-text-muted text-sm font-medium">Fotografía Real Pendiente</span>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold uppercase tracking-wider text-secondary">{noticia.categoria}</span>
                    <span className="text-text-muted">{noticia.fecha}</span>
                  </div>
                  <h3 className="text-primary text-xl font-semibold leading-snug">{noticia.titulo}</h3>
                  <p className="text-sm text-text-muted line-clamp-3">
                    [Contenido del artículo pendiente de redacción oficial. La plataforma está preparada para integrar el CMS institucional].
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import React from "react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-primary text-on-primary py-[80px]">
      <div className="container mx-auto max-w-[1280px] px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="bg-surface inline-block p-2 rounded-md mb-4 shadow-sm">
            <img src="/logo.jpg" alt="Lotería de Mérida" className="h-10 w-auto" />
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Instituto de Beneficencia Pública y Asistencia Social.
            <br />
            Comprometidos con la salud, educación, deporte y cultura.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <img src="/logo_two.png" alt="Logo 2" className="h-10 w-auto bg-surface rounded p-1 object-contain" />
            <img src="/logo_three.jpg" alt="Logo 3" className="h-10 w-auto bg-surface rounded p-1 object-contain" />
            <img src="/logo_four.webp" alt="Logo 4" className="h-10 w-auto bg-surface rounded p-1 object-contain" />
            <img src="/mayor18_.jpg" alt="Mayor de 18 años" className="h-10 w-auto bg-surface rounded p-1 object-contain" />
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/instituto" className="hover:underline">El Instituto</Link></li>
            <li><Link to="/beneficencia" className="hover:underline">Beneficencia</Link></li>
            <li><Link to="/loteria" className="hover:underline">Resultados Oficiales</Link></li>
            <li><Link to="/tramites" className="hover:underline">Trámites y Servicios</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Transparencia</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/transparencia" className="hover:underline">Rendición de Cuentas</Link></li>
            <li><Link to="/normativa" className="hover:underline">Marco Normativo</Link></li>
            <li><Link to="/contacto" className="hover:underline">Atención Ciudadana</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/terminos" className="hover:underline">Términos y Condiciones</Link></li>
            <li><Link to="/privacidad" className="hover:underline">Política de Privacidad</Link></li>
            <li><Link to="/accesibilidad" className="hover:underline">Accesibilidad</Link></li>
            <li><Link to="/juego-responsable" className="hover:underline">Juego Responsable</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto max-w-[1280px] px-4 mt-12 pt-8 border-t border-on-primary/20 text-sm opacity-80 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Lotería de Mérida. Pendiente de publicación oficial.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {/* Social icons placeholders */}
          <span className="w-8 h-8 rounded-full bg-on-primary/20 flex items-center justify-center">IG</span>
          <span className="w-8 h-8 rounded-full bg-on-primary/20 flex items-center justify-center">X</span>
        </div>
      </div>
    </footer>
  )
}

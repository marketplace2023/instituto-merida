import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./modules/shared/components/layout/MainLayout"
import { HomePage } from "./modules/home/pages/HomePage"
import { InstitutoPage } from "./modules/instituto/pages/InstitutoPage"
import { AutoridadesPage } from "./modules/instituto/pages/AutoridadesPage"
import { BeneficenciaPage } from "./modules/beneficencia/pages/BeneficenciaPage"
import { ProgramasSocialesPage } from "./modules/beneficencia/pages/ProgramasSocialesPage"
import { SolicitudPage } from "./modules/beneficencia/pages/SolicitudPage"
import { ConsultaSolicitudPage } from "./modules/beneficencia/pages/ConsultaSolicitudPage"
import { LoteriaPage } from "./modules/loteria/pages/LoteriaPage"
import { JuegosAutorizadosPage } from "./modules/loteria/pages/JuegosAutorizadosPage"
import { ResultadosOficialesPage } from "./modules/loteria/pages/ResultadosOficialesPage"
import { OperadoresPage } from "./modules/loteria/pages/OperadoresPage"
import { TramitesPage } from "./modules/tramites/pages/TramitesPage"
import { TransparenciaPage } from "./modules/informacion/pages/TransparenciaPage"
import { NormativaPage } from "./modules/informacion/pages/NormativaPage"
import { NoticiasPage } from "./modules/informacion/pages/NoticiasPage"
import { ContactoPage } from "./modules/contacto/pages/ContactoPage"
import { PortalLoginPage } from "./modules/portal/pages/PortalLoginPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          
          {/* Módulo Instituto */}
          <Route path="instituto">
            <Route index element={<InstitutoPage />} />
            <Route path="autoridades" element={<AutoridadesPage />} />
          </Route>

          {/* Módulo Beneficencia */}
          <Route path="beneficencia">
            <Route index element={<BeneficenciaPage />} />
            <Route path="programas" element={<ProgramasSocialesPage />} />
            <Route path="solicitar" element={<SolicitudPage />} />
            <Route path="consultar" element={<ConsultaSolicitudPage />} />
          </Route>

          {/* Módulo Lotería */}
          <Route path="loteria">
            <Route index element={<LoteriaPage />} />
            <Route path="juegos" element={<JuegosAutorizadosPage />} />
            <Route path="resultados" element={<ResultadosOficialesPage />} />
            <Route path="operadores" element={<OperadoresPage />} />
          </Route>

          {/* Módulo Trámites */}
          <Route path="tramites" element={<TramitesPage />} />

          {/* Módulo Información Pública */}
          <Route path="transparencia" element={<TransparenciaPage />} />
          <Route path="normativa" element={<NormativaPage />} />
          <Route path="noticias" element={<NoticiasPage />} />
          <Route path="contacto" element={<ContactoPage />} />

          {/* 404 */}
          <Route path="*" element={<div className="p-20 text-center text-error font-bold">Página no encontrada (404)</div>} />
        </Route>

        {/* Portal (Outside MainLayout so it has its own layout/nav) */}
        <Route path="/portal" element={<PortalLoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

---
version: "alpha"
name: "Lotería de Mérida — Portal Institucional"
description: "Sistema visual institucional, accesible y responsive para el Instituto de Beneficencia Pública y Asistencia Social Lotería de Mérida. Prioriza beneficencia, transparencia, trámites y lotería regulada, evitando estética de casino."
colors:
  primary: "#123B5D"
  primary-hover: "#0D2D48"
  secondary: "#1E6B52"
  secondary-hover: "#15523E"
  tertiary: "#C79A32"
  tertiary-hover: "#AD8126"
  background: "#F6F8F7"
  surface: "#FFFFFF"
  surface-alt: "#EAF0EE"
  text: "#17222B"
  text-muted: "#5F6B73"
  border: "#D6DEE2"
  on-primary: "#FFFFFF"
  on-secondary: "#FFFFFF"
  on-tertiary: "#17222B"
  success: "#1E6B52"
  warning: "#C79A32"
  error: "#B42318"
  info: "#236A9B"
typography:
  display:
    fontFamily: "Public Sans"
    fontSize: "3.75rem"
    fontWeight: "700"
    lineHeight: "1.08"
    letterSpacing: "-0.03em"
  h1:
    fontFamily: "Public Sans"
    fontSize: "3rem"
    fontWeight: "700"
    lineHeight: "1.12"
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Public Sans"
    fontSize: "2.25rem"
    fontWeight: "700"
    lineHeight: "1.18"
  h3:
    fontFamily: "Public Sans"
    fontSize: "1.5rem"
    fontWeight: "650"
    lineHeight: "1.25"
  body-lg:
    fontFamily: "Public Sans"
    fontSize: "1.125rem"
    fontWeight: "400"
    lineHeight: "1.65"
  body-md:
    fontFamily: "Public Sans"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  body-sm:
    fontFamily: "Public Sans"
    fontSize: "0.875rem"
    fontWeight: "400"
    lineHeight: "1.5"
  label:
    fontFamily: "Public Sans"
    fontSize: "0.875rem"
    fontWeight: "650"
    lineHeight: "1.25"
    letterSpacing: "0.01em"
  overline:
    fontFamily: "Public Sans"
    fontSize: "0.75rem"
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: "0.08em"
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "18px"
  xl: "28px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 18px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 18px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.secondary-hover}"
    textColor: "{colors.on-secondary}"
  button-accent:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 18px"
    height: "48px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "24px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "48px"
  navbar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    height: "80px"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
---

## Overview

Portal digital institucional para el **Instituto de Beneficencia Pública y Asistencia Social “Lotería de Mérida”**. La experiencia debe comunicar, en este orden conceptual:

1. **Beneficencia y servicio público.**
2. **Transparencia y confianza.**
3. **Trámites y atención.**
4. **Actividad de lotería regulada y responsable.**

La interfaz NO debe parecer un casino, sportsbook, bingo privado ni plataforma de apuestas agresiva. Evitar neón, fondos negros dominantes, fichas de casino, ruletas, jackpots gigantes, lluvia de monedas, animaciones compulsivas o lenguaje de urgencia para apostar.

La identidad visual debe sentirse **andina, merideña, pública, contemporánea, confiable, humana y accesible**. Usar fotografía documental real de Mérida y de actividades institucionales autorizadas.

## Colors

- **Primary `#123B5D`:** azul andino profundo. Encabezados institucionales, navegación activa, CTA principal, footer.
- **Secondary `#1E6B52`:** verde páramo. Beneficencia, salud, programas sociales, estados exitosos.
- **Tertiary `#C79A32`:** dorado sobrio. Acentos, indicadores, hitos; no usar con texto blanco.
- **Background `#F6F8F7`:** fondo general cálido y limpio.
- **Surface `#FFFFFF`:** tarjetas, formularios, tablas.
- **Surface-alt `#EAF0EE`:** bloques de apoyo y separadores.
- **Text `#17222B`:** texto principal.
- **Text-muted `#5F6B73`:** metadatos y texto secundario.
- **Error `#B42318`:** validación y errores.
- **Info `#236A9B`:** mensajes informativos.

Regla: no usar el dorado para párrafos, texto pequeño o botones con texto blanco. Mantener contraste WCAG AA.

## Typography

Usar **Public Sans** como familia única para máxima consistencia institucional y buena lectura digital.

- Display: hero institucional.
- H1: título de página.
- H2: secciones principales.
- H3: tarjetas y módulos.
- Body: textos informativos.
- Label: botones, campos, filtros, tablas.
- Overline: etiquetas como “BENEFICENCIA”, “TRÁMITES”, “TRANSPARENCIA”.

No usar tipografías decorativas, manuscritas, de casino o serif ornamentales.

## Layout

- Contenedor desktop máximo: **1200–1280 px**.
- Grid: **12 columnas desktop**, 8 tablet, 4 móvil.
- Breakpoints de referencia: 1440 / 1280 / 1024 / 768 / 390 px.
- Espaciado base: múltiplos de 8 px.
- Separación vertical de secciones desktop: 80 px; móvil: 48–56 px.
- Header desktop: 80 px; header móvil: 64 px.
- Formularios: ancho legible máximo 760–880 px.
- Texto editorial: máximo 70–75 caracteres por línea.
- Tablas complejas: scroll horizontal controlado en móvil; priorizar tarjetas resumidas cuando sea posible.
- Breadcrumbs en páginas internas.
- Footer de 4 columnas en desktop y acordeón en móvil.

## Elevation & Depth

Diseño predominantemente plano. Usar sombras suaves únicamente para separar tarjetas interactivas, menús desplegables y modales.

- Card: `0 4px 18px rgba(18,59,93,0.08)`.
- Dropdown/modal: `0 12px 32px rgba(18,34,43,0.14)`.
- No usar glassmorphism, reflejos brillantes ni 3D de casino.

## Shapes

- Tarjetas: radio 12 px.
- Hero image: 18–28 px en composiciones editoriales; puede llegar a borde en desktop.
- Botones: 8 px.
- Chips/filtros: pill.
- Iconografía: línea simple, 20–24 px, consistente.
- Fotos: recortes 16:9, 4:3 y 3:2; evitar collages densos.

## Components

### Header global
Dos niveles opcionales:
1. Barra utilitaria: accesibilidad, contacto, búsqueda.
2. Navegación principal: Inicio, Instituto, Beneficencia, Lotería, Trámites, Transparencia, Normativa, Noticias, Contacto.
CTA: **Portal en línea**.

### Hero institucional
Fotografía real de Mérida o acción social, overlay leve azul para legibilidad, título máximo 2 líneas, subtítulo máximo 3 líneas, dos CTA.

### Cards
Variantes:
- programa social;
- trámite;
- estadística;
- noticia;
- juego/licencia;
- documento normativo;
- operador autorizado.

### Formularios
- labels persistentes;
- ayuda contextual;
- validación inline;
- indicador de pasos;
- resumen antes de enviar;
- número de solicitud al finalizar.

### Tablas institucionales
Cabecera sticky cuando sea útil, filtros, búsqueda, exportar/descargar solo si existe una función real.

### Status badges
`Vigente`, `En revisión`, `Aprobado`, `Rechazado`, `Vencido`, `Pendiente de pago`.
Nunca depender únicamente del color: incluir texto e icono.

### Search
Buscador global en header y búsqueda específica en Normativa, Operadores, Noticias y Resultados.

### Footer
Nombre legal, navegación, atención ciudadana, contacto, redes verificadas, términos, privacidad, accesibilidad y juego responsable.

## Do's and Don'ts

### Do
- Priorizar beneficencia en el Home.
- Utilizar fotos reales, actuales y autorizadas.
- Mostrar claramente fuente/fecha de resultados y documentos.
- Diseñar para móvil desde el inicio.
- Mantener estados vacíos honestos: “Información pendiente de publicación oficial”.
- Diferenciar ciudadanos, operadores y administradores.
- Incluir accesibilidad, privacidad y juego responsable.
- Mantener lenguaje institucional claro.

### Don't
- No inventar autoridades, cifras, beneficiarios, juegos, tarifas, cuentas bancarias, teléfonos ni direcciones.
- No inventar logos oficiales.
- No mostrar “premios millonarios” o estímulos visuales que dominen la identidad.
- No presentar fotografías generadas por IA como hechos reales.
- No publicar fotos sensibles de beneficiarios sin autorización.
- No usar contadores ficticios como si fueran datos reales.
- No copiar visualmente la web de Anzoátegui: usarla solo como referencia funcional.

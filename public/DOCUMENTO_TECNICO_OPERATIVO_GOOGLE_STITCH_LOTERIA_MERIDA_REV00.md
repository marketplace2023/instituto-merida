# DOCUMENTO TÉCNICO–OPERATIVO PARA GOOGLE STITCH  
## Portal Digital — Instituto de Beneficencia Pública y Asistencia Social “Lotería de Mérida”

**Código:** DTOP-STITCH-LM-001  
**Revisión:** REV00  
**Fecha:** 2026-09-18  
**Estado:** Base de diseño / información institucional por validar  
**Idioma:** Español (Venezuela)  
**Producto objetivo:** Portal institucional público + Portal de operadores + Backoffice administrativo  
**Herramienta de diseño:** Google Stitch  
**Archivo complementario:** `DESIGN.md`

> **Principio rector:** construir primero una plataforma institucional de beneficencia, transparencia y servicio público; la actividad de lotería se presenta como una función regulada dentro del portal, no como una experiencia visual de casino.

---

# 1. Propósito del documento

Este documento sirve como **brief maestro de producto**, **guía técnico-operativa**, **arquitectura de información**, **manual de dirección visual** y **biblioteca de prompts** para generar el diseño completo de la plataforma en Google Stitch.

Está preparado para trabajar aun cuando el Instituto no haya entregado todavía logo, manual de identidad, misión, visión, autoridades, procedimientos, tarifas, licencias, cifras sociales, archivos normativos o fotografías institucionales.

La regla para toda información faltante será:

> **NO INVENTAR.** Diseñar el campo, componente o módulo y mostrar un placeholder explícito: **“Pendiente de validación/publicación oficial”**.

---

# 2. Base de referencia y criterio de diseño

## 2.1. Google Stitch

Google Stitch permite generar interfaces de alta fidelidad desde lenguaje natural, imágenes, archivos/contexto y código; su canvas actual facilita iterar, crear prototipos y conectar pantallas. Google también publica el formato `DESIGN.md`, con tokens de diseño legibles por agentes, para mantener consistencia visual entre proyectos.

Este proyecto usa esa lógica:  
1. Importar `DESIGN.md`.  
2. Dar a Stitch el contexto de este documento.  
3. Generar primero Home + sistema de componentes.  
4. Generar páginas internas una por una con los prompts del capítulo 13.  
5. Conectar flujos en Prototype/Play.  
6. Validar desktop y móvil.  
7. Exportar al flujo de desarrollo que adopte el equipo.

## 2.2. Referencia funcional: Lotería de Anzoátegui

La web pública de Lotería de Anzoátegui demuestra que un instituto de este tipo puede combinar:

- responsabilidad/beneficencia social;
- contribuciones y pagos;
- reglamentos;
- juegos licenciados;
- registro de sujetos/operadores;
- registro de juegos;
- registro de software;
- registro de centros;
- licencias;
- estados de cuenta;
- portal privado.

**Criterio del proyecto Mérida:** tomar esas funciones como **referencia**, no copiarlas ni asumir que todas son competencia automática del Instituto de Mérida. Cada módulo regulatorio debe validarse contra su ley, reglamentos, providencias y procedimientos oficiales.

## 2.3. Identidad propia de Mérida

La plataforma debe diferenciarse por:

- énfasis visual en los Andes y la geografía merideña;
- fotografía documental real;
- tono institucional y humano;
- mayor claridad en beneficencia;
- centro de transparencia;
- biblioteca normativa;
- accesibilidad;
- arquitectura preparada para trámites digitales.

---

# 3. Objetivos del producto

1. Presentar oficialmente al Instituto.
2. Facilitar el acceso a programas y ayudas de beneficencia.
3. Dar seguimiento a solicitudes ciudadanas.
4. Publicar información verificable de impacto social.
5. Publicar juegos, sorteos y resultados oficiales cuando corresponda.
6. Mantener un directorio verificable de operadores/centros autorizados.
7. Centralizar trámites, licencias, registros, contribuciones y pagos cuando estén legalmente habilitados.
8. Servir como repositorio de normativa y documentos.
9. Facilitar atención ciudadana.
10. Ofrecer un portal privado a operadores.
11. Ofrecer un backoffice trazable para los funcionarios autorizados.

---

# 4. Audiencias

## 4.1. Ciudadano / beneficiario
Busca ayudas, programas, requisitos, estados de solicitud, noticias y canales de atención.

## 4.2. Público general
Busca información institucional, resultados oficiales, noticias, programas e impacto.

## 4.3. Operador / sujeto regulado
Busca registros, licencias, renovaciones, pagos, estado de cuenta, documentos y comunicaciones.

## 4.4. Personal institucional
Gestiona solicitudes, expedientes, licencias, pagos, normativa, contenidos y reportes.

## 4.5. Auditor / supervisor
Requiere bitácoras, trazabilidad, reportes, indicadores y evidencia documental.

---

# 5. Arquitectura de información / sitemap

```text
/
├── instituto
│   ├── quienes-somos
│   ├── autoridades-organigrama
│   └── marco-legal
├── beneficencia
│   ├── programas
│   │   └── /:slug
│   ├── solicitar-ayuda
│   ├── consultar-solicitud
│   └── transparencia-impacto
├── loteria
│   ├── juegos-autorizados
│   ├── resultados
│   │   └── /:sorteo
│   ├── operadores-autorizados
│   └── centros-autorizados
├── tramites
│   ├── catalogo
│   ├── /:tramite
│   ├── registro-operador
│   ├── registro-juego-software-centro
│   ├── licencias-renovaciones
│   └── pagos-contribuciones
├── normativa
├── noticias
│   └── /:slug
├── atencion-ciudadana
├── contacto
├── portal
│   ├── login
│   ├── dashboard
│   ├── organizacion
│   ├── tramites
│   ├── licencias
│   ├── pagos
│   ├── documentos
│   └── mensajes
└── admin
    ├── dashboard
    ├── beneficencia
    ├── operadores
    ├── licencias
    ├── pagos
    ├── normativa
    ├── noticias
    ├── usuarios-roles
    └── auditoria
```

---

# 6. Navegación principal

**Desktop**

`Inicio | Instituto | Beneficencia | Lotería | Trámites | Transparencia | Normativa | Noticias | Contacto | [Portal en línea]`

Cuando el ancho sea insuficiente, agrupar `Transparencia + Normativa + Noticias` dentro de **Información pública**.

**Móvil**

Menú hamburguesa con:
- Inicio
- Instituto
- Beneficencia
- Lotería
- Trámites y servicios
- Transparencia
- Normativa
- Noticias
- Atención ciudadana
- Contacto
- Portal en línea

El CTA de **Portal en línea** siempre debe distinguirse de **Solicitar ayuda**.

---

# 7. Sistema visual

El sistema visual normativo está en `DESIGN.md`. Resumen:

| Token | Valor | Uso |
|---|---:|---|
| Azul andino | `#123B5D` | marca institucional, CTA principal |
| Verde páramo | `#1E6B52` | beneficencia, estados positivos |
| Dorado sobrio | `#C79A32` | acento y hitos |
| Fondo | `#F6F8F7` | página |
| Blanco | `#FFFFFF` | superficies |
| Texto | `#17222B` | texto principal |
| Texto secundario | `#5F6B73` | metadatos |
| Error | `#B42318` | validaciones |
| Información | `#236A9B` | mensajes informativos |

## 7.1. Accesibilidad de color

- Azul + blanco: contraste alto.
- Verde + blanco: contraste apto para texto normal.
- Dorado + blanco: **no usar**; sobre dorado usar texto `#17222B`.
- No comunicar estados únicamente mediante color.

## 7.2. Tipografía

**Public Sans** para todo el sistema.

## 7.3. Iconos

Estilo lineal consistente. Preferir símbolos universales:
- corazón/manos: beneficencia;
- documento: normativa;
- escudo/check: licencia/autorización;
- edificio: instituto;
- gráfico: transparencia;
- boleto simple: lotería;
- usuario/empresa: operador;
- ayuda: atención ciudadana.

Evitar emojis en producción.

---

# 8. Dirección fotográfica — SOLO IMÁGENES REALES

## 8.1. Regla principal

La plataforma debe utilizar **fotografía real**, no “personas generadas por IA” presentadas como beneficiarios, funcionarios, sorteos o eventos.

Prioridad de fuentes:
1. Archivo oficial suministrado por el Instituto.
2. Fotografías producidas por el equipo contratado.
3. Archivo oficial del Gobierno/ente público con autorización de reutilización.
4. Bancos de imágenes con licencia válida.
5. Prensa/terceros únicamente como **referencia visual**, hasta obtener autorización.

## 8.2. Lista mínima de producción fotográfica

Solicitar/realizar:
- vista amplia de Mérida y paisaje andino;
- Pico Bolívar / Sierra Nevada / paisaje emblemático;
- sede del Instituto;
- fachada y señalización;
- atención al ciudadano;
- funcionarios trabajando en contextos no sensibles;
- jornadas de salud autorizadas;
- programas educativos;
- actividades deportivas;
- actividades culturales;
- apoyo comunitario;
- evento/sorteo institucional;
- fotografías de operadores o centros solo con autorización;
- fotografías documentales de ruedas de prensa/noticias.

## 8.3. Tratamiento visual

- luz natural;
- color realista;
- personas en situaciones dignas, no victimizantes;
- evitar primeros planos de documentos;
- no mostrar historias clínicas, cédulas, números telefónicos o datos personales;
- autorización/model release cuando corresponda;
- `alt text` descriptivo en cada imagen;
- crédito fotográfico configurable.

## 8.4. Formatos y ratios

- Hero desktop: 1920×960 o superior, ratio 2:1.
- Hero móvil: crop 4:5 preparado manualmente.
- Tarjetas: 1200×800, 3:2.
- Noticias: 1600×900, 16:9.
- Equipo/autoridades: 1000×1250, 4:5.
- WebP/AVIF en producción; JPG de respaldo donde sea necesario.
- No cargar originales de 10–20 MB directamente en frontend.

## 8.5. Referencias visuales encontradas — NO asumir permiso de publicación

Usarlas únicamente para comprender estilo/territorio y gestionar derechos si se desean publicar:

- Paisaje/Teleférico–Pico Bolívar:  
  https://www.encantamontana.com/post/pico-bol%C3%ADvar-pico-el-toro-usando-el-telef%C3%A9rico-mukumbar%C3%AD

- Ejemplo de cobertura real de ayuda por lluvias en Mérida:  
  https://fronteradigital.com.ve/entrada/60953

- Referencia pública del lanzamiento de Lotería de Mérida:  
  https://fronteradigital.com.ve/entrada/72959

**No incrustar automáticamente estas imágenes en producción.**

---

# 9. Componentes que deben generarse primero en Stitch

Generar un “UI Kit” antes de diseñar todas las páginas:

1. Header desktop.
2. Header móvil.
3. Footer.
4. Breadcrumb.
5. Hero institucional.
6. Botón primary/secondary/accent/ghost/destructive.
7. Input, textarea, select, checkbox, radio, date picker, upload.
8. Card de programa.
9. Card de trámite.
10. Card de noticia.
11. Card de juego/autorización.
12. Card de documento.
13. Tarjeta KPI.
14. Tabla.
15. Filtros.
16. Search bar.
17. Pagination.
18. Tabs.
19. Accordion.
20. Alert/info banner.
21. Stepper.
22. Status badge.
23. Modal.
24. Drawer móvil.
25. Empty state.
26. Skeleton/loading.
27. Toast.
28. Timeline.
29. Document viewer.
30. Consent/privacy box.

---

# 10. Reglas UX

- Todo trámite debe mostrar **requisitos antes de pedir datos**.
- Formularios largos → wizard multistep.
- Guardar borrador cuando haya autenticación.
- Confirmar antes de enviar.
- Entregar número de caso/trámite.
- Mostrar última actualización.
- No obligar al usuario a “adivinar” a qué área pertenece.
- Botones con verbos claros.
- No usar “Haz clic aquí”.
- Resultados oficiales deben mostrar fuente/fecha/estado.
- Cualquier estado pendiente debe ser entendible sin color.
- En móvil, CTA principal fijo solo cuando no tape contenido.

---

# 11. Seguridad, privacidad y operación

## 11.1. Identidad y acceso
- Roles: Ciudadano, Operador, Revisor, Supervisor, Contenido, Finanzas, Auditor, Administrador.
- MFA recomendado para operadores y obligatorio para roles internos de riesgo.
- Sesiones con expiración y revocación.
- Recuperación de acceso segura.

## 11.2. Formularios
- CSRF/XSS/SQLi mitigados en implementación.
- Rate limiting.
- CAPTCHA adaptativo si aparece abuso.
- Validación cliente + servidor.
- Antivirus/sandbox para archivos según infraestructura.
- Whitelist de tipos/tamaños.

## 11.3. Datos personales
- Minimización.
- Consentimiento informado.
- No poner datos sensibles en URL.
- No registrar documentos completos en logs.
- Definir política de retención.
- Control de acceso por rol y necesidad.

## 11.4. Auditoría
Registrar:
- usuario;
- acción;
- entidad;
- fecha/hora;
- resultado;
- cambios antes/después en campos sensibles;
- IP/device si la política lo permite.

## 11.5. Contenido
Workflow CMS:
`Borrador → Revisión → Aprobación → Programado/Publicado → Archivado`

Normativa y resultados requieren revisión reforzada.

---

# 12. PROMPT MAESTRO PARA INICIAR EL PROYECTO EN GOOGLE STITCH

Copiar este prompt después de adjuntar/importar `DESIGN.md`:

```text
Crea el sistema de diseño y la arquitectura visual de un portal web institucional responsive para el Instituto de Beneficencia Pública y Asistencia Social “Lotería de Mérida”, Venezuela.

Usa estrictamente el DESIGN.md adjunto. La identidad debe ser pública, contemporánea, andina, confiable, humana, accesible y sobria. El portal NO debe parecer un casino ni una casa de apuestas privada. La prioridad de comunicación es: 1) beneficencia y asistencia social, 2) transparencia, 3) trámites y servicios, 4) lotería regulada y responsable.

No inventes logos oficiales, autoridades, números de beneficiarios, teléfonos, direcciones, juegos, licencias, tarifas, cuentas bancarias, resultados, gacetas ni normativa. Cuando falte información usa placeholders explícitos “Pendiente de validación institucional” o “Dato pendiente de publicación oficial”.

Usa fotografía REAL como dirección de arte. No generes personas ficticias para representar hechos, beneficiarios, funcionarios o sorteos. Coloca frames de imagen con etiquetas que indiquen el tipo de fotografía real requerida: paisaje andino de Mérida, sede institucional, atención ciudadana, jornadas sociales, educación, deporte, cultura y actividad institucional.

Genera primero:
1. UI kit completo.
2. Header y footer.
3. Home desktop 1440.
4. Home móvil 390.
5. Plantilla de página interna.
6. Plantilla de formulario multistep.
7. Plantilla de dashboard.
8. Plantilla de biblioteca documental.

Utiliza Public Sans, grid 12/8/4, máximo 1280 px, espacios generosos, tarjetas blancas, azul #123B5D, verde #1E6B52, dorado #C79A32 solo como acento con texto oscuro, fondo #F6F8F7.

Navegación pública: Inicio, Instituto, Beneficencia, Lotería, Trámites, Transparencia, Normativa, Noticias, Contacto y Portal en línea.

Diseña componentes con estados hover, focus, disabled, loading, success y error. Cumple WCAG AA y muestra focus visible. Genera también vista móvil.
```

---

# 13. PROMPTS PÁGINA POR PÁGINA

### P01 — Inicio / Home

**Objetivo:** Landing institucional pública.

**Prompt para Google Stitch**

```text
Diseña la página de inicio responsive del Instituto de Beneficencia Pública y Asistencia Social “Lotería de Mérida”, Venezuela. Usa el DESIGN.md del proyecto sin alterar sus tokens. La prioridad visual debe ser beneficencia y servicio público, no apuestas. Header institucional con buscador, accesibilidad, menú principal y botón “Portal en línea”. Hero editorial con fotografía REAL autorizada del paisaje andino de Mérida combinada con una escena institucional/social real; no generes personas ficticias ni estética de casino. Título provisional: “Beneficencia, transparencia y servicio para Mérida”. CTA primario “Conocer programas sociales” y secundario “Trámites y servicios”. Añade accesos rápidos: Solicitar ayuda, Consultar solicitud, Resultados oficiales, Operadores autorizados, Normativa, Contacto. Incluye 4 tarjetas de áreas sociales: Salud, Educación, Deporte y Cultura, marcadas como estructura sujeta a validación oficial. Incluye bloque de impacto con métricas en estado placeholder “Dato pendiente de publicación oficial”, sin números inventados. Añade Trámites destacados, Noticias recientes, bloque “Lotería responsable y regulada”, biblioteca normativa destacada y footer completo. Desktop 1440 y versión móvil 390. Mucho espacio en blanco, aspecto gubernamental contemporáneo, accesible, confiable y cálido.
```

### P02 — El Instituto

**Objetivo:** Información institucional.

**Prompt para Google Stitch**

```text
Diseña una página institucional “El Instituto” usando el sistema del proyecto. Hero sobrio con fotografía REAL de Mérida o sede institucional cuando exista. Secciones: presentación, naturaleza y propósito institucional, misión, visión, valores, competencias, reseña histórica, marco legal y enlaces a organigrama/autoridades. Cualquier dato no confirmado debe aparecer como placeholder editorial claramente rotulado “Pendiente de validación institucional”. No inventes nombres, fechas, gacetas ni autoridades. Incluye timeline visual opcional sin datos falsos, cards de valores, CTA hacia Transparencia y Normativa. Diseño editorial, limpio y accesible.
```

### P03 — Autoridades y Organigrama

**Objetivo:** Gobernanza institucional.

**Prompt para Google Stitch**

```text
Diseña “Autoridades y Organigrama”. Encabezado con breadcrumbs. Crea bloque de autoridades con foto institucional SOLO cuando exista un activo real; mientras tanto usa avatar neutro abstracto sin rostro y texto “Fotografía oficial pendiente”. Campos: cargo, nombre, reseña corta y enlace de perfil, todos preparados para CMS. Debajo, organigrama accesible en árbol para desktop y lista jerárquica para móvil. Botón descargar organigrama PDF únicamente como componente deshabilitado hasta que exista archivo. Añade nota de actualización y fuente institucional.
```

### P04 — Beneficencia

**Objetivo:** Landing de programas sociales.

**Prompt para Google Stitch**

```text
Diseña landing “Beneficencia y Asistencia Social”. Hero con fotografía documental REAL de una jornada social autorizada en Mérida, sin imágenes generadas por IA. Explica el propósito social en 2–3 párrafos cortos. Crea tarjetas de áreas: Salud, Educación, Deporte, Cultura, Atención comunitaria y Emergencias/contingencias como categorías configurables, dejando claro que la lista final depende de competencias oficiales. Incluye proceso visual “Conoce → Revisa requisitos → Solicita → Consulta estado”. Añade programas activos, historias institucionales solo con consentimiento, estadísticas verificadas y CTA “Solicitar apoyo”. Evita sentimentalismo excesivo y exposición de datos sensibles.
```

### P05 — Programas Sociales

**Objetivo:** Catálogo filtrable.

**Prompt para Google Stitch**

```text
Diseña el catálogo de “Programas Sociales”. Toolbar con búsqueda y filtros por área, municipio, población objetivo, estado y modalidad. Cada card debe incluir nombre del programa, breve objetivo, cobertura, estado, requisitos resumidos, fecha de actualización y CTA “Ver programa”. Estados vacíos elegantes. No inventes programas: usa placeholders como “Programa [Nombre oficial]”. Incluye vista lista/cards y paginación. Diseño accesible y orientado a servicio público.
```

### P06 — Detalle de Programa Social

**Objetivo:** Ficha pública.

**Prompt para Google Stitch**

```text
Diseña ficha de un programa social. Estructura: nombre, estado, objetivo, población objetivo, cobertura, beneficios, requisitos, documentos solicitados, pasos, canales de atención, fechas importantes, preguntas frecuentes, documentos descargables y CTA “Iniciar solicitud” solo si el trámite está habilitado. Añade bloque de privacidad antes de solicitar datos. Usa foto REAL autorizada del programa únicamente si existe; si no, usa paisaje/localización real sin representar beneficiarios.
```

### P07 — Solicitar Ayuda

**Objetivo:** Formulario ciudadano multistep.

**Prompt para Google Stitch**

```text
Diseña un formulario multistep de solicitud de beneficencia, mobile-first. Paso 1 tipo de apoyo; paso 2 datos del solicitante; paso 3 información del caso; paso 4 documentos; paso 5 consentimiento y revisión; paso 6 confirmación. Incluye barra de progreso, guardar y continuar, ayudas contextuales, límites/tipos de archivo, resumen antes de enviar y comprobante con número de solicitud. Añade advertencia: solicitar únicamente datos estrictamente necesarios. No pidas datos médicos sensibles por defecto; coloca esos campos como opcionales/configurables y sujetos a revisión jurídica. Diseño sereno, no burocrático, con validación inline.
```

### P08 — Consultar Solicitud

**Objetivo:** Seguimiento ciudadano.

**Prompt para Google Stitch**

```text
Diseña “Consultar solicitud”. Formulario compacto para número de solicitud más mecanismo de verificación definido por backend; no inventes autenticación. Resultado como timeline: Recibida, En revisión, Requiere información, Aprobada/No aprobada, Cerrada. Mostrar fecha de actualización, mensajes y acciones permitidas. No exponer información personal en URL ni en vista pública. Añade ayuda y canal de contacto.
```

### P09 — Transparencia e Impacto

**Objetivo:** Rendición de cuentas.

**Prompt para Google Stitch**

```text
Diseña “Transparencia e Impacto”. Dashboard público editorial con métricas verificadas: ayudas, beneficiarios, programas, municipios/comunidades, ejecución por área y periodo. Si no hay dataset, mostrar skeleton/placeholder “Datos oficiales pendientes”. Gráficos simples accesibles con tabla alternativa; filtros por año, área y municipio. Debajo: memorias de gestión, informes, datos abiertos si existen, metodología de indicadores y fecha de actualización. Evita gráficos decorativos sin fuente.
```

### P10 — Lotería

**Objetivo:** Landing actividad regulada.

**Prompt para Google Stitch**

```text
Diseña landing “Lotería de Mérida”. Debe sentirse como sección regulada dentro de un portal público, no casino. Bloques: juegos oficiales/autorizados, próximos sorteos, últimos resultados, reglamentos, operadores autorizados, puntos autorizados y juego responsable. Usa iconos sobrios y fotografía REAL de eventos institucionales/sorteos solo si existe material autorizado. No uses fichas, ruletas, neón ni jackpot. Añade CTA a resultados y reglamentos.
```

### P11 — Juegos Autorizados

**Objetivo:** Catálogo de juegos.

**Prompt para Google Stitch**

```text
Diseña catálogo “Juegos autorizados”. Cards con logo/arte oficial SOLO si fue suministrado, nombre, operador, modalidad, licencia/resolución, vigencia, reglamento y estado. Filtros por operador, modalidad y estatus. Preparar estado “Información oficial pendiente”. No inventes marcas ni números de licencias. Incluye aviso de juego responsable.
```

### P12 — Resultados Oficiales

**Objetivo:** Buscador de resultados.

**Prompt para Google Stitch**

```text
Diseña “Resultados oficiales” con máxima claridad. Selector de juego, fecha/sorteo, botón consultar. Resultados en tarjeta con número de sorteo, fecha/hora, combinación/resultado, fuente, sello “Publicado/Verificado” solo cuando backend lo confirme y enlace a acta/reglamento si existe. Historial paginado y filtros. Evita animaciones de bolas o celebración. Incluir advertencia de que el resultado oficial es el publicado por el Instituto y un bloque de incidencias/correcciones.
```

### P13 — Detalle de Sorteo

**Objetivo:** Acta y resultado.

**Prompt para Google Stitch**

```text
Diseña detalle de sorteo institucional. Encabezado con juego, número, fecha, estado y resultado. Secciones: resultado, premios/categorías si aplica, acta o documento oficial, operador, reglamento, observaciones y fecha de publicación. Botón compartir y descargar únicamente si existen recursos. Mantén trazabilidad y tono documental.
```

### P14 — Operadores Autorizados

**Objetivo:** Directorio verificable.

**Prompt para Google Stitch**

```text
Diseña directorio “Operadores autorizados”. Buscador y filtros por municipio, tipo y vigencia. Tabla desktop y cards móvil. Campos: razón social, nombre comercial, RIF u otro identificador si es legalmente publicable, tipo de autorización, licencia, vigencia, municipio y estado. No inventes registros. Añade ficha de detalle y fecha de actualización del directorio.
```

### P15 — Centros / Puntos Autorizados

**Objetivo:** Directorio geográfico.

**Prompt para Google Stitch**

```text
Diseña “Centros y puntos autorizados”. Vista alternable lista/mapa. Cada punto: nombre, operador, municipio, parroquia/dirección publicable, estado y servicios. Mapa debe depender de datos geocodificados reales. En ausencia de información, mostrar lista vacía y explicación, no puntos ficticios. Añade filtros y buscador por ubicación.
```

### P16 — Trámites y Servicios

**Objetivo:** Catálogo de trámites.

**Prompt para Google Stitch**

```text
Diseña landing “Trámites y Servicios” para ciudadanos y operadores. Tarjetas separadas por audiencia. Para operadores prepara: registro, registro de juegos, registro de software, centros de apuestas, licencias, renovaciones, pagos/contribuciones y estado de cuenta como módulos configurables inspirados en funciones comunes del portal de Anzoátegui, pero rotulados “sujeto a validación de competencia y normativa de Mérida”. Cada trámite: objetivo, requisitos, modalidad, plazo, costo/tasa si aplica y CTA. Nunca inventes tarifa.
```

### P17 — Ficha de Trámite

**Objetivo:** Información y requisitos.

**Prompt para Google Stitch**

```text
Diseña plantilla reutilizable de ficha de trámite. Secciones: descripción, quién puede solicitar, requisitos, documentos, pasos, costo/tasa (si existe), plazo estimado, base legal, canal, preguntas frecuentes y CTA “Iniciar trámite”. Mostrar última actualización y dependencia responsable. Todo campo editable desde CMS. Si la tasa no está confirmada, texto “Consultar normativa vigente”.
```

### P18 — Registro de Operador

**Objetivo:** Wizard regulatorio.

**Prompt para Google Stitch**

```text
Diseña wizard para registro de operador. Pasos: identificación de entidad; representante; domicilio/canales; actividad; documentos; declaración; revisión; envío. Integrar guardado parcial, validaciones y estado. No definir campos legales definitivos que no hayan sido aprobados; distinguir “campos mínimos de diseño” de “campos regulatorios por validar”. Preparar carga de PDF/JPG y control de tamaño. Mostrar privacidad y términos.
```

### P19 — Registro de Juego / Software / Centro

**Objetivo:** Wizard modular.

**Prompt para Google Stitch**

```text
Diseña un wizard modular que permita seleccionar “Juego”, “Software de juego” o “Centro de actividad”, y adapte los pasos. Mantén arquitectura configurable. Secciones comunes: titular, descripción, documentos, evidencia técnica, ubicación cuando aplique, declaración, revisión y envío. Añade badges de estado y checklist. No inventes certificaciones ni requisitos técnicos legales.
```

### P20 — Licencias y Renovaciones

**Objetivo:** Gestión pública/operador.

**Prompt para Google Stitch**

```text
Diseña pantalla informativa y operativa “Licencias y renovaciones”. Vista pública con requisitos y base legal; para usuario autenticado, tabla de licencias con número, tipo, emisión, vencimiento, estado y acciones. CTA renovar cuando corresponda. Alertas de vencimiento sobrias. No generar números de licencia de ejemplo que parezcan reales; usa formatos como LIC-[XXXX].
```

### P21 — Pagos y Contribuciones

**Objetivo:** Obligaciones del operador.

**Prompt para Google Stitch**

```text
Diseña “Pagos y contribuciones”. Para visitantes: explicación general y enlace a normativa. Para operador autenticado: obligaciones pendientes, periodo, concepto, monto proveniente de backend, fecha límite, estado y comprobantes. No mostrar cuentas bancarias inventadas ni montos simulados como reales. CTA “Ver instrucciones de pago” y “Subir comprobante” solo si el modelo operativo lo requiere. Incluye historial y conciliación.
```

### P22 — Normativa y Documentos

**Objetivo:** Biblioteca documental.

**Prompt para Google Stitch**

```text
Diseña biblioteca “Normativa y documentos”. Buscador potente, filtros por tipo, año, materia y estado. Cards/lista con título, tipo, fecha, número oficial, resumen, archivo, tamaño y fecha de actualización. Tipos configurables: Ley, Reglamento, Providencia, Resolución, Requisito, Tarifa, Formulario, Manual, Memoria. Previsualizador PDF opcional. No inventes gacetas o normas. Añade indicador de vigencia solo con dato oficial.
```

### P23 — Noticias

**Objetivo:** Sala de prensa.

**Prompt para Google Stitch**

```text
Diseña índice de Noticias institucional. Hero editorial moderado, noticia destacada, grid de publicaciones, filtros por Beneficencia, Institucional, Lotería, Trámites y Comunicados. Fotografía REAL con crédito y alt text. Mostrar fecha y categoría. No usar titulares sensacionalistas. Paginación y buscador.
```

### P24 — Detalle de Noticia

**Objetivo:** Artículo.

**Prompt para Google Stitch**

```text
Diseña plantilla de artículo. Título, bajada, fecha, categoría, imagen REAL con crédito, cuerpo editorial legible, galería opcional, documentos relacionados y compartir. Añade contenidos relacionados y footer. Mantén ancho de lectura 720–760 px. No generar fotografías falsas para hechos públicos.
```

### P25 — Atención Ciudadana / FAQ

**Objetivo:** Soporte.

**Prompt para Google Stitch**

```text
Diseña centro de atención ciudadana con buscador de preguntas, categorías, acordeones, canales de contacto y formulario de consulta/reclamo. Añade estado del servicio y horarios únicamente cuando estén confirmados. Separar atención de beneficencia, soporte a operadores y denuncias/reclamos. Incorporar privacidad y número de ticket tras envío.
```

### P26 — Contacto

**Objetivo:** Canales y sede.

**Prompt para Google Stitch**

```text
Diseña página Contacto. Cards para sede, teléfono, correo, horario y redes, todos alimentados desde CMS y con placeholders hasta validación. Mapa solo cuando exista dirección oficial verificada. Formulario mínimo: nombre, correo/teléfono opcional, asunto, mensaje, consentimiento. Añade accesibilidad de la sede si se dispone de información. No inventes datos de contacto.
```

### P27 — Acceso / Portal en Línea

**Objetivo:** Autenticación de operadores.

**Prompt para Google Stitch**

```text
Diseña login institucional para operadores/usuarios autorizados. Logo institucional temporal si no existe oficial; no inventar escudo. Campos identificador y contraseña, recuperar acceso, soporte y aviso de seguridad. Preparar MFA como flujo posterior. Diseño austero, fondo claro, fotografía REAL de Mérida opcional en panel lateral desktop, sin distraer. Mobile 390.
```

### P28 — Dashboard del Operador

**Objetivo:** Área privada.

**Prompt para Google Stitch**

```text
Diseña dashboard de operador. Resumen con trámites, licencias, obligaciones, notificaciones y documentos. Cards: trámites activos, licencia próxima a vencer, pagos pendientes, comunicaciones. Tabla de actividad reciente. Sidebar: Inicio, Mi organización, Trámites, Licencias, Juegos/Software/Centros, Pagos, Estado de cuenta, Documentos, Mensajes, Perfil. No inventes saldos; usa placeholders. Prioriza claridad y trazabilidad.
```

### P29 — Backoffice Administrativo

**Objetivo:** Gestión interna.

**Prompt para Google Stitch**

```text
Diseña backoffice administrativo separado visualmente del portal público pero usando los mismos tokens. Sidebar: Panel, Solicitudes de Beneficencia, Programas, Trámites de Operadores, Licencias, Pagos, Juegos, Centros, Normativa, Noticias, Usuarios/Roles, Auditoría, Configuración. Dashboard con colas de trabajo y KPI operativos, nunca datos inventados. Incluir filtros, asignación de caso, estados, notas internas, historial, exportación controlada y bitácora de auditoría.
```

### P30 — Estados del Sistema

**Objetivo:** 404/500/mantenimiento/vacíos.

**Prompt para Google Stitch**

```text
Diseña conjunto de pantallas de sistema: 404, 403, 500, mantenimiento, sesión expirada, sin resultados, sin documentos y sin permisos. Mensajes claros, no técnicos, con CTA seguro para volver al inicio o soporte. Usar ilustración abstracta simple o fotografía de paisaje REAL de Mérida; no usar personajes IA. Mantener consistencia y accesibilidad.
```


# 14. Prompt para crear el prototipo navegable

```text
Conecta las pantallas existentes como prototipo funcional.

Flujo ciudadano:
Home → Beneficencia → Programas → Detalle de programa → Solicitar ayuda → Confirmación → Consultar solicitud.

Flujo público de lotería:
Home → Lotería → Resultados oficiales → Detalle de sorteo → Reglamento relacionado.

Flujo de operador:
Home → Trámites → Registro de operador → Portal en línea → Login → Dashboard → Trámites → Licencias → Pagos.

Flujo de transparencia:
Home → Transparencia e Impacto → Documento/Informe → Normativa relacionada.

Flujo de atención:
Cualquier página → Atención ciudadana → Formulario → Confirmación/ticket.

Añade breadcrumbs, botón atrás cuando sea útil, estados de error, loading y vacíos. No simules confirmaciones oficiales ni pagos reales: los prototipos deben mostrar “Demo / sin transacción real”.
```

---

# 15. Prompt de revisión responsive

```text
Audita todas las pantallas del proyecto en 1440, 1024, 768 y 390 px. Conserva jerarquía, accesibilidad y tokens del DESIGN.md. Corrige overflow, tablas, navegación, padding, targets táctiles menores a 44 px, textos demasiado largos, imágenes mal recortadas y formularios incómodos. En móvil convierte tablas complejas en cards cuando mejore la lectura, manteniendo la misma información. El menú principal debe convertirse en drawer. Asegura que ningún CTA tape contenido.
```

---

# 16. Prompt de revisión de accesibilidad

```text
Realiza una revisión de accesibilidad WCAG AA sobre el diseño completo. Verifica contraste, tamaño de texto, foco visible, navegación por teclado conceptual, jerarquía H1-H3, labels persistentes, mensajes de error asociados a campos, estados que no dependan solo del color, targets táctiles, alt text esperado, tablas con encabezados y formularios con instrucciones. No alteres la paleta sin necesidad; si detectas contraste insuficiente, propón el ajuste mínimo compatible con DESIGN.md.
```

---

# 17. Prompt para convertir placeholders en contenido oficial

Usar cuando finalmente entreguen documentos:

```text
Actualiza únicamente el contenido institucional del diseño con la información oficial adjunta. No cambies el sistema visual ni la arquitectura salvo que el documento lo exija. Reemplaza placeholders solo cuando exista evidencia en los archivos. Conserva cualquier placeholder cuyo dato no esté explícitamente respaldado. No infieras cargos, cifras, tarifas, teléfonos, licencias, resultados o fechas. Añade fuente y fecha de actualización en módulos donde corresponda.
```

---

# 18. Modelo de contenido / CMS

## 18.1. Entidades

### Institución
- nombre_legal
- nombre_corto
- rif
- logo
- misión
- visión
- valores
- reseña
- dirección
- teléfonos
- correos
- horarios
- redes
- mapa

### Autoridad
- nombre
- cargo
- foto
- bio
- orden
- estado

### Programa
- título
- slug
- área
- objetivo
- población_objetivo
- cobertura
- beneficios
- requisitos
- documentos
- estado
- fecha_inicio
- fecha_fin
- imagen
- contacto

### SolicitudBeneficencia
- id_publico
- solicitante_id
- programa_id
- estado
- fecha
- documentos
- historial
- responsable_interno

### Operador
- id
- razón_social
- nombre_comercial
- identificador_fiscal
- contacto
- domicilio
- estado
- documentos

### Licencia
- id
- operador_id
- tipo
- número
- emisión
- vencimiento
- estado
- documento

### Juego
- id
- nombre
- operador
- modalidad
- licencia
- reglamento
- estado
- imagen_oficial

### Sorteo
- id
- juego_id
- número
- fecha
- resultado
- estado_publicación
- acta
- publicado_por
- publicado_en

### Obligación/Pago
- id
- operador_id
- periodo
- concepto
- monto
- estado
- vencimiento
- comprobante
- conciliación

### DocumentoNormativo
- id
- título
- tipo
- número
- fecha
- año
- materia
- vigencia
- resumen
- archivo
- fecha_publicación

### Noticia
- título
- slug
- bajada
- cuerpo
- categoría
- imagen
- crédito
- fecha_publicación
- estado

---

# 19. Roles sugeridos

| Rol | Función |
|---|---|
| Ciudadano | solicitudes y consultas propias |
| Operador | trámites, licencias, pagos y documentos propios |
| Atención | soporte y orientación |
| Analista Beneficencia | revisar casos sociales |
| Analista Regulación | revisar operadores/juegos/licencias |
| Finanzas | conciliación/obligaciones |
| Editor | gestionar noticias y páginas |
| Publicador | aprobar/publicar contenido |
| Auditor | lectura de bitácora/reportes |
| Administrador | configuración y usuarios |

Aplicar mínimo privilegio.

---

# 20. Flujos operativos

## 20.1. Solicitud de beneficencia

`Borrador → Enviada → Validación documental → En evaluación → Requiere información / Decisión → Cerrada`

Cada transición:
- fecha/hora;
- responsable;
- comentario;
- notificación;
- registro de auditoría.

## 20.2. Registro/licencia de operador

`Borrador → Enviado → Revisión documental → Subsanación → Revisión técnica/legal → Aprobado/Rechazado → Vigente → Vencido/Renovación`

## 20.3. Publicación de normativa

`Borrador → Revisión jurídica → Aprobación → Publicación → Sustituida/Derogada/Archivada`

## 20.4. Publicación de resultados

`Carga → Doble revisión → Publicación → Corrección controlada si aplica`

No sobrescribir silenciosamente un resultado publicado; conservar versión/historial.

---

# 21. Requerimientos no funcionales

## Accesibilidad
WCAG 2.2 AA como objetivo de diseño.

## Rendimiento
- LCP objetivo < 2.5 s en condiciones razonables.
- imágenes responsivas;
- lazy loading;
- minificación;
- caché/CDN;
- evitar video hero autoplay.

## SEO
- titles únicos;
- meta descriptions;
- sitemap.xml;
- robots.txt;
- datos estructurados para Organization/Article cuando corresponda;
- URLs legibles.

## Observabilidad
- disponibilidad;
- errores frontend/backend;
- métricas de formularios;
- auditoría de publicación;
- alertas operativas.

## Backups
Definir RPO/RTO con infraestructura institucional.

---

# 22. Analítica recomendada

Medir sin convertir la web en una plataforma de marketing invasivo:

- visitas por sección;
- búsquedas internas;
- trámites iniciados/finalizados;
- abandono por paso;
- consultas de resultados;
- descargas normativas;
- errores 404;
- rendimiento web;
- uso por dispositivo.

No enviar información sensible a herramientas analíticas.

---

# 23. Contenido que debe solicitarse al Instituto

Antes de producción definitiva pedir:

1. nombre jurídico exacto;
2. documento de creación / Gaceta;
3. logo vectorial;
4. manual de identidad;
5. misión, visión y valores;
6. autoridades;
7. organigrama;
8. sede y contactos;
9. correos institucionales;
10. redes verificadas;
11. programas sociales;
12. requisitos de ayudas;
13. formularios/procedimientos;
14. normativa completa;
15. trámites del sector lotería;
16. tarifas vigentes;
17. modelo de pagos;
18. operadores autorizados;
19. juegos autorizados;
20. centros autorizados;
21. reglamentos;
22. resultados históricos si se publicarán;
23. política de privacidad;
24. política de cookies si aplica;
25. fotografía oficial;
26. estadísticas sociales;
27. responsable de actualización de cada módulo.

---

# 24. Criterios de aceptación del diseño en Stitch

La fase de diseño no se considera terminada hasta que:

- [ ] existe Home desktop y móvil;
- [ ] existe UI kit;
- [ ] todas las páginas P01–P30 tienen diseño o template reutilizable;
- [ ] navegación completa;
- [ ] prototipo de los 4 flujos principales;
- [ ] no hay cifras ni datos oficiales inventados;
- [ ] no hay imágenes IA simulando hechos reales;
- [ ] fotografía real está marcada por fuente/licencia;
- [ ] contraste y foco cumplen objetivo AA;
- [ ] formularios tienen error/success/loading;
- [ ] hay empty states;
- [ ] tablas funcionan en móvil;
- [ ] portal público y backoffice son distinguibles;
- [ ] están diseñados estados 404/500/mantenimiento;
- [ ] se definieron componentes para normativa, resultados, operadores, solicitudes y pagos.

---

# 25. Plan de trabajo recomendado en Google Stitch

## Sprint de diseño 01 — Fundaciones
Importar `DESIGN.md`, generar UI kit, Home, header, footer y template interno.

## Sprint de diseño 02 — Beneficencia
P04–P09.

## Sprint de diseño 03 — Lotería y regulación
P10–P15.

## Sprint de diseño 04 — Trámites
P16–P22.

## Sprint de diseño 05 — Contenido y soporte
P23–P26 + P30.

## Sprint de diseño 06 — Portal y Backoffice
P27–P29.

## Sprint de diseño 07 — Prototipo y QA
Responsive, accesibilidad, estados, navegación y handoff.

---

# 26. Fuentes de referencia

## Google / Stitch
- Google Labs — Introducing “vibe design” with Stitch (2026):  
  https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/
- Google Labs — DESIGN.md format (2026):  
  https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/
- Especificación abierta DESIGN.md:  
  https://github.com/google-labs-code/design.md
- Google Labs — real-time design with Stitch (2026):  
  https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-updates/

## Referencia funcional del sector
- Lotería de Anzoátegui — Inicio:  
  https://www.loterianzoategui.com.ve/
- Lotería de Anzoátegui — Trámites y servicios:  
  https://www.loterianzoategui.com.ve/service.html

## Referencias públicas sobre Mérida
- Frontera Digital — lanzamiento público de Lotería de Mérida:  
  https://fronteradigital.com.ve/entrada/72959

---

# 27. Nota de control

Este REV00 es una **base de diseño y operación**. Ningún nombre de autoridad, tarifa, licencia, cifra de beneficiarios, resultado, dirección, teléfono, correo o procedimiento regulatorio debe considerarse oficial hasta que sea entregado o validado por el Instituto.

El diseño está preparado deliberadamente para que esos datos puedan incorporarse después sin reconstruir la arquitectura.

**FIN DEL DOCUMENTO — REV00**

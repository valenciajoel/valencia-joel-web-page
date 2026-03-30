# Planning Spec: CTA Redesign — "Direct Command" v2.0
> Iteración: 2026-03-29 | Estado: APROBADO ✅

---

## 1. 🎯 User Goal

Transformar el CTA actual (monótono, sin jerarquía visual) en la sección más impactante del portfolio. El CTA debe:
- **Convertir** al visitante (CTO técnico) en un lead real.
- Ofrecer **tres puntos de entrada** diferenciados por urgencia: Formulario (estructura), WhatsApp (velocidad), CV (recurso).
- **Destacar visualmente** del resto de la página mediante un tratamiento de fondo único (aurora/spotlight) que no se repita en otras secciones.
- **Protegerse contra spam** con una estrategia de rate limiting en 3 capas.

---

## 2. ✨ Wow Factor

> **"La pantalla de lanzamiento de misión."**

El CTA tendrá un fondo con efecto **aurora animado** (gradientes HSL que se mueven lentamente, únicos en toda la página). El botón principal abrirá un **modal glassmorphism** con el formulario, que entra con una animación GSAP `scale + fade`. Encima del CTA habrá **stats de social proof** en `JetBrains Mono` (años de experiencia, proyectos, tecnologías). El botón principal tendrá un efecto de **glow pulsante** que lo hace visualmente inconfundible.

---

## 3. 📋 Functional Scope

### 3.1 Rediseño Visual de la Sección CTA
- [ ] Nuevo fondo: efecto **aurora animado** con gradientes radiales en movimiento (CSS `@keyframes` + `mix-blend-mode`), diferente a cualquier otro fondo de la página.
- [ ] **Social Proof Bar** encima de los botones: `5+ años | 10+ proyectos | 3 países`. Estilo: `JetBrains Mono`, separados por líneas verticales `|`, color `ghost-slate`.
- [ ] Jerarquía de 3 CTAs clara:
  1. **Primario** (grande, centrado): "Iniciar Proyecto" → abre modal de formulario. Estilo: `bg-primary`, glow pulsante animado, icono `Zap`.
  2. **Secundario** (outline verde): "WhatsApp" → `wa.me/` link directo. Icono `MessageCircle` de Lucide.
  3. **Terciario** (ghost): "Descargar CV" → descarga del PDF. Icono `Download`.

### 3.2 Modal de Formulario (Glassmorphism)
- [ ] Trigger: clic en botón primario.
- [ ] Overlay oscuro (`backdrop-blur-sm bg-black/60`).
- [ ] Panel: `backdrop-blur-xl border border-border-active/30 bg-secondary/80` → efecto glassmorphism.
- [ ] Animación de entrada: GSAP `scale(0.9) → 1` + `opacity 0 → 1`, 400ms ease-out.
- [ ] Animación de salida: GSAP inversa al cerrar.
- [ ] Campos del formulario:
  - `Nombre` (text, requerido)
  - `Email` (email, requerido)
  - `Empresa` (text, opcional)
  - `Mensaje` (textarea, requerido, min 20 chars)
  - `website` → **campo honeypot oculto** (visible solo para bots)
- [ ] Botón de envío con estado: `Idle → Loading (spinner) → Success (✓) → Error`.
- [ ] Cierre: botón `X` en esquina + clic en overlay.
- [ ] El componente es `"use client"`.

### 3.3 Server Action con Resend
- [ ] Archivo: `src/features/contact/actions/send-contact-email.ts`
- [ ] Usa `import "server-only"`.
- [ ] Lee `process.env.API_KEY_RESEND` y `process.env.CONTACT_EMAIL`.
- [ ] Envía email a `valenciajoeldamian@gmail.com` (via `CONTACT_EMAIL` en `.env`).
- [ ] Template del email: HTML estructurado con los datos del formulario.
- [ ] Validación con `zod` antes de llamar a Resend.
- [ ] **Honeypot check**: si el campo `website` tiene valor → retornar `{ success: true }` silenciosamente (no enviar).
- [ ] **Rate limiting server-side**: IP-based con `Map` en memoria + TTL. Máximo 3 envíos por IP por hora.
- [ ] Retorna `{ success: true }` o `{ error: string }`.

### 3.4 CV para Descarga
- [ ] Copiar `docs/CV Software Architect Joel Valencia.pdf` → `public/cv-joel-valencia.pdf`.
- [ ] El botón "Descargar CV" usa `href="/cv-joel-valencia.pdf" download`.

### 3.5 WhatsApp
- [ ] Link: `https://wa.me/5491131447823?text=Hola%20Joel%2C%20vi%20tu%20portfolio%20y%20quiero%20hablar%20sobre%20un%20proyecto.`
- [ ] Número: `+5491131447823` → `NEXT_PUBLIC_WHATSAPP_NUMBER` en `.env`.
- [ ] `target="_blank" rel="noopener noreferrer"`.

### 3.6 Anti-Spam: 3 Capas de Protección

| Capa | Dónde | Implementación | Protege contra |
|------|-------|----------------|----------------|
| **Honeypot** | Server Action | Campo `website` oculto via CSS. Si viene con valor → silencio. | Bots automáticos |
| **Client Cooldown** | Componente cliente | Tras éxito: botón disabled 60s + countdown visible. Estado persistido en `localStorage`. | Re-clicks del usuario |
| **Server Rate Limit** | Server Action | `Map<string, {count, firstHit}>` en módulo. Max 3/IP/hora. Si excede → `{ error: "Too many requests" }`. | Scripts básicos |

---

## 4. 🚫 Constraints

| Constraint | Detalle |
|:---|:---|
| **Arquitectura** | Server Action en `src/features/contact/actions/`. Componentes en `src/features/contact/_components/`. Todo local al feature. |
| **Env vars — Servidor** | `API_KEY_RESEND` (ya existe), `CONTACT_EMAIL=valenciajoeldamian@gmail.com` |
| **Env vars — Cliente** | `NEXT_PUBLIC_WHATSAPP_NUMBER=5491131447823` (sin `+`, el link lo maneja) |
| **Paquetes** | `bun add resend` si no está instalado. `zod` ya debería existir. |
| **Performance** | Modal montado condicionalmente con `useState`. No renderizar DOM oculto. |
| **Animaciones** | GSAP solo para el modal. Aurora y glow pulsante → CSS `@keyframes` puro. |
| **Diseño** | Respetar `design-specs.md` sin excepción. WhatsApp usa verde `#25D366`, no el primary. |
| **CV** | Copiar PDF a `/public/` para ser servido estáticamente por Next.js. |
| **No breaking** | Mantener `id="contact"` para la navegación por scroll. |

---

## 5. 📁 Archivos Afectados

```
src/features/contact/
├── _components/
│   ├── contact-center.tsx       ← REFACTOR TOTAL
│   ├── contact-modal.tsx        ← NUEVO
│   └── contact-form.tsx         ← NUEVO
└── actions/
    └── send-contact-email.ts    ← NUEVO (Server Action + Resend + Rate Limit)

public/
└── cv-joel-valencia.pdf         ← COPIAR desde docs/

.env                             ← Añadir CONTACT_EMAIL + NEXT_PUBLIC_WHATSAPP_NUMBER
```

---

## 6. ✅ Datos Confirmados

| Dato | Valor |
|------|-------|
| Email destino | `valenciajoeldamian@gmail.com` |
| WhatsApp | `+5491131447823` |
| CV PDF | `docs/CV Software Architect Joel Valencia.pdf` |
| API Resend | `API_KEY_RESEND` en `.env` (ya configurado) |

---
*Planning aprobado. Siguiente paso: `/development` para generar el `details-spec.md`.*

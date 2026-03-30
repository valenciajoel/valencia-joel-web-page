# Technical Blueprint: CTA Redesign — "Direct Command" v2.0
> Iteración: 2026-03-29 | Estado: PENDIENTE ⏳

---

## 1. 📂 Architecture & Folder Structure

Siguiendo la **Scope Rule**, todos los archivos nuevos y modificados se mantendrán dentro del feature `contact`, excepto el archivo estático del CV en `public/`.

```text
src/features/contact/
├── _components/
│   ├── contact-center.tsx       # Componente principal de la sección (v2)
│   ├── contact-modal.tsx        # Modal con GSAP + Glassmorphism
│   ├── contact-form.tsx         # Formulario con validación y estados
│   ├── aurora-background.tsx    # Sub-componente para el efecto visual
│   └── social-proof-bar.tsx     # Sub-componente de stats técnicos
├── actions/
│   └── send-contact-email.ts    # Server Action (Resend + Rate Limit)
├── types/
│   └── index.ts                # Interfaces y esquemas Zod
└── lib/
    └── rate-limit.ts           # Utilidad simple de rate limiting (Map-based)

public/
└── cv-joel-valencia.pdf         # Copia del CV
```

---

## 2. 🧩 Component Specifications

### 2.1 `ContactCenter` (Section Container)
- **Tipo**: Client Component (usa `useState` para el modal).
- **ID**: `contact` (vital para navegación).
- **Background**: Usa `AuroraBackground` que utiliza CSS `@keyframes` para animar gradientes radiales `hsl(199, 100%, 50%)` con opacidad baja.
- **Layout**: Centrado vertical/horizontal. Margin top para separación visual.

### 2.2 `ContactModal` (The Triggered View)
- **Props**: `isOpen: boolean`, `onClose: () => void`.
- **Animación**:
  - `useEffect` con GSAP cuando `isOpen` cambia.
  - `gsap.fromTo(".modal-panel", { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" })`.
- **Estilo**: `backdrop-blur-xl`, `border-border-active/20`.

### 2.3 `ContactForm` (Interactive Logic)
- **Campos**: `name`, `email`, `company`, `message`, `website` (honeypot).
- **Estados**: `idle | loading | success | error`.
- **LocalStorage**: Al enviar con éxito, guarda `last_sent_at` para el Client Cooldown (60s).

---

## 3. 🛡️ Logic & Security Details

### 3.1 Zod Schema (`types/index.ts`)
```typescript
import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  company: z.string().optional(),
  message: z.string().min(20, "El mensaje debe tener al menos 20 caracteres"),
  website: z.string().optional(), // Honeypot
});

export type ContactFormValues = z.infer<typeof ContactSchema>;
```

### 3.2 Server Action (`send-contact-email.ts`)
1. **Import** `"server-only"`.
2. **Rate Limit Check**: Invoca `rateLimit(ip)`.
3. **Validation**: `ContactSchema.safeParse`.
4. **Honeypot**: Si `data.website` existe, no hace nada y devuelve `ok`.
5. **Resend**: Envía el email a `valenciajoeldamian@gmail.com`.
6. **Return**: `{ success: true }` o mensaje de error.

---

## 4. 🚀 Atomic Implementation Plan

### Fase 1: Setup & Dependencies
- [ ] 1.1 Ejecutar `bun add resend zod`.
- [ ] 1.2 Actualizar `.env` con `CONTACT_EMAIL` y `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- [ ] 1.3 Copiar `docs/CV Software Architect Joel Valencia.pdf` a `public/cv-joel-valencia.pdf`.

### Fase 2: Data & Types
- [ ] 2.1 Crear `src/features/contact/types/index.ts` con el esquema Zod.
- [ ] 2.2 Crear `src/features/contact/lib/rate-limit.ts` para la lógica de IP.

### Fase 3: Server Side (Backend-ish)
- [ ] 3.1 Crear `src/features/contact/actions/send-contact-email.ts`.
- [ ] 3.2 Probar validación y rate limit básico.

### Fase 4: UI Components (Frontend)
- [ ] 4.1 Crear `social-proof-bar.tsx` y `aurora-background.tsx`.
- [ ] 4.2 Crear `contact-form.tsx` con estados de carga.
- [ ] 4.3 Crear `contact-modal.tsx` e integrar GSAP.
- [ ] 4.4 Refactorizar `contact-center.tsx` para orquestar todo.

---

## 5. 🔍 QC & Verification
- [ ] El honeypot (website) debe estar oculto visualmente (`opacity-0 absolute pointer-events-none`).
- [ ] El rate limit debe bloquear el 4to intento en menos de una hora desde la misma IP.
- [ ] El modal debe cerrase con `Esc` y clics fuera del panel.
- [ ] El WhatsApp link debe abrirse en pestaña nueva con el mensaje predefinido.

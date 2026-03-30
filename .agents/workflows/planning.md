---
description: Paso 1 del Bucle de Desarrollo Segregado (¿Qué hacer?)
---

# 🎯 Fase 1: Planificación (The "What")

Este es el primer paso de un bucle de 4 fases (Planificación > Desarrollo > Implementación > Verificación). Su objetivo es definir **QUÉ** se va a construir, sin entrar en la implementación técnica profunda.

---

## 🟢 1. Detección de Intención & Skills
El agente debe identificar el área de trabajo y declarar las skills que utilizará de forma proactiva:

| Intención | Skills de Soporte |
| :--- | :--- |
| Branding/Identidad | `ckm-brand`, `ckm-design`, `marketing-psychology`, `ui-ux-pro-max` |
| UI/UX & Flujos | `ui-ux-pro-max`, `ckm-ui-styling`, `brainstorming`, `tailwind4` |
| Estrategia/Growth | `seo-geo`, `marketing-psychology`, `ckm-brand` |
| Nueva Funcionalidad | `brainstorming`, `nextjs-15`, `ui-ux-pro-max`, `tailwind4` |
| Refactor/Arquitectura | `clean-ddd-hexagonal`, `nestjs-best-practices`, `nextjs-15` |

---

## 🔵 2. Análisis de Insumos (The Feedback Loop)
**CRÍTICO:** Antes de planificar, el agente **DEBE revisar si existe** un archivo `docs/planning/verification-report.md` de la iteración anterior. 
- Si existe: Los puntos de fallo reportados son la prioridad #1 de este nuevo plan.
- Si no existe: Se asume una nueva feature o que la iteración anterior fue exitosa.

---

## 🟣 3. Generación del Planning Spec (`planning-spec.md`)
Al finalizar la entrevista con el usuario, se genera el archivo `docs/planning/planning-spec.md`. 

### Reglas de este Archivo:
- **Transitoriedad:** Este archivo debe **SOBREESCRIBIR** cualquier `planning-spec.md` anterior. Es un contrato de un solo uso para esta iteración.
- **Contenido Obligatorio:**
  1. **User Goal:** ¿Qué quiere lograr el usuario final?
  2. **Wow Factor:** ¿Qué detalle premium tendrá esta entrega?
  3. **Functional Scope:** Lista de features/cambios "negro sobre blanco".
  4. **Constraints:** Limitaciones técnicas o de diseño.

---

## 🛑 Reglas de Oro del Paso 1
- **NO ESCRIBIR CÓDIGO:** En esta fase solo se definen requerimientos.
- **NO MIXING:** No saltes al "Cómo" (Desarrollo). Mantén la conversación en el nivel del negocio y UX.
- **CLEAN SLATE:** Al terminar este paso, el agente de la Fase 2 (Desarrollo) solo debería necesitar el `planning-spec.md` y el `AGENTS.md`.

---
*Este paso finaliza cuando el usuario aprueba el `planning-spec.md`. El siguiente paso es ejecutar el workflow de Desarrollo.*

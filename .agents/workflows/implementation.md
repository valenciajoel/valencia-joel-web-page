---
description: Paso 3 del Bucle de Desarrollo Segregado (Implementación)
---

# 🏗️ Fase 3: Implementación (The "Execution")

Este es el tercer paso del bucle de 4 fases (Planificación > Desarrollo > Implementación > Verificación). Su objetivo es ejecutar el **CÓMO** definido en el `details-spec.md`.

---

## 🟢 1. Lectura del Blueprint
El agente **DEBE** leer como única fuente de verdad:
- `docs/planning/details-spec.md`: La hoja de ruta técnica completa.
- `AGENTS.MD`: El nexo de contexto persistente del proyecto.
- `pattern-next.md`: Las reglas de arquitectura de Next.js.

---

## 🔵 2. Ejecución de Código
El agente implementará paso a paso lo definido en el paso anterior. 

### Reglas de Implementación:
1. **No a la creatividad:** Si no está en el `details-spec.md`, no se implementa. Si hay dudas, se pregunta al usuario.
2. **Atomic Commits:** Se recomienda crear archivos o bloques de código de forma atómica.
3. **Purity first:** Asegurarse de que los Server Components sean el estándar por defecto.
4. **Naming standards:** Seguir las convenciones de CamelCase o kebab-case acordadas en el proyecto.

---

## 🟣 3. Clean Up (Finalización de Tarea)
Al terminar la implementación, el agente debe:
- Probar localmente si es posible.
- Informar al usuario que la implementación ha finalizado.
- **Prepararse para la fase de Verificación.**

---

## 🛑 Reglas de Oro del Paso 3
- **NO CAMBIAR EL PLAN:** Si se detecta un error de diseño técnico, **NO CORREGIR DIRECTAMENTE**. Se debe informar para que en la Fase 4 se reporte y se re-planifique (Paso 1).
- **STICK TO THE SCOPE:** No añadir "un botón más" o "un estilo extra" que no esté en el `details-spec.md`.

---
*Este paso finaliza cuando todo el código definido en el `details-spec.md` ha sido escrito. El siguiente y último paso es la Verificación.*

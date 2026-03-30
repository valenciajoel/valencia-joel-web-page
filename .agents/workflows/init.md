---
description: Inicialización profunda del proyecto y creación del Nexo (AGENTS.MD)
---

---
description: Inicialización profunda del proyecto y creación del Nexo (AGENTS.MD)
---

# Workflow de Inicialización: Deep Context & Nexus

Este workflow guía al agente a través de una sesión de descubrimiento de "Visión Profunda" para capturar la esencia técnica y estratégica de un proyecto, terminando en la creación del archivo maestro **AGENTS.MD**.

## 🛑 Reglas Críticas para el Agente (Obligatorias)
- **Cero Alucinaciones:** Al terminar cada fase de preguntas, DEBES guardar un borrador en `docs/context/` antes de proponer el siguiente bloque. 
- **Máximo Rigor Técnico:** No aceptes soluciones "MVP" genéricas. Profundiza en la arquitectura, patrones de diseño y flujo de datos.
- **Scope Rule Enforcer:** Todas las decisiones de estructura propuestas deben seguir la "Scope Rule" (1 feature = local, 2+ features = shared).
- **Proceso Paso a Paso:** Haz las preguntas de una en una. No bombardees al usuario.

---

## 🟢 Fase 1: Sesión de Visión Profunda (Deep Discovery)
1. Iniciar una conversación minuciosa sobre:
   - **The North Star:** ¿Cuál es el propósito último y qué lo hace "Premium/Wow"?
   - **Público Objetivo:** ¿Qué tipo de usuario navegará la app?
   - **Personalidad & Tono:** ¿Cómo debe sentirse la experiencia (minimalista, vibrante, brutalista, etc.)?
   - **Límites Técnicos:** Confirmar stack (Next.js 15, Tailwind 4) y restricciones específicas.
2. Al terminar la sesión, generar `docs/context/project-vision.md`. **Solicitar aprobación explícita del usuario antes de seguir.**

## 🔵 Fase 2: Expansión de Dominios Técnicos
Basado en la visión aprobada, generar los siguientes documentos especializados consultando con el usuario cuando sea necesario:

1. **`docs/context/design-specs.md`**: Detallar estética avanzada, tokens de color (HSL), tipografías, micro-animaciones (Framer Motion) y grids.
2. **`docs/context/structure.md`**: Definir el modelo de datos (entidades, relaciones), controladores, Server Actions críticos y estrategia de caching.
3. **`docs/context/history-specs.md`**: Desglosar cada sección de la app (Hero, Dashboard, etc.) como Historias de Usuario técnicas que describan comportamiento esperado y lógica de negocio.

## 🟣 Fase 3: Síntesis y Creación del Nexo (AGENTS.MD)
1. Leer todos los archivos creados en las fases anteriores para consolidar el contexto total.
2. Crear un archivo `AGENTS.md` (en la raíz o carpeta de documentos) que sea el **Mapa Central** del proyecto.
3. El `AGENTS.md` DEBE incluir:
   - **Resumen Ejecutivo:** "Qué es este proyecto en una frase".
   - **Context Navigation Map:** "Si trabajas en UI, lee design-specs.md; si trabajas en Datos, lee structure.md".
   - **Principios Innegociables:** Mantra del proyecto y recordatorio de la Scope Rule.
   - **Estado Actual:** Resumen de lo que se sabe y lo que está pendiente de planificar.

---
*Este workflow finaliza cuando el usuario valida que el AGENTS.MD generado representa fielmente la visión técnica total.*

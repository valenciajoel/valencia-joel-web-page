---
description: Paso 2 del Bucle de Desarrollo Segregado (¿Cómo hacerlo?)
---

# 🛠️ Fase 2: Desarrollo (The "How")

Este es el segundo paso del bucle de 4 fases (Planificación > Desarrollo > Implementación > Verificación). Su objetivo es traducir el **QUÉ** definido en `planning-spec.md` a un diseño técnico detallado: **CÓMO** se va a programar.

---

## 🟢 1. Análisis del Contrato (Input Review)
El agente **DEBE** leer como única fuente de verdad:
- `docs/planning/planning-spec.md`: El contrato de requerimientos.
- `AGENTS.MD`: El nexo de contexto persistente del proyecto.
- `pattern-next.md`: Las reglas de arquitectura de Next.js del proyecto.

---

## 🔵 2. Diseño del Blueprint Técnico
El agente debe diagramar mentalmente (y proponer al usuario):
1. **Estructura de Carpetas:** ¿Dónde irá cada archivo siguiendo la Scope Rule?
2. **Types & Interfaces:** Definición de contratos de TypeScript.
3. **Lógica de Server Actions & Hooks:** ¿Qué lógica de negocio se requiere?
4. **Hooks & State Management:** ¿Cómo se manejarán los estados de UI?
5. **Componentes:** Lista de componentes (Server vs. Client) necesarios.

---

## 🟣 3. Generación del Detail Spec (`details-spec.md`)
Al finalizar la propuesta técnica y ser aprobada por el usuario, se genera el archivo `docs/planning/details-spec.md`.

### Reglas de este Archivo:
- **Transitoriedad:** Este archivo **SOBREESCRIBE** los detalles de la iteración anterior. No es acumulativo.
- **Formato:** Debe ser una guía paso a paso para que el Agente de Implementación (Paso 3) no tenga que tomar NINGUNA decisión creativa ni técnica. Todo debe estar "pre-cocinado".

---

## 🛑 Reglas de Oro del Paso 2
- **NO ESCRIBIR EL CÓDIGO FINAL:** Solo se definen firmas, tipos y ubicaciones de archivos.
- **SCOPE RULE ENFORCER:** Cada componente nuevo debe clasificarse como local o compartido.
- **CLEAN SLATE:** Al terminar este paso, el agente de la Fase 3 (Implementación) solo debería necesitar el `details-spec.md` para trabajar.

---
*Este paso finaliza cuando el usuario aprueba el `details-spec.md`. El siguiente paso es ejecutar el workflow de Implementación.*

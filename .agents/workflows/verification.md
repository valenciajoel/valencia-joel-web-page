---
description: Paso 4 del Bucle de Desarrollo Segregado (Auditoría)
---

# 🕵️ Fase 4: Verificación (The "Audit")

Este es el cuarto y último paso del bucle de 4 fases. Su objetivo es asegurar que la implementación cumple con el planning inicial y que todo funciona correctamente.

---

## 🟢 1. Auditoría Cruzada
El agente comparará el código resultante contra:
- `docs/planning/planning-spec.md`: El contrato original de "Qué hacer".
- `docs/planning/details-spec.md`: El contrato técnico de "Cómo hacerlo".

---

## 🔵 2. Protocolo de Pruebas
El agente o el usuario deben realizar pruebas funcionales:
- ¿Se cumplen los criterios de aceptación?
- ¿Hay errores de consola o en el servidor?
- ¿El diseño es responsivo y fiel a los specs visuales?

---

## 🟣 3. Reporte de Relevamiento (`verification-report.md`)
Si se detectan errores, bugs o áreas de mejora, el agente **NO los corregirá** en este paso.

### Acciones:
1. Crear el archivo `docs/planning/verification-report.md`.
2. Listar detalladamente cada fallo o desviación.
3. **Finalización del Ciclo:** Una vez creado el reporte, se informa al usuario.
4. **Nuevo Inicio:** El siguiente paso **DEBE** ser volver al **Paso 1 (Planning)**, el cual leerá este reporte para priorizar los arreglos.

### Éxito Total:
Si todo funciona perfecto:
- El usuario valida la entrega.
- Se eliminan (opcionalmente) los archivos `planning-spec.md` y `details-spec.md` para dejar la mesa limpia para la siguiente gran tarea.
- Se mantiene el historial de éxitos en `AGENTS.MD`.

---

## 🛑 Reglas de Oro del Paso 4
- **CERO FIXES:** No toques el código. Solo observa e informa.
- **HONESTIDAD TÉCNICA:** Si algo quedó a medias o no es fiel al plan, repórtalo como fallo.

---
*Este paso cierra el bucle y deja el proyecto listo para una nueva iteración de mejora continua.*

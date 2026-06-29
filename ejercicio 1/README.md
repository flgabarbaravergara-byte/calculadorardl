# Ejercicio 1 — Introducción al lenguaje JavaScript

## Objetivo

Familiarizarse con la sintaxis básica de JavaScript y ejecutar código en la consola del navegador.

## Requisitos cubiertos

- Mostrar mensajes en la consola con `console.log()`.
- Recibir datos del usuario con `prompt()`.
- Mostrar mensajes personalizados con `alert()`.

## Archivos

- `index.html` — página que carga el script.
- `leccion1.js` — código del ejercicio.

## Contexto del ejemplo

Introducción a la "Calculadora de Evaluación Fonoaudiológica", la app que se va a ir construyendo a lo largo de las 5 lecciones del proyecto.

## Explicación del código

1. **`console.log("Bienvenido/a...")`** — imprime un mensaje fijo en la consola, para confirmar que el script se ejecuta.
2. **`const nombreTerapeuta = prompt(...)`** — abre un cuadro de diálogo, el usuario (terapeuta) escribe su nombre y ese valor queda guardado en la variable `nombreTerapeuta`. Se usa `const` porque el valor no se reasigna.
3. **`console.log("Bienvenido/a, " + nombreTerapeuta + "...")`** — concatena el texto fijo con el valor ingresado por el usuario y lo muestra en consola.
4. **`alert(...)`** — muestra un cuadro de diálogo visual (distinto de la consola) explicando para qué sirve la app: calcular el desfase de desarrollo del lenguaje y registrar el progreso del paciente en terapia.

## Cómo ejecutarlo

1. Abrir `index.html` en el navegador (doble clic o arrastrándolo a una ventana del navegador).
2. Abrir las herramientas de desarrollador / consola:
   - Chrome (Mac): `⌘ + Option + J`
   - Safari (Mac): habilitar el menú Desarrollador y usar `⌘ + Option + C`
3. Completar el `prompt` con un nombre y observar el resultado en consola y el `alert`.

## Resultado esperado

- En consola: el mensaje de bienvenida con el nombre ingresado.
- En pantalla: un `alert` explicando la funcionalidad de la app.

> Nota: al abrir el archivo directo desde el disco (`file://`), Chrome puede mostrar un aviso de seguridad ("Unsafe attempt to load URL..."). Es informativo y no afecta la ejecución del script.

## Evidencia

Capturas de pantalla de la ejecución en `assets/evidencia/`:

- `Captura de pantalla 2026-06-28 a la(s) 10.35.02 p.m..png`
- `Captura de pantalla 2026-06-28 a la(s) 10.35.18 p.m..png`
- `Captura de pantalla 2026-06-28 a la(s) 10.35.29 p.m..png`

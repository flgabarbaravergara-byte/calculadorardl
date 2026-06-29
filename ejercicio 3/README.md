# Ejercicio 3 — Arreglos y ciclos

## Objetivo

Introducir el uso de arreglos y estructuras de repetición.

## Requisitos cubiertos

- Creación de un arreglo con una lista de elementos.
- Recorrido del arreglo con `for` y con `while`.
- Función que filtra elementos según una condición.

## Archivos

- `index3.html` — página que carga el script.
- `leccion3.js` — código del ejercicio.

## Contexto del ejemplo

Seguimiento del progreso de un paciente a lo largo de varias sesiones de terapia: un arreglo con el puntaje obtenido en cada sesión (escala 0 a 100), sobre el que se calculan totales, promedios y se filtran las sesiones según si alcanzaron el puntaje mínimo de aprobación.

## Explicación del código

1. **Arreglo**: `const puntajesSesiones = [55, 68, 72, 80, 65, 90, 78]` representa el puntaje obtenido en cada sesión de terapia.
2. **Recorrido con `for` + cálculo de total**: recorre cada sesión, la muestra en consola, y va acumulando la suma en `totalConFor`. Al terminar el ciclo, `totalConFor` tiene el puntaje acumulado de todas las sesiones.
3. **Recorrido con `while` + cálculo de promedio**: recorre el arreglo de nuevo (con `while`, incrementando `indice` manualmente) para sumar el total, y después calcula el promedio dividiendo por la cantidad de sesiones. `.toFixed(2)` redondea a 2 decimales.
4. **`filtrarSesionesAprobadas(arreglo, puntajeMinimo)`**: función que recorre el arreglo y devuelve solo los puntajes que alcanzan o superan un puntaje mínimo de aprobación (en este caso, 70).
5. **`filtrarSesionesNoAprobadas(arreglo, puntajeMinimo)`**: función inversa, devuelve los puntajes que no alcanzaron el mínimo.

Esto conecta directamente con los conceptos de la consigna: recorrido de arreglos con `for` y `while`, y una función que filtra elementos según una condición — aplicado al seguimiento real del progreso de un paciente en terapia.

## Cómo ejecutarlo

1. Abrir `index3.html` en el navegador.
2. Abrir la consola del navegador (Chrome Mac: `⌘ + Option + J`).
3. Observar en consola: el detalle de cada sesión, el total acumulado (`for`), el promedio (`while`), y las sesiones filtradas por aprobación.

## Resultado esperado

En consola: el arreglo de puntajes, el detalle sesión por sesión con el total acumulado (`for`), el promedio de puntaje por sesión (`while`), la lista de sesiones aprobadas, y la lista de sesiones no aprobadas.

> Nota: el aviso "Unsafe attempt to load URL... file:" que puede aparecer en consola es propio de abrir el archivo en modo `file://` y no afecta el funcionamiento del script.

## Evidencia

Capturas de pantalla de la ejecución en `assets/`:

- `Captura de pantalla 2026-06-28 a la(s) 10.41.06 p.m..png`

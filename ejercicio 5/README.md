# Ejercicio 5 — Conceptos básicos de objetos en JavaScript

## Objetivo

Utilizar objetos para organizar datos de manera estructurada.

## Requisitos cubiertos

- Crear un objeto con propiedades y valores.
- Implementar métodos dentro de un objeto.
- Usar un arreglo de objetos y recorrerlo con `map()` y `forEach()`.

## Archivos

- `index5.html` — página que carga el script.
- `leccion5.js` — código del ejercicio.

## Contexto del ejemplo

Continúa con la calculadora de fonoaudiología (Lección 4), pero ahora cada paciente se representa como un **objeto**: sus datos (nombre, edades) y la lógica de cálculo (desfase, nivel de retraso) viven juntos en la misma estructura, en vez de pasar valores sueltos entre funciones.

## Explicación del código

1. **`pacienteEjemplo`** — objeto con propiedades (`nombre`, `edadCronologicaMeses`, `edadDesarrolloMeses`) y dos métodos:
   - `calcularDesfaseMeses()` — usa `this` para acceder a las propiedades del propio objeto y devuelve el desfase en meses.
   - `determinarNivelRetraso()` — llama a `this.calcularDesfaseMeses()` (método dentro de otro método) y clasifica el resultado.
2. **`pacientes`** — arreglo de objetos: tres pacientes, cada uno con la misma estructura (propiedades + métodos) que `pacienteEjemplo`, pero con datos distintos.
3. **Recorrido con `forEach()`** — recorre el arreglo de pacientes e imprime en consola el desfase y el nivel de retraso de cada uno. `forEach()` ejecuta una acción por cada elemento, sin generar un arreglo nuevo.
4. **Recorrido con `map()`** — recorre el mismo arreglo, pero **genera un nuevo arreglo** (`resumenPacientes`) con un objeto resumido (`nombre` + `nivelRetraso`) por cada paciente. La diferencia clave con `forEach()` es que `map()` siempre devuelve un arreglo nuevo con los resultados.

## Cómo ejecutarlo

1. Abrir `index5.html` en el navegador.
2. Abrir la consola del navegador (Chrome Mac: `⌘ + Option + J`).

## Resultado esperado

En consola: los datos del paciente individual, la evaluación de los tres pacientes del arreglo (con `forEach`), y el arreglo resumen generado con `map()` (objeto con nombre y nivel de retraso de cada paciente).

## Evidencia

Capturas de pantalla de la ejecución en `assets/evidencia/`:

- `Captura de pantalla 2026-06-28 a la(s) 10.42.40 p.m..png`

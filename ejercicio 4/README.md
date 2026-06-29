# Ejercicio 4 — Funciones en JavaScript

## Objetivo

Modularizar el código utilizando funciones.

## Requisitos cubiertos

- Funciones para cada operación matemática.
- Una función que recibe parámetros y retorna un resultado.
- Funciones llamadas dentro de otras funciones.

## Archivos

- `index4.html` — página que carga el script.
- `leccion4.js` — código del ejercicio.

## Contexto del ejemplo

Calculadora aplicada a fonoaudiología: compara la **edad cronológica** de un paciente con su **edad de desarrollo del lenguaje** (estimada en una evaluación), calcula el desfase entre ambas y clasifica el nivel de retraso.

## Explicación del código

1. **Entrada de datos**: se pide por `prompt()` la edad cronológica y la edad de desarrollo del lenguaje, ambas en meses, con validación de que sean números válidos (`isNaN`).
2. **`calcularDesfaseMeses(edadCronologica, edadDesarrollo)`** — operación de resta: devuelve la diferencia en meses entre ambas edades. Si es positivo, hay retraso; si es cero o negativo, no.
3. **`convertirMesesAAnios(meses)`** — operación de división: convierte el desfase de meses a años (`meses / 12`).
4. **`calcularPorcentajeDesfase(desfaseMeses, edadCronologica)`** — operación de multiplicación: expresa el desfase como porcentaje de la edad cronológica (`(desfase / edadCronologica) * 100`).
5. **`determinarNivelRetraso(desfaseMeses)`** — función que recibe un parámetro y retorna un resultado: usa `if / else if / else` para clasificar el desfase en "Sin retraso", "Retraso leve", "Retraso moderado" o "Retraso severo".
6. **`evaluarPaciente(edadCronologica, edadDesarrollo)`** — función orquestadora: **llama a las cuatro funciones anteriores** (función dentro de función) y devuelve un objeto con todos los resultados (desfase en meses, en años, en porcentaje, y el nivel de retraso).

Todas las funciones reciben parámetros y devuelven (`return`) un resultado, sin depender de variables externas, lo que las hace reutilizables y fáciles de probar por separado.

## Cómo ejecutarlo

1. Abrir `index4.html` en el navegador.
2. Abrir la consola del navegador (Chrome Mac: `⌘ + Option + J`).
3. Ingresar la edad cronológica y la edad de desarrollo del lenguaje (en meses) cuando lo pida el `prompt`.

## Resultado esperado

En consola: ambas edades ingresadas, el desfase en meses y en años, el porcentaje de desfase respecto a la edad cronológica, y el nivel de retraso correspondiente.

> Ejemplo: edad cronológica 48 meses, edad de desarrollo 40 meses → desfase de 8 meses (~0.67 años), ~16.67% de desfase, "Retraso moderado".

## Evidencia

Capturas de pantalla de la ejecución en `assets/evidencia/`:

- `Captura de pantalla 2026-06-28 a la(s) 10.41.27 p.m..png`
- `Captura de pantalla 2026-06-28 a la(s) 10.41.50 p.m..png`
- `Captura de pantalla 2026-06-28 a la(s) 10.42.04 p.m..png`

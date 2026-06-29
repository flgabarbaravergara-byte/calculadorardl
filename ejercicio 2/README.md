# Ejercicio 2 — Variables, expresiones y sentencias condicionales

## Objetivo

Aprender a manejar variables, operadores y estructuras condicionales.

## Requisitos cubiertos

- Definición de variables con `let` y `const`.
- Ingreso de dos números por parte del usuario.
- Operaciones matemáticas: suma, resta, multiplicación, división.
- Estructuras condicionales `if`, `else` y `switch`.
- Validación de entradas del usuario.

## Archivos

- `index2.html` — página que carga el script.
- `leccion2.js` — código del ejercicio.

## Contexto del ejemplo

Comparación de los puntajes de un paciente en dos evaluaciones fonoaudiológicas (escala 0 a 100), para ver si hubo progreso entre una y otra.

## Explicación del código

1. **Entrada de datos**: `let puntajeEvaluacion1 = Number(prompt(...))` pide el puntaje de cada evaluación y lo convierte a número con `Number()`, ya que `prompt()` siempre devuelve texto.
2. **Validación**: `if (isNaN(puntajeEvaluacion1) || isNaN(puntajeEvaluacion2))` verifica que ambos valores ingresados sean números válidos. Si no lo son, se muestra un `alert` y no se continúa con los cálculos.
3. **Operaciones matemáticas**:
   - `sumaTotal` (suma): acumulado de ambas evaluaciones.
   - `diferencia` (resta): progreso entre la evaluación 1 y la evaluación 2.
   - `puntajePonderado` (multiplicación): puntaje de la evaluación 1 multiplicado por un factor de ponderación.
   - `promedio` (división): promedio entre ambas evaluaciones.
4. **Condicional `if / else if / else`**: compara los dos puntajes para indicar si el paciente mejoró, empeoró o se mantuvo igual entre evaluaciones.
5. **Condicional `switch`**: pide al usuario qué resultado quiere ver (`suma`, `diferencia`, `ponderado`, `promedio`) y muestra el valor correspondiente según el `case` que coincida.

## Cómo ejecutarlo

1. Abrir `index2.html` en el navegador.
2. Abrir la consola del navegador (Chrome Mac: `⌘ + Option + J`).
3. Ingresar los puntajes de las dos evaluaciones cuando lo pida el `prompt`.
4. Ingresar el nombre de un resultado (`suma`, `diferencia`, `ponderado` o `promedio`) cuando se solicite.

## Resultado esperado

En consola se muestran, en orden: las cuatro operaciones calculadas, la comparación de progreso entre evaluaciones, y el resultado elegido en el `switch`.

> Nota: el aviso "Unsafe attempt to load URL... file:" que puede aparecer en consola es propio de abrir el archivo en modo `file://` y no afecta el funcionamiento del script.

## Evidencia

Capturas de pantalla de la ejecución en `assets/evidencia/`:

- `Captura de pantalla 2026-06-28 a la(s) 10.39.49 p.m..png`
- `Captura de pantalla 2026-06-28 a la(s) 10.40.13 p.m..png`
- `Captura de pantalla 2026-06-28 a la(s) 10.40.26 p.m..png`
- `Captura de pantalla 2026-06-28 a la(s) 10.40.41 p.m..png`

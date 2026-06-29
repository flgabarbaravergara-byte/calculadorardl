// Lección 2: Variables, expresiones y sentencias condicionales
// Objetivo: manejar variables, operadores y estructuras condicionales.
// Contexto: comparación de los puntajes de un paciente en dos evaluaciones fonoaudiológicas.

// 1. Pedir al usuario los puntajes de dos evaluaciones (escala 0 a 100)
// Number() convierte el texto que devuelve prompt() en un valor numérico
let puntajeEvaluacion1 = Number(prompt("Puntaje de la evaluación 1 (0 a 100):"));
let puntajeEvaluacion2 = Number(prompt("Puntaje de la evaluación 2 (0 a 100):"));

// 2. Validación básica: si alguno no es un número válido, avisamos y detenemos la ejecución
if (isNaN(puntajeEvaluacion1) || isNaN(puntajeEvaluacion2)) {
  alert("Por favor ingresa valores numéricos válidos para ambas evaluaciones.");
} else {

  // 3. Operaciones matemáticas básicas aplicadas a los puntajes
  const sumaTotal = puntajeEvaluacion1 + puntajeEvaluacion2; // acumulado de ambas evaluaciones
  const diferencia = puntajeEvaluacion2 - puntajeEvaluacion1; // progreso entre evaluación 1 y 2
  const factorPonderacion = 1.2;
  const puntajePonderado = puntajeEvaluacion1 * factorPonderacion; // puntaje ponderado de la evaluación 1
  const promedio = sumaTotal / 2; // promedio entre ambas evaluaciones

  console.log("Suma total: " + sumaTotal);
  console.log("Diferencia (evaluación 2 - evaluación 1): " + diferencia);
  console.log("Puntaje ponderado de la evaluación 1: " + puntajePonderado);
  console.log("Promedio de ambas evaluaciones: " + promedio);

  // 4. Estructura condicional con if / else: evaluar el progreso del paciente
  if (puntajeEvaluacion2 > puntajeEvaluacion1) {
    console.log("El paciente mejoró entre la evaluación 1 y la evaluación 2.");
  } else if (puntajeEvaluacion2 < puntajeEvaluacion1) {
    console.log("El paciente disminuyó su puntaje entre la evaluación 1 y la evaluación 2.");
  } else {
    console.log("El paciente se mantuvo igual entre ambas evaluaciones.");
  }

  // 5. Estructura condicional con switch: pedir qué resultado se quiere ver
  const resultadoElegido = prompt(
    "¿Qué resultado quieres ver? (suma, diferencia, ponderado, promedio)"
  );

  switch (resultadoElegido) {
    case "suma":
      console.log("Resultado elegido -> Suma total: " + sumaTotal);
      break;
    case "diferencia":
      console.log("Resultado elegido -> Diferencia: " + diferencia);
      break;
    case "ponderado":
      console.log("Resultado elegido -> Puntaje ponderado: " + puntajePonderado);
      break;
    case "promedio":
      console.log("Resultado elegido -> Promedio: " + promedio);
      break;
    default:
      console.log("Opción no reconocida.");
  }
}

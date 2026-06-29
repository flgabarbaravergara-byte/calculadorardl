// Lección 4: Funciones en JavaScript
// Objetivo: modularizar el código utilizando funciones.
// Contexto: calculadora de fonoaudiología - desfase entre la edad cronológica
// de un paciente y su edad de desarrollo del lenguaje (estimada en una evaluación).

// Datos de entrada: edad cronológica y edad de desarrollo del lenguaje, ambas en meses
let edadCronologicaMeses = Number(prompt("Edad cronológica del paciente (en meses):"));
let edadDesarrolloMeses = Number(prompt("Edad de desarrollo del lenguaje estimada (en meses):"));

// Validación de las entradas
if (isNaN(edadCronologicaMeses) || isNaN(edadDesarrolloMeses)) {
  alert("Por favor ingresa valores numéricos válidos para ambas edades.");
} else {

  // 1. Función para la operación de RESTA: calcula el desfase en meses
  //    Si es positivo, el paciente tiene retraso; si es negativo o cero, no hay retraso.
  function calcularDesfaseMeses(edadCronologica, edadDesarrollo) {
    return edadCronologica - edadDesarrollo;
  }

  // 2. Función para la operación de DIVISIÓN: convierte meses a años
  function convertirMesesAAnios(meses) {
    return meses / 12;
  }

  // 3. Función para la operación de MULTIPLICACIÓN: calcula el desfase como porcentaje
  //    de la edad cronológica del paciente.
  function calcularPorcentajeDesfase(desfaseMeses, edadCronologica) {
    return (desfaseMeses / edadCronologica) * 100;
  }

  // 4. Función que recibe parámetros y retorna un resultado: clasifica el nivel de retraso
  //    usando condicionales (if / else if / else).
  function determinarNivelRetraso(desfaseMeses) {
    if (desfaseMeses <= 0) {
      return "Sin retraso (desarrollo acorde o adelantado)";
    } else if (desfaseMeses <= 6) {
      return "Retraso leve";
    } else if (desfaseMeses <= 12) {
      return "Retraso moderado";
    } else {
      return "Retraso severo";
    }
  }

  // 5. Función orquestadora: llama a las funciones anteriores (función dentro de función)
  //    para armar la evaluación completa del paciente.
  function evaluarPaciente(edadCronologica, edadDesarrollo) {
    const desfaseMeses = calcularDesfaseMeses(edadCronologica, edadDesarrollo);
    const desfaseAnios = convertirMesesAAnios(desfaseMeses);
    const porcentajeDesfase = calcularPorcentajeDesfase(desfaseMeses, edadCronologica);
    const nivelRetraso = determinarNivelRetraso(desfaseMeses);

    return {
      desfaseMeses: desfaseMeses,
      desfaseAnios: desfaseAnios,
      porcentajeDesfase: porcentajeDesfase,
      nivelRetraso: nivelRetraso
    };
  }

  // --- Uso de las funciones ---
  const resultado = evaluarPaciente(edadCronologicaMeses, edadDesarrolloMeses);

  console.log("Edad cronológica: " + edadCronologicaMeses + " meses");
  console.log("Edad de desarrollo del lenguaje: " + edadDesarrolloMeses + " meses");
  console.log("Desfase: " + resultado.desfaseMeses + " meses (" + resultado.desfaseAnios.toFixed(2) + " años)");
  console.log("Porcentaje de desfase respecto a la edad cronológica: " + resultado.porcentajeDesfase.toFixed(2) + "%");
  console.log("Nivel de retraso: " + resultado.nivelRetraso);
}

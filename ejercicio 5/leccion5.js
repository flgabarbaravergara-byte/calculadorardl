// Lección 5: Conceptos básicos de objetos en JavaScript
// Objetivo: utilizar objetos para organizar datos de manera estructurada.
// Contexto: seguimos con la calculadora de fonoaudiología (Lección 4), pero ahora
// cada paciente se representa como un objeto, con sus propios datos y métodos.

// 1. Objeto con propiedades y métodos: un paciente individual
const pacienteEjemplo = {
  nombre: "Sofía",
  edadCronologicaMeses: 48,
  edadDesarrolloMeses: 40,

  // Método: calcula el desfase en meses entre ambas edades
  calcularDesfaseMeses: function () {
    return this.edadCronologicaMeses - this.edadDesarrolloMeses;
  },

  // Método: clasifica el nivel de retraso según el desfase
  determinarNivelRetraso: function () {
    const desfase = this.calcularDesfaseMeses(); // método llamado dentro de otro método
    if (desfase <= 0) {
      return "Sin retraso";
    } else if (desfase <= 6) {
      return "Retraso leve";
    } else if (desfase <= 12) {
      return "Retraso moderado";
    } else {
      return "Retraso severo";
    }
  }
};

console.log("--- Paciente individual ---");
console.log("Nombre: " + pacienteEjemplo.nombre);
console.log("Desfase: " + pacienteEjemplo.calcularDesfaseMeses() + " meses");
console.log("Nivel de retraso: " + pacienteEjemplo.determinarNivelRetraso());

// 2. Arreglo de objetos: varios pacientes, cada uno con sus propias propiedades y métodos
const pacientes = [
  {
    nombre: "Sofía",
    edadCronologicaMeses: 48,
    edadDesarrolloMeses: 40,
    calcularDesfaseMeses: function () {
      return this.edadCronologicaMeses - this.edadDesarrolloMeses;
    },
    determinarNivelRetraso: function () {
      const desfase = this.calcularDesfaseMeses();
      if (desfase <= 0) return "Sin retraso";
      if (desfase <= 6) return "Retraso leve";
      if (desfase <= 12) return "Retraso moderado";
      return "Retraso severo";
    }
  },
  {
    nombre: "Mateo",
    edadCronologicaMeses: 36,
    edadDesarrolloMeses: 34,
    calcularDesfaseMeses: function () {
      return this.edadCronologicaMeses - this.edadDesarrolloMeses;
    },
    determinarNivelRetraso: function () {
      const desfase = this.calcularDesfaseMeses();
      if (desfase <= 0) return "Sin retraso";
      if (desfase <= 6) return "Retraso leve";
      if (desfase <= 12) return "Retraso moderado";
      return "Retraso severo";
    }
  },
  {
    nombre: "Valentina",
    edadCronologicaMeses: 60,
    edadDesarrolloMeses: 42,
    calcularDesfaseMeses: function () {
      return this.edadCronologicaMeses - this.edadDesarrolloMeses;
    },
    determinarNivelRetraso: function () {
      const desfase = this.calcularDesfaseMeses();
      if (desfase <= 0) return "Sin retraso";
      if (desfase <= 6) return "Retraso leve";
      if (desfase <= 12) return "Retraso moderado";
      return "Retraso severo";
    }
  }
];

// 3. Recorrer el arreglo de objetos con forEach(): mostrar el resultado de cada paciente
console.log("--- Evaluación de todos los pacientes (forEach) ---");
pacientes.forEach(function (paciente) {
  console.log(
    paciente.nombre + " -> desfase: " + paciente.calcularDesfaseMeses() +
    " meses, nivel: " + paciente.determinarNivelRetraso()
  );
});

// 4. Recorrer el arreglo de objetos con map(): generar un nuevo arreglo con un resumen por paciente
const resumenPacientes = pacientes.map(function (paciente) {
  return {
    nombre: paciente.nombre,
    nivelRetraso: paciente.determinarNivelRetraso()
  };
});

console.log("--- Resumen generado con map() ---");
console.log(resumenPacientes);

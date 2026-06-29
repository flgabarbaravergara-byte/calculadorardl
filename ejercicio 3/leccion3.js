// Lección 3: Arreglos y ciclos
// Objetivo: usar arreglos y estructuras de repetición (for, while).
// Contexto: seguimiento del progreso de un paciente a lo largo de varias sesiones de terapia.

// 1. Arreglo con los puntajes obtenidos en cada sesión de terapia (escala 0 a 100)
const puntajesSesiones = [55, 68, 72, 80, 65, 90, 78];

console.log("Puntajes por sesión: " + puntajesSesiones);

// 2. Recorrer el arreglo con un ciclo for, calculando el total acumulado
console.log("--- Recorrido con for: detalle de cada sesión ---");
let totalConFor = 0;
for (let i = 0; i < puntajesSesiones.length; i++) {
  console.log("Sesión " + (i + 1) + ": " + puntajesSesiones[i] + " puntos");
  totalConFor += puntajesSesiones[i];
}
console.log("Total acumulado (calculado con for): " + totalConFor);

// 3. Recorrer el arreglo con un ciclo while, calculando el promedio de las sesiones
console.log("--- Recorrido con while: promedio de progreso ---");
let indice = 0;
let totalConWhile = 0;
while (indice < puntajesSesiones.length) {
  totalConWhile += puntajesSesiones[indice];
  indice++;
}
const promedioSesiones = totalConWhile / puntajesSesiones.length;
console.log("Promedio de puntaje por sesión: " + promedioSesiones.toFixed(2));

// 4. Función que filtra las sesiones que superan un puntaje mínimo de aprobación
function filtrarSesionesAprobadas(arreglo, puntajeMinimo) {
  const resultado = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] >= puntajeMinimo) {
      resultado.push(arreglo[i]);
    }
  }
  return resultado;
}

const puntajeMinimoAprobacion = 70;
const sesionesAprobadas = filtrarSesionesAprobadas(puntajesSesiones, puntajeMinimoAprobacion);
console.log(
  "Sesiones aprobadas (>= " + puntajeMinimoAprobacion + " puntos): " + sesionesAprobadas
);

// 5. Función que filtra las sesiones que no alcanzaron el puntaje mínimo
function filtrarSesionesNoAprobadas(arreglo, puntajeMinimo) {
  const resultado = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] < puntajeMinimo) {
      resultado.push(arreglo[i]);
    }
  }
  return resultado;
}

const sesionesNoAprobadas = filtrarSesionesNoAprobadas(puntajesSesiones, puntajeMinimoAprobacion);
console.log(
  "Sesiones no aprobadas (< " + puntajeMinimoAprobacion + " puntos): " + sesionesNoAprobadas
);

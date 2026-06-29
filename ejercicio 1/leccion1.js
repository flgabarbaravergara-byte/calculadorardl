// Lección 1: Introducción al lenguaje JavaScript
// Objetivo: familiarizarse con la sintaxis básica y ejecutar código en la consola del navegador.
// Contexto: introducción a una app de evaluación fonoaudiológica.

// 1. Mostrar un mensaje simple en la consola
console.log("Bienvenido/a a la Calculadora de Evaluación Fonoaudiológica - Módulo 3.");

// 2. Pedir un dato al usuario con prompt()
const nombreTerapeuta = prompt("¿Cuál es tu nombre? (terapeuta/usuario de la app)");

// 3. Mostrar un mensaje personalizado en consola usando el dato ingresado
console.log("Bienvenido/a, " + nombreTerapeuta + ". Esta app te ayudará a evaluar el desarrollo del lenguaje de tus pacientes.");

// 4. Mostrar un mensaje personalizado con alert()
alert("Hola " + nombreTerapeuta + ", con esta aplicación vas a poder calcular el desfase " +
      "entre la edad cronológica y la edad de desarrollo del lenguaje de un paciente, " +
      "y registrar el progreso a lo largo de varias sesiones de terapia.");

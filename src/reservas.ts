import { ReservaParticular, ReservaOperador } from "./reservas.control";
import { reservas } from "./reservas.model";


// TODO: Según lo que he entendido en el enunciado, solo el Caso 1 (Particular) tiene cargo por persona adicional y solo el Caso 2 tiene el 15% de descuento. En ambos se incluye el Desayuno como dice el ejercicio adicional. Ambas Clases hijas provienen de la clase ReservaHotel 

const reservaParticularCaso1 = new ReservaParticular(reservas);
console.log(reservaParticularCaso1);
console.log("El TOTAL sin IVA + Desayunos + Cargo por persona adicional es: ", reservaParticularCaso1.totalSinIVAMasCargoPorPersonaAdicional());
console.log("El TOTAL con IVA es: ", reservaParticularCaso1.totalConIVA());

const reservaOperadorCaso2 = new ReservaOperador(reservas);
console.log(reservaOperadorCaso2);
console.log("El TOTAL sin IVA + Desayunos es: ", reservaOperadorCaso2.totalSinIVA());
console.log(
  "El subtotal sin IVA + Desayuno + Descuento es :",
  reservaOperadorCaso2.totalSinIVAConDescuento()
);
console.log("El TOTAL con IVA  es: ", reservaOperadorCaso2.totalConIVA());


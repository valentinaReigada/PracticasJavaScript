//   Dada la siguiente problematica: puede un numero X formarse
//   usando la suma de 2 elementos de un array?
//   Ejemplo 1
//   Input: nums = [1,4,3,9], requiredSum = 8
//   Output: False
//   Ejemplo 2
//   Input: nums = [1,2,4,4], requiredSum = 8
//   Output: True

//1)   recursos infinitos, el tiempo de ejecución no importa:
function puedeDar_EnLaSumaDeDosElementos_(sumaRequerida, listaNumeros) {
  let suma = 0;
  let listaAComparar = [];
  let encontroCoincidencia = false;

  listaNumeros.forEach((num, posicion) => {
    if (!encontroCoincidencia) {
      listaAComparar = listaNumeros;
      listaAComparar.splice(posicion, 1);
      listaAComparar.forEach((numeroSiguiente) => {
        suma = num + numeroSiguiente;
        if (suma === sumaRequerida) {
          encontroCoincidencia = true;
          return encontroCoincidencia;
        }
      });
    }
  });
  return encontroCoincidencia;
}

//2 -cuidar recursos, es importante el tiempo de ejecucion.

function puedeDar_EnLaSumaDeDosElementosDe_(sumaRequerida, listaDeNumeros) {
  let listaAComparar = [];
  let encontroCoincidencia = false;
  for (let i = 0; i < listaDeNumeros.length && !encontroCoincidencia; i++) {
    const numeroActual = listaDeNumeros[i];
    listaAComparar = listaDeNumeros;
    listaAComparar.splice(i, 1);
    encontroCoincidencia = laSumaDe_ConAlgunoDeLaLista_Da_(
      numeroActual,
      listaAComparar,
      sumaRequerida
    );
  }
  return encontroCoincidencia;
}

function laSumaDe_ConAlgunoDeLaLista_Da_(
  numero,
  listaAComparar,
  sumaRequerida
) {
  let suma = 0;
  let encontroCoincidencia = false;

  for (let i = 0; i < listaAComparar.length && !encontroCoincidencia; i++) {
    const numeroActual = listaAComparar[i];
    suma = numeroActual + numero;
    if (suma === sumaRequerida) {
      encontroCoincidencia = true;
    }
  }
  return encontroCoincidencia;
}

// listaDeNumeros = [1, 4, 3, 9];
// console.log(puedeDar_EnLaSumaDeDosElementosDe_(5, listaDeNumeros));

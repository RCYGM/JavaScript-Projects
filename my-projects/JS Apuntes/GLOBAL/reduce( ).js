// Suma de todos los elementos de un array
// Ejemplo: suma de horas trabajadas en una semana
const horasTrabajadas = [8, 7, 9, 6, 8];
const totalHoras = horasTrabajadas.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(totalHoras); // Resultado: 38 horas trabajadas en la semana

// Multiplicación de todos los elementos de un array
// Ejemplo: calcular el total de productos en stock multiplicando cantidad y precio de varios productos
const precios = [10, 20, 15, 12];
const totalMultiplicado = precios.reduce((acumulador, valorActual) => acumulador * valorActual, 1);
console.log(totalMultiplicado); // Resultado: 36000

// Encontrar el valor máximo en un array
// Ejemplo: encontrar la temperatura máxima en una semana
const temperaturas = [22, 25, 27, 30, 24, 20];
const temperaturaMaxima = temperaturas.reduce((acumulador, valorActual) => Math.max(acumulador, valorActual));
console.log(temperaturaMaxima); // Resultado: 30 grados

// Concatenar cadenas
// Ejemplo: generar una URL a partir de fragmentos
const fragmentosURL = ['https://', 'mi-sitio', '.com', '/portfolio'];
const urlCompleta = fragmentosURL.reduce((acumulador, parte) => acumulador + parte);
console.log(urlCompleta); // Resultado: "https://mi-sitio.com/portfolio"

// Resta de elementos
// Ejemplo: calcular el saldo restante de una cuenta después de varios gastos
const saldoInicial = 500;
const gastos = [50, 100, 25];
const saldoRestante = gastos.reduce((acumulador, gasto) => acumulador - gasto, saldoInicial);
console.log(saldoRestante); // Resultado: 325

// Combinar objetos
// Ejemplo: sumar el total de ganancias de varios productos vendidos en una tienda
const productos = [
  { nombre: 'Producto 1', cantidad: 3, precio: 10 },
  { nombre: 'Producto 2', cantidad: 2, precio: 20 },
  { nombre: 'Producto 3', cantidad: 5, precio: 7 }
];
const gananciasTotales = productos.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.precio, 0);
console.log(gananciasTotales); // Resultado: 85

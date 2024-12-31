// Operadores

// Operadores aritméticos
console.log("Operadores aritméticos")
let a = 5
let b = 2
console.log(a + b) //Suma
console.log(a - b) //Ressta
console.log(a * b) //Multiplicación
console.log(a / b) //División

console.log(a % b) //Módulo (residuo de la división)
console.log(a ** b) //Exponente (a elevado a la b)

a++ //Incremento en 1
console.log(a)

b-- //Decremento en 1
console.log(b)

// Operadores de asignación
console.log("Operadores de asignación")
let myVariable = 10
console.log(myVariable)
myVariable += 2 // myVariable = myVariable + 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparación
console.log("Operadores de comparación")
console.log(a > b) //Mayor que
console.log(a < b) //Menor que
console.log(10 >= 10) //Mayor o igual que
console.log(a <= b) //Menor o igual que
console.log(a)
console.log(a == 6) //Igual que (iguales en valor)
console.log(a == "6")
console.log(a === 6) //Estrictamente igual que (iguales en valor y tipo de dato)
console.log(a === "6")
console.log(a != 6) //Diferente que
console.log(a !== "6") //Estrictamente diferente que

console.log(0 == false)
console.log(1 == true)
console.log(2 == true)

console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "hola")

console.log(undefined == null)
console.log(undefined === null)

// Truthy values (valores verdaderos)
// Todos los numeros positivos y negativos menos el 0
// Todas las cadenas de texto menos las vacias
// El booleano true

// Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// Cadenas de texto vacias

// Operadores lógicos
console.log("Operadores lógicos")
// AND (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// OR (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)

console.log(5 > 10 && 15 > 20 || 30 > 40)

// NOT (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios
console.log("Operadores ternarios")
const isRaining = true
isRaining ? console.log("Lleva paraguas") : console.log("No lleves paraguas")
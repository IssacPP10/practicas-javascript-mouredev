// Estos tipos de datos en javascript son llamados primitivos, ya que no son objetos, y no tienen métodos propios, pero se pueden utilizar métodos de los objetos que los contienen.

// String (Cadena de texto)
let name = "Issac"
let alias = 'IssacPP10'
let email = `issac.isc.isc@gmail.com`

// Number (Números)
let age = 25 // Entero
let height = 1.75 // Decimal

// Boolean (Verdadero o Falso)
let isDeveloper = true
let isStudent = false

// Undefined
let undefinedValue

// Null
let nullValue = null

// Symbol (Se usa para crear identificadores únicos)
let symbolValue = Symbol('mySymbol')

// BigInt (se usa cuando se necesita trabajar con números enteros muy grandes)
let bigIntValue = BigInt(9007199254740991)
let bigIntValue2 = 9007199254740991n

// Mostramos los tipos de datos
console.log(typeof name) // string
console.log(typeof alias)
console.log(typeof email)
console.log(typeof age) //number
console.log(typeof height)
console.log(typeof isDeveloper) //boolean
console.log(typeof isStudent)
console.log(typeof undefinedValue) // undefined
console.log(typeof nullValue) // object
console.log(typeof symbolValue) // symbol
console.log(typeof bigIntValue) // bigint
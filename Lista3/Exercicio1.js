const x1 = 3, x2 = 12, y1 = 4, y2 = 6
let x3 = 0, y3 = 0, ajuda = 0, resultado = 0

console.log("x1 = "+x1 + "\n")
console.log("x2 = "+x2 + "\n")
console.log("y1 = "+y1 + "\n")
console.log("y2 = "+y2 + "\n")

x3 = x2 - x1
y3 = y2 - y1

x3 = x3 ** 2
y3 = y3 ** 2
resultado = x3 + y3
resultado = Math. sqrt(resultado)


console.log("A distancia entre eles é = "+resultado)
const ciudades = new Set([
    "Amsterdam",
    "Vancouver",
    "Brujas",
    "Vancouver",
    "Tandil",
    "Bruejas",
    "Madrid",
    "Vancouver",
])
 
console.log(ciudades)
const numbers = new Set();
numbers.add(23)
numbers.add(3)
numbers.add(-9)

console.log(ciudades.size)

console.log(`Ciudad está registrada ${ciudades.has("Tandil")}`)


console.log(numbers.delete(3))
console.log(numbers.delete(300))
numbers.add(-20)
console.log(numbers)

// objetos iguales... no tan iguales
const pandorasBox = new Set([
    "horse", 34, "Andromeda"
])
pandorasBox.add({ 11: "Buenos aires", 2349: "Tandil"})
console.log(pandorasBox)
const areaCodes = {11: "Buenos aires", 2349: "Tandil"} 
console.log(pandorasBox.size)
pandorasBox.add(areaCodes);
console.log(pandorasBox.size)
console.log(pandorasBox)

pandorasBox.clear()
console.log(pandorasBox)

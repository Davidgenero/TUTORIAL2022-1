


let objetoMap = new Map([
    [1, "Norberto"],
    [2, "Julieta"],
    [3, "Scooby doo"]
])
console.log(objetoMap)

//Propiedades

console.log("Tamaño del map: ${objetoMap.size}")

console.log(objetoMap.get(2))
console.log(objetoMap.get(5))

objetoMap.set(4, "Cecilia");
console.log(objetoMap.get(5))


objetoMap.set(2, "Cecilia");
console.log(objetoMap.get(2))

objetoMap.set(2, "Manuela");
console.log(objetoMap.get(1))

console.log(objetoMap.has(3))

objetoMap.delete(2)
console.log(objetoMap)

objetoMap.clear()
console.log(objetoMap)


///itiradores
//Keys: devuelve un itirador con las claves ordenadas

let iteratorKeys = objetoMap.keys()
console.log(iteratorKeys)

const iteratorValues = objetoMap.values()
console.log(iteratorValues)

const iteratorEntries = objetoMap.entries()
console.log(iteratorEntries)
console.log(iteratorEntries.next().value);


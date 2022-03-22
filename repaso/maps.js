

let objetoMap = new Map([
    [1, "Roberto"],
    [2, "Julieta"],
    [3, "Scooby"] 

]);
console.log(objetoMap)
console.log(`Tamaño del map: ${objetoMap.size}`)


console.log(objetoMap.get(2))
console.log(objetoMap.get(5))


objetoMap.set(4, "Cecilia");
console.log(objetoMap.get(4))

objetoMap.set(1, "Manuela");
console.log(objetoMap.get(1))

//Has :comprueba si el map contienen un elemento indicado por su clave
console.log(objetoMap.has(3))
console.log(objetoMap.has(9))


// delete :borra un elemento segun la clave que le pasamos

// objetoMap.delete(2)
console.log(objetoMap)

// clear: borra todos los elementos del map

// objetoMap.clear()
console.log(objetoMap)

//iteradores
//Keys:devuleve un iterador con las claves ordenadas

const iteratorKeys = objetoMap.keys()
console.log(iteratorKeys)

const iteratorValues = objetoMap.values()
console.log(iteratorValues)

const iteratorEntries = objetoMap.entries()
console.log(iteratorEntries)
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().done);



/*
    Desarrollado por:
    Jose Antonio Santiago Garnica
    Jonathán Jesús Martínez Bello
    Jesús Ulises Alonso Rivera
    Jordan Gallardo Vitela
 */

function frequency(string) {
    //Conversion de string a array
    var stringToArray = Array.from(string)
    var frecuencyObjectUnordered = {}
    //recorre cada elemento del array
    stringToArray.forEach(character => {
        //si el elemento del no esta en el object lo agrega
        if(!frecuencyObjectUnordered.hasOwnProperty(character)){
            frecuencyObjectUnordered[character] = 1
        }
        //si ya esta en el object le suma uno a su valor actual
        else{
            frecuencyObjectUnordered[character] += 1
        }
    });
    //Ordenamiento del objeto by Keys
    const frecuencyObjectOrdered = Object.keys(frecuencyObjectUnordered).sort().reduce(
        (obj, key) => { 
          obj[key] = frecuencyObjectUnordered[key]; 
          return obj;
        }, 
        {}
    );   
      return frecuencyObjectOrdered
}

console.log('Test 1:', frequency('cccbbbaaa'))// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
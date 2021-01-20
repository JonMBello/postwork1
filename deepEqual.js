/*
    Desarrollado por:
    Jonathán Jesús Martínez Bello
    Jesús Ulises Alonso Rivera
    Jose Antonio Santiago Garnica
    Jordan Gallardo Vitela
 */

function deepEqual(a, b) {
    let bandera=true;
    let sonObjetos=false;
    if(typeof(a)=='object' && typeof(b)=='object') {
        sonObjetos = true;
        let keysA = Object.keys(a);
        let keysB = Object.keys(b);
        for(let i=0; i<Math.max(keysA.length, keysB.length); i++) {
            if(!deepEqual(a[keysA[i]],b[keysB[i]])) {
                bandera = false;
            }
        }
    }
    if(sonObjetos){
        if(!bandera){
            return false;
        }
    }else{
        if(a!==b){
            return false;
        }
    }
    return true;
}
  
var john = {
    firstName: 'John',
    lastName: 'Doe'
}
  
console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false 
console.log('Test 3:', deepEqual(john, john)) // true 
console.log('Test 4:', deepEqual(john, {firstName:'John', lastName:'Doe'})); // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
/*
    Desarrollado por:
    Jesús Ulises Alonso Rivera
    Jonathán Jesús Martínez Bello
    Jose Antonio Santiago Garnica
    Jordan Gallardo Vitela
 */

var data = [1, 2, 3, 4, 5, 6, 7, 8]

function chunk(array, size) {
    
    var newData = [];
    var t = Math.round(array.length/size);
    newData.length = t;
    var g = Math.round(array.length/newData.length);
    
        

        for(var a = 0; a<array.length;){
            for(var i = 0; i < newData.length; i++){
                newData[i] = [];
                for(var j=0 ; j<g; j++){
                    if(array[a]){
                        newData[i].push(array[a]);
                        a++;
                    }
                }
                
            }
        }
    return newData;
}

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
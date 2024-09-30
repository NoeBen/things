let nombres = [
    'muzarella',
    'Olivia',
    'asteroid',
    'olivia',
    'popi',
    'catrina',
]

const mascotas = [
    'muzarella',
    'Olivia',
    'asteroid',
    'olivia',
    'popi',
    'catrina',
];

console.log(mascotas[3]);

// Asignacion de valores
console.log(mascotas[5]);
mascotas[5] = 'Michi Nuevo';
console.log(mascotas[5]);

// Agregar elementos
mascotas.push('Almendro');
console.log(mascotas);

// Eliminar ultimo elemento
const ultimoMichi = mascotas.pop();
console.log(mascotas);
console.log(ultimoMichi);

console.log(mascotas[5]);

//// for (const mascota of mascotas);

// Loopear un array con let                                 same thing → i++ \ i=i+1
for (let i=0; 1 < mascotas.length; i++) {
    console.log(mascotas[i]);
}

// Loopear con while
let i = 0;

while (i<mascotas.length) {
    console.log(mascotas[i]);
    i++;
}

// Dado dos valores, un array de numeros y un numero, retornar un array con los numeros de ese array mayores a ese numero dado. Si no hay numeros con esas condiciones retornar un array vacio. Ej dado: [1,2,3,4] y el nro 2, retornamos [3,4]
   // Casos de prueba
    // [1,2,3,4,5,6] , 2
     //[1000,2,100,1,200] , 50
      // [0] , 5
       // [1,1,-1] , 0
        // [] , 3

        /////////////////////////////////// resultado.push (variable)

    let i = 0
    let number3 = ['1','2','3','4','5','6'];
    let number4= ['2'];
        
        
    let number1 = ['1000','2','100','1','200']
    let number2 = ['50']
        for (let i=0; i < number1.length; i++);
            console.log (number1[i]);
        if (number2<number1)
            console.log (number1[i])
        

function adivinar (arrayL, num) {
    let resultado = [];
    for (let i=0; i < arrayL.length: i++) {
        console.log ()
    }
    return resultado;
} 
//1. Funciones flecha

// 1.1Convierte la siguiente función en una función flecha:

// function saludar() {
//     return "Hola";
//   }
  
const saludar = () => "hola"

console.log(saludar())

// function division(a,b) {
//     return a / b;
//   }
  
const division = (a,b) => a/b

console.log(division(2,3))

// function miNombre(nombre) {
//     return `Mi nombre es ${nombre}`;
//   }
  
const miNombre = (nombre) => "Mi nombre es " + nombre

console.log(miNombre("Sergio"))

// function test2() {
//     console.log("Función test 2 ejecutada.");
//   }
//   function test1(callback) {
//     callback();
//   }	


 const test2 = test1 => test1(test2)

 console.log(test2)

// 2. Foreach
// Utiliza la siguiente array para resolver los próximos ejercicios: 

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

 // Crea un array con la gente mayor de 25 años y muéstralo por consola.

  const edades = []

   gente.forEach((persona) => {
      if (persona.edad >= 25) {
         edades.push(persona)
      }
    });
    
    console.log(edades)

//  Crea un array con la gente que empieza por J.

   const letra = []

   gente.forEach((persona) => {
    if (persona.nombre.substring(0,1) == "J" ) {
       letra.push(persona)
    }
  });

   console.log(letra)


// 3. Map //No he podido hacer los maps, lo intenté pero me encontraba mal y tuve que parar.

// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

// const mayores25 = gente.map(gente => gente.edad >= 25); 


const mayores25 = gente.map((persona) => {
    for(let i = 0; i < persona.length; i++)
             gente[i].edad
  });

console.log(mayores25)

    
// Crea un array con la gente que empieza por J. 

const nombreJ = gente.map(persona => persona.nombre.substring(0,1) == "J")

console.log(nombreJ)

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:


// 4. Filter

// Crea un segundo array que devuelva los impares

 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const impares = numbers.filter(numero => numero %2 == 1)

 console.log(impares)

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:

 const foodList = [
        {
          name: 'Tempeh',
          isVeggie: true
        },
        {
          name: 'Cheesbacon burguer',
          isVeggie: false
        },
        {
          name: 'Tofu burguer',
          isVeggie: true
        },
        {
          name: 'Entrecot',
          isVeggie: false
        }
      ];


const veganos = foodList.filter(comida => comida.isVeggie == true)

console.log(veganos)

// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const numeros = [39, 2, 4, 25, 62];

const mult = numeros.reduce((a,b)=> a * b)

console.log(mult)

// Salida--> 483600

  
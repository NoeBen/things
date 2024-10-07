const Persona = {
    nombre: "Tita",
    edad: 32,
}
console.log(Persona.nombre);
console.log(Persona.edad);
Persona.age = 21;
console.log("Nueva edad: " + Persona.edad);
console.log("Hola: " + Persona["nombre"]);
// console.log(Persona.saludar);




function crearPersona(name,age) {
    const obj = {};
    obj.name = name;
    obj.age = age;
    obj.saludar = function () {
        return "Hi I am " + this.name;
    }
    return obj;
}

const Marta = crearPersona("Marta",20);
console.log(Marta.saludar())

const Maria = crearPersona("Maria",22);
console.log(Maria.saludar())

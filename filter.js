
const personas = [
    {nombre: 'Juan', edad: 20, puesto: 'Frontend'},
    {nombre: 'Pablo', edad: 25, puesto: 'devOps'},
    {nombre: 'Lucia', edad: 26, puesto: 'UXUI'},
    {nombre: 'Eli', edad: 34, puesto: 'PO'},
    {nombre: 'Julian', edad: 32, puesto: 'Backend'},
];
console.log(personas)

const mayores = personas.filter(persona => {
    return persona.edad >= 26;
})

console.log(mayores);

const eli = personas.find(persona => {
    return persona.nombre === 'Eli';
    } );
    console.log(`El dev es  ${eli.nombre}`);




const carrito = ['producto1', 'producto2', 'producto3'];

console.log(carrito);

carrito.map(producto => {
    return `El producto es: ${producto}`;

});
console.log(carrito);

/* const appContenedor = document.querySelector('#app');

let html = ''

carrito.forEach(producto => {
    html += `
        <li>${producto}</li>
    `;
})

appContenedor.innerHTML = html; */


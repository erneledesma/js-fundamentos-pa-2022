// function declaration

function saludar(nombre, web) {
    console.log(`Bienvenido ${nombre} a nuestra web ${web} `);
}

saludar('Marcos', 'www.google.com');


// function expression
const cliente = function(nombreCliente) {
    console.log(`Bienvenido a nuestra web ${nombreCliente}`);
}
cliente('Pedro')
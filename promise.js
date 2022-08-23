
// Promises

const aplicarDescuento = new Promise((resolve, reject) => {

    setTimeout( () => {
         let descuento = true;

         if(descuento) {
            resolve('Descuento aplicado');
         } else {
            reject('No se pudo aplicar el descuento')
        }
    }, 3000)
});

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
})


/* 
console.log(aplicarDescuento) */


//Resolve -> ejecuta el llamdo al Promise cuando es correcto
// Reject -> cuando hubo un error


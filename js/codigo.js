//ingreso usuario
for (let i=1; i<=3; i++){
    let usuario=prompt("ingresa usuario");
    let contrasenia=prompt("ingresa contraseña para "+usuario);

    if ((usuario=="naircardozo")&&(contrasenia=="1234")){
        console.log("bienvenido a la farmacia!!");
        break;
    }else{
        console.log("usuario y/o contraseña incorrecta!! restan "+(3-i)+"intentos");
    }
}


let fruta = prompt("ingresa la medicación y te dire el precio por cajita(salir para finalizar)");

while (fruta !="salir"){
    switch(fruta){
        case "magnesio":
            console.log("Precio de curflex x 30comprimidos $3020");
            alert("ya se añadio al carrito!")
            break;
        case "diclofenac":
            console.log("Precio de anaflex $500");
            alert("ya se añadio al carrito!")
            break;
        case "ibuprofeno":
            console.log("Precio de ibupirac 600mg x 20comprimidos $1300");
            alert("ya se añadio al carrito!")
            break;
        case "paracetamol":
        case "Paracetamol":
            console.log("Precio tafirol por 30comprimidos $750");
            alert("ya se añadio al carrito!")
            break;
        default:
            console.log("medicación sin stock");
            alert("Disculpas, no tenemos mas stock")
            break;
    }
    fruta=prompt("precisa alguna otra medicación ??? te dire el precio por caja x30compr( escriba {salir} para finalizar)");
}
alert("gracias por su compra")
console.log("finalizo compra!");

//funcion con parametro y RETURN

let precioMedicina=parseFloat(prompt("ingresa el precio del medicamento"));


function calcularIva(precio){
return precio * 0.21;
}

//precio=100 -> iva=21

let iva = calcularIva(precioMedicina);
console.log("El valor del IVA es $"+ iva);

function mostrarPrecioFinal(precioIngresado,ivaCalculado){
    console.log("El precio con iva incluido es $"+(precioIngresado+ivaCalculado));
}

mostrarPrecioFinal(precioMedicina,iva);

const tensiometro = [
    {
        isbn:"2536253",
        accesorio:"tensiometro",
        tipo:"manual",
        marca:"Coronet",
        modelo:"Bd/572",
        precio:2500
    },
    {
        isbn:"1225432",
        accesorio:"tensiometro",
        tipo:"digital",
        marca:"Omicron",
        modelo:"M2 basic",
        precio:13000
    },
    {
        isbn:"3332345",
        accesorio:"tensiometro",
        tipo:"digital",
        marca:"Aspen",
        modelo:"As 102",
        precio:13200
    },
    {
        isbn:"4677999",
        accesorio:"tensiometro",
        tipo:"manual",
        marca:"Maverich",
        modelo:"YE8600",
        precio:4800
    }
];

//forEach
tensiometro.forEach((tensio)=> console.log(tensio.marca));

//find
const encontrado = tensiometro.find((tensio)=> tensio.marca== "Coronet");
console.log(encontrado);

const encontrado1 = tensiometro.find((tensio)=> tensio.marca== "klonal");

//filter
const economico = tensiometro.filter((tensio) => tensio.precio <3000);
console.log(economico);










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
alert("gracias por su compra");
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


//RECORDAR!!

//forEach
//tensiometro.forEach((tensio)=> console.log(tensio.marca));

//find
//const encontrado = tensiometro.find((tensio)=> tensio.marca== "Coronet");
//console.log(encontrado);

//const encontrado1 = tensiometro.find((tensio)=> tensio.marca== "klonal");

//filter
//const economico = tensiometro.filter((tensio) => tensio.precio <3000);
//console.log(economico);


    
//dom
console.dir(document.body);

let  titulo = document.getElementById("titulo");
console.log(titulo.innerText);
titulo.innerText="FARMACIA ONLINE!";
titulo.style.font="bold 40px monospace";
titulo.style.textAlign="center";

//cambiar innerHTML
let articulo =document.getElementById("accesorio");
console.log(articulo.innerHTML);
articulo.innerHTML += "<h1>ACCESORIOS</h1>"

//color
let seccion = document.getElementById("body-principal");
console.log(seccion.innerHTML);
seccion.style.background="dark";


let probando=document.getElementById("titulo");
console.log(probando.innerHTML);



//aqui comienza la tabla
let campoTensiometro = document.getElementById("empresa");
let campoStock = document.getElementById("cantidad");

campoTensiometro.value = "MARCAS";
campoStock.value = 19;

//array de objetos literales
const tensiometro =[ { id:1, nombre: "Coronet", precio:2500},
                      { id:2, nombre: "Omicron", precio:13000},
                      { id:3, nombre: "Aspen", precio:8000},
                      { id:4, nombre: "Maverich", precio:25000},
                      { id:5, nombre: "Klonal", precio:6000}
];
campoStock.value = tensiometro.length;

//tabla
let articuloTabla = document.getElementById("inferior");
//creamos la tabla
let tabla =document.createElement("table");
tabla.className="table table-striped"
let tablaBody = document.createElement("tBody");

//recorro  el array de productos
for (const tensio of tensiometro){
    tablaBody.innerHTML += `
    <tr>
        <td>${tensio.id}</td>
        <td>${tensio.nombre}</td>
        <td>${tensio.precio}</td>
    </tr>    

    `;
}
tabla.append(tablaBody);
articuloTabla.append(tabla);


//aqui finaliza la tabla!!


//json y localstorage
const objetoJson = JSON.stringify(tensiometro);
console.log(objetoJson);
localStorage.setItem("accesorio",objetoJson);

const delStorage = localStorage.getItem("accesorio");
const jsonObjeto = JSON.parse(delStorage);
console.log(jsonObjeto);


//operador de asigancion condicional, es un ejemplo !! sino paga envio retira en persona

console.log("/n**oprador de asignacion condicional ||");
let envio = localStorage.getItem("envio") || "retira en persona";
console.log(envio);

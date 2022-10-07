/*

//operaciones matematicas basicas
let num1 =8;
let num2 =3;
let suma = num1 + num2; //11
let resta = num1 - num2; //5
let multiplicacion = num1 * num2; //24
let division = num1 / num2;//2.6666

//concatenacion
let apellido = "gomez";
let nombreCompleto = nombre +" "+ apellido ; //marina gomez

let nomYEdad = nombre +" "+ edad;//marina40

//consola
console.log("bienvenidos a la consola");
console.log("el resultado de la suma es: "+suma);
console.log("el resultado de la resta es: "+resta);
console.log("el resultado de la multiplicacion es: "+multiplicacion);
console.log("el resultado de la division es: "+division);

console.log("El nombre completo del usuario es: "+nombreCompleto);
console.log("El nombre concatenado a la edad es: "+nomYEdad);


//prompt

let bandaFavorita = prompt ("ingresa tu banda favorita");
console.log("la banda favorita del usuario es: "+bandaFavorita);

let nomUsu = prompt("ingresa tu nombre");
alert("Buenas noches "+nomUsu);

//ejercicio sumamos dos numeros que ingresa en usuario
let primerNum = parseInt(prompt("ingresa el primer numero a sumar"));
let segundoNum = parseInt(prompt("ingresa el segundo numero a sumar"));
//ya tenemos ambos numeros en formato numerico
let sumaNumeros = primerNum + segundoNum ;
alert("la suma de los numeros ingresados es ="+sumaNumeros);

//parseFloat para convertir a numeros decimales por ej un precio.



*/

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





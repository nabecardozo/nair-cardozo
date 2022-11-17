//after clase 9
let productosJSON = [];
let dolarCompra;

//let carrito = [];


let contenedor = document.getElementById("misprods");
let btnFin = document.getElementById("finalizar");
//ultmo after
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

(carrito.length != 0) && dibujartabla();
obtenerDolar();

function dibujartabla() {
    for (const producto of carrito) {
        document.getElementById("tablabody").innerHTML += `
        <tr>
           <td>${producto.id}</td>
           <td>${producto.nombre}</td>
           <td>${producto.precio}</td>
           <td><button class="btn btn-light" onclick="eliminar(event)">🗑️</button></td>
        </tr>
           `;
    }

    totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText = "Total a Pagar $$: " + totalCarrito;
}




//hasta aca ultimo after mas el let de carrito.json

function renderizarProductos() {
    for (const producto of productos) {
        contenedor.innerHTML += `
        <div class="card col-sm-4">
          <img src=${producto.foto} class="card-img-top" alt="...">
          <div class="card-body">
             <h5 class="card-title">${producto.id} </h5>
             <p class="card-text"> ${producto.nombre} </p>
             <p class="card-text">$ ${(producto.precio / dolarCompra).toFixed(2)} </p>
             <button id='btn${producto.id}' class="btn btn-primary">Comprar</button>
         </div>
         </div>
        `;
    }
    //eventos
    productos.forEach((producto) => {
        //evento para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener("click", function () {
            agregarAlCarrito(producto);
        })
    })
}


renderizarProductos();

function agregarAlCarrito(productoAComprar) {
    carrito.push(productoAComprar);
    console.table(carrito);
    // alert("producto " + productoAComprar.nombre+" agregado al carro correctamente!");
    //sweet aalert
    Swal.fire({
        title: productoAComprar.nombre,
        text: 'Se agregó al carrito',
        background: "#dee2e6",
        imageUrl: productoAComprar.foto,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: productoAComprar.nombre,
    })
    document.getElementById("tablabody").innerHTML += `
    <tr>
        <td> ${productoAComprar.id}</td>
        <td> ${productoAComprar.nombre}</td>
        <td> ${productoAComprar.precio}</td>
        <td><button class="btn btn-light" onclick="eliminar(event)">🗑️</button><td>
    </tr>
        `;
    let totalCarrito = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0);
    document.getElementById("total").innerText = "total a pagar $" + totalCarrito;

    //storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//para eliminar productos del carrito
function eliminar(ev) {
    console.log(ev);
    let fila = ev.target.parentElement.parentElement;
    console.log(fila);
    let id = fila.children[0].innerText;
    console.log(id);
    let indice = carrito.findIndex(producto => producto.id == id);
    console.log(indice);
    //reremueve producto del carro
    carrito.splice(indice, 1);
    console.table(carrito);
    //remueve la fila de la tabla
    fila.remove();
    //recalcular el total
    let preciosAcumulados = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    total.innerText = "Total a pagar $: " + preciosAcumulados;
    //storage
    localStorage.setItem("carrito", JSON.stringify(carrito));

}


//obtener valor dolar
function obtenerDolar() {
    const URLDOLAR = "https://api.bluelytics.com.ar/v2/latest";
    fetch(URLDOLAR)
        .then(respuesta => respuesta.json())
        .then(cotizaciones => {
            const dolarBlue = cotizaciones.blue;
            console.log(dolarBlue);
            document.getElementById("fila_prueba").innerHTML += `
        <p> Dolar compra : $ ${dolarBlue.value_buy} Dolar venta: $ ${dolarBlue.value_sell}</p>

        `;
            dolarCompra = dolarBlue.value_buy;
            obtenerJSON();
        })
}


//gestjson de productos.json
async function obtenerJSON() {
    const URLJSON="productos.json";
    const resp = await fetch(URLJSON);
    const data = await resp.json();
    productosJSON = data;
    //ya tengo el dolar y los produtos renderizados, renderizo las cartas
    renderizarProdus();
}




btnFin.onclick = () => {
    carrito = [];
    document.getElementById("tablabody").innerHTML = "";
    document.getElementById("total").innerText = "total a pagar $: ";
    Toastify({
        text: "Compra en proceso",
        duration: 3000,
        style: {
            background: 'linear-gradient(to right, #d63384, #d63384'
        },
        gravity: 'bottom',
        position: 'left'
    }).showToast();
} 
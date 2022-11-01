//after clase 9
let contenedor = document.getElementById("misprods");
const carrito = [];
function renderizarProductos() {
    for (const producto of productos) {
        contenedor.innerHTML += `
        <div class="card col-sm-4">
          <img src=${producto.foto} class="card-img-top" alt="...">
          <div class="card-body">
             <h5 class="card-title">${producto.id} </h5>
             <p class="card-text"> ${producto.nombre} </p>
             <p class="card-text">$ ${producto.precio} </p>
             <button id='btn${producto.id}' class="btn btn-primary">Comprar</button>
         </div>
         </div>
        `;
    }
//eventos
productos.forEach((producto)=>{
    //evento para cada boton
    document.getElementById( `btn${producto.id}`).addEventListener("click",function(){
        agregarAlCarrito(producto);
        })
})
}


renderizarProductos ();

function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    console.table(carrito);
    alert("producto " + productoAComprar.nombre+" agregado al carro correctamente!");
    document.getElementById("tablabody").innerHTML += `
    <tr>
        <td> ${productoAComprar.id}</td>
        <td> ${productoAComprar.nombre}</td>
        <td> ${productoAComprar.precio}</td>

    `;
    let totalCarrito = carrito.reduce((acumulador,prod) => acumulador+prod.precio,0);
   document.getElementById("total").innerText="total a pagar $"+ totalCarrito;
}
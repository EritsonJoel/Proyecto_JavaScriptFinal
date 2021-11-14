
const contadorCarrito =  document.getElementById('contador')
const preciototal = document.getElementById('preciototal')

const carrito = []  //array donde guardaran los productos que voy seleccionando
const contenedor = document.getElementById('productos')
const mod = document.getElementById('carrito')  //llamo el id del la tarjeta a mostrar




let stockProductos = []


fetch('./productos.json')
.then( res => res.json())
.then (data => {

  stockProductos = data
  

  mostrarProductos(stockProductos)
})


function mostrarProductos(array) {

  contenedor.innerHTML= ''


  array.forEach((prod)=> {
    const div = document.createElement('div')
     div.getAttribute('id', 'divv')
    div.innerHTML = `
    
    <div  class= "tarjeta" id="tarjeta">
    <img src=${prod.img}  class="imagenT" alt="..">
    <div  class= "tarjeta_productos">
    <h3 class="N">${prod.Nombre}</h3>
    <p class="P">$${prod.precio}</p> 
    <button  onclick="agregar(${prod.id})" id="agregar"  class="btn-third">AGREGAR</button>
    </div>
    
    
     </div>
    
    `
    contenedor.appendChild(div)



   



     
   
  });

}


//funcion agregar para agregar al Array carrito 
//esta  funcion es para cuand o doy click a cada boton de producto los guarde un array , en este caso CARRITO


const agregar = (Id) =>{

 const  productoEnCarrito = carrito.find((prod) => prod.id === Id)


 if(productoEnCarrito){
   productoEnCarrito.cantidad++
 }else{

  const  producto = stockProductos.find ((pro) => pro.id === Id)

  carrito.push({
    id: producto.id,
    nombre : producto.Nombre,
    precio: producto.precio,
    cantidad: 1
  })
 }



  //const p = stockProductos.find((p) =>p.id === Id)
    //carrito.push(p)
    console.log(carrito)

    productosTarjeta()
}



//RENDER CARRITO : para agregar a  la tarjeta
  const lista = document.getElementById('carrito')
 const productosTarjeta = () =>{
  mod.innerHTML=''
  carrito.forEach((o) =>{
     const  div  = document.createElement('div')
     div.classList.add('m')

    
      
     div.innerHTML = `
     <div class='itemProducto'>
     <p class="nombre">${o.nombre}</p>
     <p class="precio">Precio: ${o.precio}</p>
     <p  class = "cantidad">Cantidad: ${o.cantidad}</p>
      <button  onclick="eliminarproducto(${o.id})" class="eliminar" id="eliminar">ELIMINAR</button>
  
     </div>
     
     `
     mod.appendChild(div)
  })
    //contadorCarrito.innerText = carrito.length
  contadorCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
  preciototal.innerText = carrito.reduce((ac, product) => ac += product.precio * product.cantidad, 0)
  //el metodo reduce: lo que hara es recorrer los objetos del array carrito y obtener el precio productoe,
  //y sumarlos , ya que este metodo recibe un acumulador como parametro
 }


//ELIMINAR  PRODUCTO



const eliminarproducto = (id) =>{

  const prod =  carrito.find((prod) => prod.id ===  id) //obtengo el objeto del carrito


  prod.cantidad --

  if(prod.cantidad === 0){
    const indiceProducto = carrito.indexOf(prod)
    carrito.splice(indiceProducto, 1)
  }
  //const indiceProducto = carrito.indexOf(prod) //obtengo su indice /indexOf  : es para obtener el indice del Objeto
  //carrito.splice(indiceProducto, 1) //elimino el objeto del carrito
  
  productosTarjeta()
}


//evento click 


//FILTRO POR PRECIO


const seleccionarPrecio = document.getElementById('seleccionarprecio')

const filtrar = () =>{
  let valorFiltrarPrecio = seleccionarPrecio.value

  let  arrayF = [] 
  if(valorFiltrarPrecio == 0){
    arrayF = stockProductos
  }
  if(valorFiltrarPrecio ==1){
   arrayF = stockProductos.filter( el => el.precio <= 250)
    }else if( valorFiltrarPrecio ==2){
      arrayF = stockProductos.filter(el => el.precio >= 300)
    }

    mostrarProductos(arrayF)
}

seleccionarPrecio.addEventListener('change', ()=>{
  filtrar()
})
















  /////////////////////////777

document.getElementById('productos').addEventListener('click', (e)=>{
    e.preventDefault()
});
document.getElementById('seleccionarprecio').addEventListener('click', (e)=>{
  e.preventDefault()
});
document.getElementById('filtarP').addEventListener('click', (e)=>{
  e.preventDefault()
});



const saludo = document.getElementById('#saludo')




  
$('').css({
  'font-size': '10px',
  'opacity': 0,
  'color': 'red'
})

$('').animate({
  'font-size': '20px',
  'opacity': 1,
  'transform': 'translatex(300px)'

} , 3000)

setInterval(() =>{
  $('#va').fadeOut(500, ()=>{
  $('#va').fadeIn(500)
  })

} ,1200)



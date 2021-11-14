

const abrir = document.getElementById('logocarrito');
const cerrar  = document.getElementById('btncerrar')
const modalContainer = document.getElementsByClassName('modal-container')[0]
const modal = document.getElementsByClassName('modal')[0]


const imagen = document.getElementById('imagen')


/*abrir.addEventListener('click', () =>{

    modalContainer.classList.toggle('modal-active')
   
})
 cerrar.addEventListener('click', ()=>{
     modalContainer.classList.remove('modal-active')
 })


 modal.addEventListener('click', (e) =>{
    e.stopPropagation();  
 })*/

 const abrirc = document.getElementById('logo')

 function mostrar(){
     document.getElementById('principal').style.display ='block'
 }
 function ocultar(){
     document.getElementById('principal').style.display = 'none'
 }
 function mostrar_ocultar (){
     var cja = document.getElementById('principal')

     if(cja.style.display == 'none'){
         mostrar();
     }else{
         ocultar()
     }
 }

 abrirc.addEventListener('click', ()=>{
  
   mostrar_ocultar();

    
 })
 

 
 imagen.addEventListener('click', (e) =>{
    e.stopPropagation();  
 })





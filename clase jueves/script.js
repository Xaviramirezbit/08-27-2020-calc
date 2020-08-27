const imputname = document.getElementById('imputname')
const nombremensaje =document.getElementById('nombremensaje')
console.log(imputname)

function validarformulario(event){
    event.preventDefault()
    if(imputname.value ==""){
        swal("error!", "Hay un error, por favor llena los campos para continuar!", "error");
        imputname.classlist.add('alert')
        nombremensaje.innerText= 'Llene el campo por favor'
        imputname.placeholder = 'EJ Larry'

    }

    if (imputname.value!=""){
        swal("Muchas Gracias!", "puedes dar click en el boton para continuar!", "success");
        setTimeout(()=> {

        window.location= "./Calculadora.html"
        },6000)
  } 


}
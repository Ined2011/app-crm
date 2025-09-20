import{expresiones} from './expresiones.js' 

let inputs = document.getElementsByClassName("formulario__entrada")

let arregloInputs = [...inputs]
/*console.log(inputs)
console.log(arregloInputs)*/

arregloInputs.map((input)=> {
        input.addEventListener("keyup",(e)=>{ 
                switch(e.target.name){
                case "nombre":
                   if(expresiones.texto.test(e.target.value)){
                        e.target.style.borderColor = "green"
                        /*document.getElementById("nombre").style.color = "green"*/
                        /*document.getElementById("nombre").style.background = "green"*/
                    }else{
                        document.getElementById("nombre").style.borderColor = "red"                  }
                        document.getElementById("nombre").style.color = "red"
                        break;
                        
                case "apellido":

                    if(expresiones.texto.test(e.target.value)){
                        e.target.classList.add("correcto") 
                        e.target.classList.remove("incorrecto")       
                        
                        /*document.getElementById("apellido").style.color = "green"*/
                    } else {
                        e.target.classList.add("incorrecto")
                        e.target.classList.remove("correcto")                        

                        /*document.getElementById("apellido").style.color = "red"*/
                    }
                    break;  
                
                case "documento":
                    if(expresiones.numero.test(e.target.value)){
                       e.target.classList.add("correcto") 
                       e.target.classList.remove("incorrecto") 
                        /*document.getElementById("documento").style.color = "green"*/
                    }else{
                       e.target.classList.add("incorrecto")
                       e.target.classList.remove("correcto")    
                        /*document.getElementById("documento").style.color = "red"*/
                    }
                    break;    
                }
        
                
              })
})





        /*console.log(input)* /*funcion flecha


/*inputs.map(fuction (){})*/

/*console.log (inputs)*/



function test() {
    console.log( "Ejecutando función test()" );
    var nombre =  document.getElementById("nombretxt").value;
    var apellido= document.getElementById("nombretxt").value;
  
    
   const usuario= localStorage.getItem(nombre,apellido);
   if(usuario===null){
      console.log("No existe Usuario")
   }else{
       var nombre =  document.getElementById("nombretxt").value;
    var apellido= document.getElementById("nombretxt").value;
    document.getElementById("nombretxt").innerHTML=nombre;
console.log(nombre)
   }
    /*Mostrar datos almacenados*/      
    

}

function test2() {
    console.log( "Ejecutando función test()" );
    // var nombre =  document.getElementById("nombretxt").value;
    // var apellido= document.getElementById("nombretxt").value;
    var nombre =  document.getElementById("nombretxt").value;
 
  
    
   const usuario= localStorage.getItem(nombre);
    
  localStorage.removeItem(usuario);
    /*Mostrar datos almacenados*/      
   

}

// const usuario=localStorage.getItem(prompt("Ingrese nombre de usuario a buscar : "));
// if(usuario!=null){
//     alert("Bienvenido Usuario :"+usuario)
// }else{
//     alert("Usuario no existe")
// }

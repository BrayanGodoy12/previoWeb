var usuarios=new Array();
var contraseña=new Array();
 	function cargarContenido(pagina){
    if (pagina=='recuperar.html') {
      $("#derecha").ineertHTML="";
      $("#derecha").load(pagina);
    }else{
      $("#derecha").ineertHTML="";
      $("#derecha").load(pagina);
    }
 		
 	}
  function registro(){
    if (document.getElementById('correo').value=='' && document.getElementById('pass').value=='') {
      alert("Completar los datos")
    }else{
   usuarios.push(document.getElementById('correo').value);
   contraseña.push(document.getElementById('pass').value);
   alert("registro Completado");
   alert(document.getElementById('correo').value)
  }
}
    
  function ingresarLogin2(){
      $("#derecha").ineertHTML="";
      $("#derecha").load("Ingresar.html");
      }
  function CargarMenu(variable){
    $("#derecha").ineertHTML="";
    $("#derecha").load(variable);
  }
  function recuperarContraseña(){
    if (document.getElementById('correo').value=='') {
      alert("Digite su correo");
    }else{
alert("Se envio un correo con la recuperacion de la Contraseña");
}
  }

function nombre_usuario() {
    $(document).ready(function () {
  
      var sesion = sessionStorage.getItem("data");
      var sesionj = JSON.parse(sesion);
      console.log(sesionj.nombre);
      $('#lis2').append( "<p>"+sesionj.nombre+"</p>");
  
    });
  
  };
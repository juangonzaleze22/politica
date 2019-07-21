

var gcolegio, gmesa; ///////////variables globales


function consultar() {
  $(document).ready(function () {
    $("#consulta_boton").click(function () {
      var consulta = $('#consulta_text').val();//obtengo el valor a cnsultar
      //console.log(consulta);
      var data = {
        "consultar": consulta,
        "datos": "1"
      }

      $.post("/politica/web/php/servicio.php", data, function (data) {
        var datos = JSON.parse(data);
        // console.log(datos.colegio);
        var colegio = datos.colegio;
        var mesa = datos.mesa;
        $('#retor__cole').html('Colegio=    ' + colegio);
        $('#retor_mesa').html('mesa=    ' + mesa);
        gcolegio = datos.colegio;
        gmesa = datos.mesa;
      });



    });
  });
} consultar();

function guardar() {
  $(document).ready(function () {
    $('#iguardar').click(function (e) {
      e.preventDefault();

      var nombre = $('#inombre').val();
      var apellido = $('#iapellido').val();
      var telefono = $('#itelefono').val();
      var zona = $('#izona').val();
      var correo = $('#icorreo').val();
      var coordinador = $('#icoordinador').val();
      var carpeta = $('#icarpeta').val();
      var planilla = $('#iplanilla').val();

      //console.log(nombre);
      var data = {
        "nombre": nombre,
        "apellido": apellido,
        "telefono": telefono,
        "zona": zona,
        "correo": correo,
        "colegio": gcolegio,
        "mesa": gmesa,
        "coordinador": coordinador,
        "carpeta": carpeta,
        "planilla": planilla,
        "datos": "2"
      }
      //console.log(data);
      $.post("/politica/web/php/servicio.php", data, function (data) {
        //  console.log(data);
        var result = JSON.parse(data);
        if (result == 1) {

          $.growl({ title: "Datos Guardados", message: "ustaed a gusrdados los datos" });
        }
      });

    });
  });
} guardar();

function ver_sesion() {
  // validar si hay data en sesion stored y si no hay nada te manda a un url 
  var sesion = sessionStorage.getItem("data");
  var sesionj2 = JSON.parse(sesion);
  //  console.log(sesion + "hhhh");
  /* if (sesion == null) {
    alert('no has iniciado sesion'); */
    //$.growl({ title: "sesion", message: "Sin sesion iniciada" });
   /*  var url = "/politica/";
    $(location).attr('href', url); */
/*   } else { *//* $.growl({ title: "Bienvenido", message: "Sr(a).. " + sesionj2.nombre + "  al sitema de Marta Garcia" }); *//* } */
}


function crearcoor() {
  $(document).ready(function () {
    $('#cguardar').click(function (e) {
      e.preventDefault();

      var nombre = $('#cnombre').val();
      var apellido = $('#capellido').val();
      var telefono = $('#ctelefono').val();
      var zona = $('#czona').val();
      var correo = $('#ccorreo').val();
      //console.log(nombre);
      var data = {
        "nombre": nombre,
        "apellido": apellido,
        "telefono": telefono,
        "zona": zona,
        "correo": correo,
        "datos": "4"
      }
      //console.log(data);
      $.post("/politica/web/php/servicio.php", data, function (data) {
        // console.log(data);
        var result = JSON.parse(data);
        if (result == 1) {

          $.growl({ title: "Datos Guardados", message: "ustaed a gusrdados los datos" });
        }
      });

    });
  });
} crearcoor();

function mostrar_coor(params) {
  $(document).ready(function () {
    var data = { "datos": "6" }
    $.post("/politica/web/php/servicio.php", data,
      function (data) {
        var t = JSON.parse(data);
        for (let i = 0; i < t.length; i++) {
          var nombre = t[i].nombre;

          $('#icoordinador').append("<option>" + nombre + "</option>"); //aqui se crea la tabla
        }

      },
    );
  });
} mostrar_coor();

function crearusuario() {
  $(document).ready(function () {
    $('#rguardar').click(function (e) {
      e.preventDefault();
      var usuario = $('#rusuario').val();
      var nombre = $('#rnombre').val();
      var apellido = $('#rapellido').val();
      var contraseña = $('#rcontraseña').val();
      //console.log(nombre);
      var data = {
        "nombre": nombre,
        "apellido": apellido,
        "usuario": usuario,
        "contraseña": contraseña,
        "datos": "5"
      }
      // console.log(data);
      $.post("/politica/web/php/servicio.php", data, function (data) {
        // console.log(data);
        var result = JSON.parse(data);
        if (result == 1) {
          $.growl({ title: "Usuario Creado", message: "ustaed a creado el usuario perfectamente" });

        }
      });

    });
  });
} crearusuario();

function nombre_usuario() {
  $(document).ready(function () {

    var sesion = sessionStorage.getItem("data");
    var sesionj = JSON.parse(sesion);
   // console.log(sesionj.nombre);
    $('#lis2').append("<p>" + sesionj.nombre + "</p>");

  });

};
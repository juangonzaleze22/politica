function mostrar_coorp() {
    $(document).ready(function () {
        var data = { "datos": "6" }
        $.post("/politica/web/php/servicio.php", data,
            function (data) {
                var t = JSON.parse(data);
                for (let i = 0; i < t.length; i++) {
                    var nombre = t[i].nombre;
                    $('#pcoordinadores').append("<option>" + nombre + "</option>"); //aqui se crea la tabla
                }

            },
        );
    });
} mostrar_coorp();

function mostrar_planilla() {
    $(document).ready(function () {
        $('#buscarp').click(function (e) {
            e.preventDefault();
            var bus_coor = $('#pcoordinadores').val();
            var bus_carpeta = $('#bus_carpeta').val();
            var bus_planilla = $('#bus_planilla').val();
            var data = {
                "coordinador": bus_coor,
                "carpeta": bus_carpeta,
                "planilla": bus_planilla,
                "datos": "7"
            }
            console.log(data);

            $.post("/politica/web/php/servicio.php", data,
                function (data) {
                    var t = JSON.parse(data);

                    for (let i = 0; i < 20; i++) {
                        var nombre = t[i].nombre;
                        var telefono = t[i].telefono;
                        var correo = t[i].correo;
                        var colegio = t[i].colegio;
                        var mesa = t[i].mesa;
                        var coordinador = t[i].coordinador;
                        var zona = t[i].zona;
                        var correo = t[i].correo;
                        $('table').append("<tr><td>" + nombre + "</td><td>" + telefono + "</td><td>" + correo + "</td><td>" + colegio + "</td><td>" + mesa + "</td><td>" + coordinador + "</td><td>" + zona + "</td></tr>"); //aqui se crea la tabla
                    }

                },
            );

        });
    });
} mostrar_planilla();

function nombre_usuario() {
    $(document).ready(function () {
  
      var sesion = sessionStorage.getItem("data");
      var sesionj = JSON.parse(sesion);
      console.log(sesionj.nombre);
      $('#lis2').append( "<p>"+sesionj.nombre+"</p>");
  
    });
  
  };

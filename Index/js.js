function sesion() {
    $(document).ready(function () {
        $('#botonsesion').click(function (e) {
            e.preventDefault();
            var datosesion = $("#sesion").serializeArray();

            var usuario = datosesion['0'].value;
            var pass = datosesion['1'].value;
            var data = {
                "usuario": usuario,
                "pass": pass,
                "datos": '3'
            }

            $.post("../politica/web/php/servicio.php", data,
                function (data) {
                    //sessionStorage.setItem("data", data); //guardo la data  de my sql en sesion stored

                    if (data != '') { // si inicia sesion  te manda par aotra url
                        sessionStorage.setItem("data", data); //guardo la data  de my sql en sesion stored
                        $.growl({ title: "Bienvenido al sitema de Marta Garcia" });
                        var url = "../politica/form/form.html";
                        setTimeout(() => {
                            $(location).attr('href', url);
                        }, 2000);
                    } else {
                        $.growl.error({ mensaje: "Bienvenido al sitema de Marta Garcia" });  // alert('Usuario no existe o contraseña incorrecta');
                    }

                },

            );
        });
    });
}/*  sesion();
 */
$(document).ready(function () {
 
    $(".verDetalles").click(function () {
        var id = $(this).data("id");
      
        $.get({
            url: "/admin/getDetallesBitacora",
            data: {
                id: id,
            },
            success: function (res) {
               
                var fecha_actual = new Date();
                var fecha_salida = new Date(res[0].fecha_salida);

                $("#ip").text(res[0].direccion_ip);
                $("#fe").text(
                    moment(res[0].fecha_entrada).format("LL hh:mm A")
                );

                if (fecha_actual >= fecha_salida) {
                    $("#fs").text(
                        moment(res[0].fecha_salida).format("LL hh:mm A")
                    );
                } else {
                    $("#fs").html(
                        `<span class="badge bg-success">Sesión aún activa</span>`
                    );
                }

                $("#td").text(res[0].dispositivo);
                $("#so").text(res[0].sistema_operativo);
                $("#br").text(res[0].navegador);

                $("#collapseBtn").html(
                    `Desplegar información del usuario &nbsp;<b>${res[0].user_nombre}</b>`
                );
                $("#no").text(res[0].user_nombre);
                $("#ce").text(res[0].user_correo);

                $("#imgPerfil").attr(
                    "src",
                    `../img/usuarios/${res[0].user_fotoperfil}`
                );
            },
        });
    });

   
});

$(document).ready(function () {
    
    function estatusClaveIncorrecta(input) {
        let estatus = $(input).data("boton13");
        if (estatus == "activado") {
            $(input).val("activado");
        } else {
            $(input).val("desactivado");
        }
    }

    $(document).on("click", "#boton1", function (e) {
        e.preventDefault();

        if ($("#boton1").hasClass("btn-success")) {
            $("#boton1").removeClass("btn-success");
            $("#boton1").addClass("btn-danger");
        } else {
            $("#boton1").removeClass("btn-danger");
            $("#boton1").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton1",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });

    $(document).on("click", "#boton2", function (e) {
        e.preventDefault();

        if ($("#boton2").hasClass("btn-success")) {
            $("#boton2").removeClass("btn-success");
            $("#boton2").addClass("btn-danger");
        } else {
            $("#boton2").removeClass("btn-danger");
            $("#boton2").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton2",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });

    $(document).on("click", "#boton3", function (e) {
        e.preventDefault();

        if ($("#boton3").hasClass("btn-success")) {
            $("#boton3").removeClass("btn-success");
            $("#boton3").addClass("btn-danger");
        } else {
            $("#boton3").removeClass("btn-danger");
            $("#boton3").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton3",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });

    $(document).on("click", "#boton4", function (e) {
        e.preventDefault();

        if ($("#boton4").hasClass("btn-success")) {
            $("#boton4").removeClass("btn-success");
            $("#boton4").addClass("btn-danger");
        } else {
            $("#boton4").removeClass("btn-danger");
            $("#boton4").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton4",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });

    $(document).on("click", "#boton5", function (e) {
        e.preventDefault();

        if ($("#boton5").hasClass("btn-success")) {
            $("#boton5").removeClass("btn-success");
            $("#boton5").addClass("btn-danger");
        } else {
            $("#boton5").removeClass("btn-danger");
            $("#boton5").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton5",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });

    $(document).on("click", "#boton6", function (e) {
        e.preventDefault();

        if ($("#boton6").hasClass("btn-success")) {
            $("#boton6").removeClass("btn-success");
            $("#boton6").addClass("btn-danger");
        } else {
            $("#boton6").removeClass("btn-danger");
            $("#boton6").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton6",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });

    $(document).on("click", "#boton7", function (e) {
        e.preventDefault();

        if ($("#boton7").hasClass("btn-success")) {
            $("#boton7").removeClass("btn-success");
            $("#boton7").addClass("btn-danger");
        } else {
            $("#boton7").removeClass("btn-danger");
            $("#boton7").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton7",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });

    $(document).on("click", "#boton8", function (e) {
        e.preventDefault();

        if ($("#boton8").hasClass("btn-success")) {
            $("#boton8").removeClass("btn-success");
            $("#boton8").addClass("btn-danger");
        } else {
            $("#boton8").removeClass("btn-danger");
            $("#boton8").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton8",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });

    $(document).on("click", "#boton9", function (e) {
        e.preventDefault();

        if ($("#boton9").hasClass("btn-success")) {
            $("#boton9").removeClass("btn-success");
            $("#boton9").addClass("btn-danger");
        } else {
            $("#boton9").removeClass("btn-danger");
            $("#boton9").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton9",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });

    $(document).on("click", "#boton10", function (e) {
        e.preventDefault();

        if ($("#boton10").hasClass("btn-success")) {
            $("#boton10").removeClass("btn-success");
            $("#boton10").addClass("btn-danger");
        } else {
            $("#boton10").removeClass("btn-danger");
            $("#boton10").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton10",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });

    $(document).on("click", "#boton11", function (e) {
        e.preventDefault();

        if ($("#boton11").hasClass("btn-success")) {
            $("#boton11").removeClass("btn-success");
            $("#boton11").addClass("btn-danger");
        } else {
            $("#boton11").removeClass("btn-danger");
            $("#boton11").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton11",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });

    $(document).on("click", "#boton12", function (e) {
        e.preventDefault();

        if ($("#boton12").hasClass("btn-success")) {
            $("#boton12").removeClass("btn-success");
            $("#boton12").addClass("btn-danger");
        } else {
            $("#boton12").removeClass("btn-danger");
            $("#boton12").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton12",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });

    $(document).on("click", "#botonprueba", function (e) {
        e.preventDefault();

        let input = this;
        let id = $(this).data("id");

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });
        Swal.fire({
            title: '<h1 style="font-family: Poppins; font-weight: 700;">Editar estatus</h1>',
            html: '<p style="font-family: Poppins">Necesitas una clave para editar el estatus</p>',
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: '<a style="font-family: Poppins">Cancelar</a>',
            cancelButtonColor: "#01bbcc",
            confirmButtonText: '<a style="font-family: Poppins">Editar</a>',
            confirmButtonColor: "#198754",
            input: "password",
            showLoaderOnConfirm: true,
            preConfirm: (clave) => {
                $.ajax({
                    type: "GET",
                    url: "/admin/showClaveBoton",
                    data: {
                        clave: clave,
                        id: id,
                        campo: "modificable",
                    },
                    success: function (result) {
                        if (result == "success") {
                            $.get(
                                "/admin/boton13",
                                {
                                    id: id,
                                    campo: "modificable",
                                },
                                function (response) {
                                    Toast.fire({
                                        icon: "success",
                                        title: "Estatus actualizado",
                                    });

                                    if ($("#boton13").hasClass("btn-success")) {
                                        $("#boton13").removeClass(
                                            "btn-success"
                                        );
                                        $("#boton13").addClass("btn-danger");
                                    } else {
                                        $("#boton13").removeClass("btn-danger");
                                        $("#boton13").addClass("btn-success");
                                    }
                                }
                            );
                        } else {
                            estatusClaveIncorrecta(input);
                            Toast.fire({
                                icon: "error",
                                title: "Clave incorrecta",
                            });
                        }
                    },
                    error: function () {
                        estatusClaveIncorrecta(input);
                        Toast.fire({
                            icon: "error",
                            title: "Clave incorrecta",
                        });
                    },
                });
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (!result.isConfirmed) {
                estatusClaveIncorrecta();
                Swal.fire({
                    icon: "error",
                    title: '<h1 style="font-family: Poppins; font-weight: 700;">Cancelado</h1>',
                    html: '<p style="font-family: Poppins">El estatus no se ha actualizado</p>',
                    confirmButtonText:
                        '<a style="font-family: Poppins">Aceptar</a>',
                    confirmButtonColor: "#01bbcc",
                });
            }
        });
    });

    $(document).on("click", "#botonUSDH", function (e) {
        e.preventDefault();

        let input = this;
        let id = $(this).data("id");

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });
        Swal.fire({
            title: '<h1 style="font-family: Poppins; font-weight: 700;">Editar estatus</h1>',
            html: '<p style="font-family: Poppins">Necesitas una clave para editar el estatus</p>',
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: '<a style="font-family: Poppins">Cancelar</a>',
            cancelButtonColor: "#01bbcc",
            confirmButtonText: '<a style="font-family: Poppins">Editar</a>',
            confirmButtonColor: "#198754",
            input: "password",
            showLoaderOnConfirm: true,
            preConfirm: (clave) => {
                $.ajax({
                    type: "GET",
                    url: "/admin/showClaveBoton",
                    data: {
                        clave: clave,
                        id: id,
                        campo: "modificable",
                    },
                    success: function (result) {
                        if (result == "success") {
                            $.get(
                                "/admin/boton13",
                                {
                                    id: id,
                                    campo: "modificable",
                                },
                                function (response) {
                                    Toast.fire({
                                        icon: "success",
                                        title: "Estatus actualizado",
                                    });

                                    if ($("#boton13").hasClass("btn-success")) {
                                        $("#boton13").removeClass(
                                            "btn-success"
                                        );
                                        $("#boton13").addClass("btn-danger");
                                    } else {
                                        $("#boton13").removeClass("btn-danger");
                                        $("#boton13").addClass("btn-success");
                                    }
                                }
                            );
                        } else {
                            estatusClaveIncorrecta(input);
                            Toast.fire({
                                icon: "error",
                                title: "Clave incorrecta",
                            });
                        }
                    },
                    error: function () {
                        estatusClaveIncorrecta(input);
                        Toast.fire({
                            icon: "error",
                            title: "Clave incorrecta",
                        });
                    },
                });
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (!result.isConfirmed) {
                estatusClaveIncorrecta();
                Swal.fire({
                    icon: "error",
                    title: '<h1 style="font-family: Poppins; font-weight: 700;">Cancelado</h1>',
                    html: '<p style="font-family: Poppins">El estatus no se ha actualizado</p>',
                    confirmButtonText:
                        '<a style="font-family: Poppins">Aceptar</a>',
                    confirmButtonColor: "#01bbcc",
                });
            }
        });
    });

    $(document).on("click", "#boton14", function (e) {
        e.preventDefault();

        if ($("#boton14").hasClass("btn-success")) {
            $("#boton14").removeClass("btn-success");
            $("#boton14").addClass("btn-danger");
        } else {
            $("#boton14").removeClass("btn-danger");
            $("#boton14").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton14",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });

    $(document).on("click", "#boton15", function (e) {
        e.preventDefault();

        if ($("#boton15").hasClass("btn-success")) {
            $("#boton15").removeClass("btn-success");
            $("#boton15").addClass("btn-danger");
        } else {
            $("#boton15").removeClass("btn-danger");
            $("#boton15").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton15",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });

    $(document).on("click", "#boton16", function (e) {
        e.preventDefault();

        if ($("#boton16").hasClass("btn-success")) {
            $("#boton16").removeClass("btn-success");
            $("#boton16").addClass("btn-danger");
        } else {
            $("#boton16").removeClass("btn-danger");
            $("#boton16").addClass("btn-success");
        }

        $.ajax({
            type: "GET",
            url: "/admin/boton16",
            success: function (data) {
                console.log(data);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });
});

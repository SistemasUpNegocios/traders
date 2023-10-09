$(document).ready(function () {
    let hoy_temprano = moment().format("YYYY-MM-DD");
    let hoy = moment().format("YYYY-MM-DD");
    $("#fechaInicioInput").val(`${hoy_temprano} 00:00:00`);
    $("#fechaFinInput").val(`${hoy} 23:59:59`);
    let url = "/admin/showliveData";

    const tablaResumen = (url) => {
        let fecha_inicio = $("#fechaInicioInput").val();
        let fecha_fin = $("#fechaFinInput").val();
        let cuenta = $("#cuentaInput").val();

        table = $("#live-data").DataTable({
            ajax: `${url}?fecha_inicio=${fecha_inicio}&fecha_fin=${fecha_fin}`,
            data: {
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
            },
            columns: [
                { data: "pair" },
                { data: "spectrum" },
                { data: "conditionbuy" },
                { data: "strategybuy" },
                { data: "actionbuy" },
                { data: "operationsbuy" },
                { data: "checksitebuy" },
                { data: "slbuy" },
                { data: "tpbuy" },
                { data: "slbuyprice" },
                { data: "tpbuyprice" },
                { data: "conditionsell" },
                { data: "strategysell" },
                { data: "actionsell" },
                { data: "operationssell" },
                { data: "checksitesell" },
                { data: "slsell" },
                { data: "tpsell" },
                { data: "slsellprice" },
                { data: "tpsellprice" },
            ],
            language: {
                processing: "Procesando...",
                lengthMenu: "Mostrar _MENU_ cambios",
                zeroRecords: "No se encontraron resultados",
                emptyTable: "No se ha registrado ningún cambio",
                infoEmpty:
                    "Mostrando cambios del 0 al 0 de un total de 0 cambios",
                infoFiltered: "(filtrado de un total de _MAX_ cambios)",
                search: "Buscar:",
                infoThousands: ",",
                loadingRecords: "Cargando...",
                paginate: {
                    first: "Primero",
                    last: "Último",
                    next: ">",
                    previous: "<",
                },

                aria: {
                    sortAscending:
                        ": Activar para ordenar la columna de manera ascendente",
                    sortDescending:
                        ": Activar para ordenar la columna de manera descendente",
                },
                buttons: {
                    copy: "Copiar",
                    colvis: "Visibilidad",
                    collection: "Colección",
                    colvisRestore: "Restaurar visibilidad",
                    copyKeys:
                        "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br /> <br /> Para cancelar, haga clic en este mensaje o presione escape.",
                    copySuccess: {
                        1: "Copiada 1 fila al portapapeles",
                        _: "Copiadas %d fila al portapapeles",
                    },
                    copyTitle: "Copiar al portapapeles",
                    csv: "CSV",
                    excel: "Excel",
                    pageLength: {
                        "-1": "Mostrar todas las filas",
                        1: "Mostrar 1 fila",
                        _: "Mostrar %d filas",
                    },
                    pdf: "PDF",
                    print: "Imprimir",
                },
                autoFill: {
                    cancel: "Cancelar",
                    fill: "Rellene todas las celdas con <i>%d</i>",
                    fillHorizontal: "Rellenar celdas horizontalmente",
                    fillVertical: "Rellenar celdas verticalmentemente",
                },
                decimal: ",",
                searchBuilder: {
                    add: "Añadir condición",
                    button: {
                        0: "Constructor de búsqueda",
                        _: "Constructor de búsqueda (%d)",
                    },
                    clearAll: "Borrar todo",
                    condition: "Condición",
                    conditions: {
                        date: {
                            after: "Despues",
                            before: "Antes",
                            between: "Entre",
                            empty: "Vacío",
                            equals: "Igual a",
                            notBetween: "No entre",
                            notEmpty: "No Vacio",
                            not: "Diferente de",
                        },
                        number: {
                            between: "Entre",
                            empty: "Vacio",
                            equals: "Igual a",
                            gt: "Mayor a",
                            gte: "Mayor o igual a",
                            lt: "Menor que",
                            lte: "Menor o igual que",
                            notBetween: "No entre",
                            notEmpty: "No vacío",
                            not: "Diferente de",
                        },
                        string: {
                            contains: "Contiene",
                            empty: "Vacío",
                            endsWith: "Termina en",
                            equals: "Igual a",
                            notEmpty: "No Vacio",
                            startsWith: "Empieza con",
                            not: "Diferente de",
                        },
                        array: {
                            not: "Diferente de",
                            equals: "Igual",
                            empty: "Vacío",
                            contains: "Contiene",
                            notEmpty: "No Vacío",
                            without: "Sin",
                        },
                    },
                    data: "Data",
                    deleteTitle: "Eliminar regla de filtrado",
                    leftTitle: "Criterios anulados",
                    logicAnd: "Y",
                    logicOr: "O",
                    rightTitle: "Criterios de sangría",
                    title: {
                        0: "Constructor de búsqueda",
                        _: "Constructor de búsqueda (%d)",
                    },
                    value: "Valor",
                },
                searchPanes: {
                    clearMessage: "Borrar todo",
                    collapse: {
                        0: "Paneles de búsqueda",
                        _: "Paneles de búsqueda (%d)",
                    },
                    count: "{total}",
                    countFiltered: "{shown} ({total})",
                    emptyPanes: "Sin paneles de búsqueda",
                    loadMessage: "Cargando paneles de búsqueda",
                    title: "Filtros Activos - %d",
                },
                select: {
                    1: "%d fila seleccionada",
                    _: "%d filas seleccionadas",
                    cells: {
                        1: "1 celda seleccionada",
                        _: "$d celdas seleccionadas",
                    },
                    columns: {
                        1: "1 columna seleccionada",
                        _: "%d columnas seleccionadas",
                    },
                },
                thousands: ".",
                datetime: {
                    previous: "Anterior",
                    next: "Proximo",
                    hours: "Horas",
                    minutes: "Minutos",
                    seconds: "Segundos",
                    unknown: "-",
                    amPm: ["am", "pm"],
                },
                editor: {
                    close: "Cerrar",
                    create: {
                        button: "Nuevo",
                        title: "Crear Nuevo Registro",
                        submit: "Crear",
                    },
                    edit: {
                        button: "Editar",
                        title: "Editar Registro",
                        submit: "Actualizar",
                    },
                    remove: {
                        button: "Eliminar",
                        title: "Eliminar Registro",
                        submit: "Eliminar",
                        confirm: {
                            _: "¿Está seguro que desea eliminar %d filas?",
                            1: "¿Está seguro que desea eliminar 1 fila?",
                        },
                    },
                    error: {
                        system: 'Ha ocurrido un error en el sistema (<a target="\\" rel="\\ nofollow" href="\\">Más información&lt;\\/a&gt;).</a>',
                    },
                    multi: {
                        title: "Múltiples Valores",
                        info: "Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, hacer click o tap aquí, de lo contrario conservarán sus valores individuales.",
                        restore: "Deshacer Cambios",
                        noMulti:
                            "Este registro puede ser editado individualmente, pero no como parte de un grupo.",
                    },
                },
                info: "Mostrando de _START_ a _END_ de _TOTAL_ cambios",
            },
            lengthMenu: [
                [28, 30, -1],
                [28, 30, "Todo"],
            ],
            pageLength: 28,
            aaSorting: [],
        });
    };

    tablaResumen(url);

    setInterval(function () {
      
    }, 60000);

    // $.ajax({
    //     type: "GET",
    //     url: "/admin/getVidaData",
    //     success: function (response) {
    //         $("#live-data").empty();
    //         $("#live-data").html(response);
    //     },
    //     error: function (response) {
    //         console.log(response);
    //     },
    // });

    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "/admin/getVidaData",
            success: function (response) {
                $("#prueba").empty();
                $("#prueba").html(response);
                
            },
            error: function (response) {
                console.log(response);
            },
        });
    }, 1000);

    // $(document).on("change", "#fechaInicioInput, #fechaFinInput",  function (e) {
    //     e.preventDefault();
    //     let url = "/admin/showLiveDataFiltro";
    //     table.destroy();
    //     tablaResumen(url);
    // });
});

var table;
var url = window.location + "";
var separador = url.split("/");
var traderID = separador[separador.length - 1];
var numero = 0;


const tableStatus = () => {
    if (numero == 403) {
        url = `/admin/showStatusmagic403?id=${traderID}&numero=${numero}`;
    } else if(numero == 404) {
        url = `/admin/showStatusmagic404?id=${traderID}&numero=${numero}`;
    } else if(numero == 405) {
        url = `/admin/showStatusmagic405?id=${traderID}&numero=${numero}`;
    }else{
        url=`/admin/showStatusmagic?id=${traderID}&numero=${numero}`;
    }
    $.get({
        url: url,
        success: function (response) {
            $("#contTabla").empty();
            $("#contTabla").html(response);
            if(numero == 0){
                $("#seriemagic_number").html('Todas las series');
            }else{
                $("#seriemagic_number").html(numero);
            } 
            
            table = $("#status").DataTable({
                language: {
                    processing: "Procesando...",
                    lengthMenu: "Mostrar _MENU_ monedas",
                    zeroRecords: "No se encontraron resultados",
                    emptyTable: "No se ha registrado ninguna moneda",
                    infoEmpty:
                        "Mostrando monedas del 0 al 0 de un total de 0 monedas",
                    infoFiltered: "(filtrado de un total de _MAX_ monedas)",
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
                    info: "Mostrando de _START_ a _END_ de _TOTAL_ monedas",
                },
                lengthMenu: [
                    [50, 100, 150, -1],
                    [50, 100, 150, "Todo"],
                ],
                pageLength: 50,
                aaSorting: [],
            });
        },
        error: function (error) {
            console.log(error);
        },
    });

};

$(document).on("click", "#obtener403", () => {
    table.destroy();
    numero=403;
    console.log('403')
    tableStatus();
});

$(document).on("click", "#obtener404", () => {
    table.destroy();
    numero=404;
    console.log('404')
    tableStatus();
});

$(document).on("click", "#obtener405", () => {
    table.destroy();
    numero=405;
    console.log('405')
    tableStatus();
});

$(document).on("click", "#obtenerTodos", () => {
    table.destroy();
    numero=0;
    console.log('403,4,5')
    tableStatus();
});

$(document).on("click", "#imprimirAnalisis", function () {

    if(numero==0){
    window.open(
        `/admin/magicnumber-analysis?id=${traderID}&numero=${numero}`,
        "_blank"
    );
    }
    else if(numero==403){
        window.open(
        `/admin/magicnumber403-analysis?id=${traderID}&numero=${numero}`,
        "_blank"
        );
    }
    else if(numero==404){
        window.open(
        `/admin/magicnumber404-analysis?id=${traderID}&numero=${numero}`,
        "_blank"
        );
    }
    else if(numero==405){
        window.open(
        `/admin/magicnumber405-analysis?id=${traderID}&numero=${numero}`,
        "_blank"
        );
    }
});

tableStatus();

setInterval(function () {
    table.destroy();
    tableStatus();
}, 300000);

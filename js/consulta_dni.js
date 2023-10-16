$(document).ready(function () {
    // Función para realizar la búsqueda
    function realizarBusqueda() {
        var dni = $("#dni").val();
        $.ajax({
            type: "POST",
            url: "consulta_dni.php",
            data: 'dni=' + dni,
            dataType: 'json',
            success: function (data) {
                if (data == 1) {
                    alert('El DNI tiene que tener 8 dígitos');
                } else {
                    mostrarPopup(data);
                }
            }
        });
    }

    // Mostrar el popup
    function mostrarPopup(data) {
        $("#popup-nombre").text(data.nombre);
        $("#popup-tipoDocumento").text(data.tipoDocumento);
        $("#popup-numeroDocumento").text(data.numeroDocumento);
        $("#popup").show();
    }

    // Ocultar el popup
    function ocultarPopup() {
        $("#popup").hide();
    }

    // Evento para realizar otra consulta
    $("#realizar-otra-consulta").click(function () {
        ocultarPopup();
    });

    // Evento para cerrar el popup
    $("#close").click(function () {
        ocultarPopup();
    });

    // Manejar el envío del formulario
    $("#dni-form").submit(function (event) {
        event.preventDefault();
        realizarBusqueda();
    });

    // Manejar el clic en el botón
    $("#prueba").click(function () {
        realizarBusqueda();
    });

    // Manejar la pulsación de "Enter" en el campo de entrada
    $("#dni").on("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            realizarBusqueda();
        }
    });
});
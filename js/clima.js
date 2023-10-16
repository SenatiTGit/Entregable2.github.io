$(document).ready(function () {
    // Función para obtener la ubicación actual del usuario
    function obtenerUbicacion() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitud = position.coords.latitude;
                var longitud = position.coords.longitude;
                obtenerClima(latitud, longitud);
            });
        } else {
            console.error('La geolocalización no está disponible en este navegador.');
        }
    }

    // Función para realizar la búsqueda del clima
    function obtenerClima(latitud, longitud) {
        var apiKey = '4351d30959d34217aeebe7454183768d';

        $.ajax({
            type: 'GET',
            url: `https://api.weatherbit.io/v2.0/current?lat=${latitud}&lon=${longitud}&key=${apiKey}`,
            dataType: 'json',
            success: function (data) {
                $('#clima-temperatura').text(data.data[0].temp + ' °C');
                $('#clima-descripcion').text(data.data[0].weather.description);
                $('#clima-latitud').text(data.data[0].lat);
                $('#clima-longitud').text(data.data[0].lon);
                $('#clima-timezone').text(data.data[0].timezone);
                $('#clima-country-code').text(data.data[0].country_code);
                $('#clima-city-name').text(data.data[0].city_name);

                var weatherCode = data.data[0].weather.code;
                var iconElement = $('#clima-icono');
                if (weatherCode === 800) {
                    iconElement.addClass('wi-day-sunny'); // Icono para cielo despejado
                } else if (weatherCode === 801) {
                    iconElement.addClass('wi-day-cloudy'); // Icono para nubes dispersas
                } else if (weatherCode === 803) {
                    iconElement.addClass('wi-cloud'); // Icono para nubes rotas
                } else {
                    iconElement.addClass('wi-na'); // Icono predeterminado en caso de que no haya coincidencia.
                }
            }
        });
    }

    obtenerUbicacion();
});

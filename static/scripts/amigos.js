// código jQuery que se ejecuta al cargar la página
$(function () {

    // evento para cuando cambia el valor introducido en un <input id="buscar" $gt;
      $('#buscaamigos').change(function(){
        let value = $(this).val()
        
        $.ajax({
            url: 'http://localhost:5000/amigos?nombreCap=' + value,
            type: 'GET',
            dataType: 'json',
            success: function (json) {
                let htmlString = `
                <tr>
                    <th scope="col">Temporada</th>
                    <th scope="col">Episodio</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Borrar</th>
                </tr>`
                $.each(json, function (i, v) {
                htmlString += `<tr>
                <td>${v.season}</td>
                <td>${v.number}</td>
                <td>${v.name}</td>
                <td>${v.airdate}</td>
                <td><button onclick="Pulso('${v.id}')">Borrar</button></td> </tr>` 
                });
                $('#tablaamigos').html(htmlString);

            },
            error : function () {
                let htmlString = '<h2>No se ha encontrado ningún episodio</h2>'
                $('#texto').html(htmlString);
                alert("No se ha encontrado nada");

            }
        })
    });
});
    
// Click en el botón
function Pulso(value) {
    urlborrar = 'http://localhost:5000/amigos/' + value;
    // Para poner otra vez funciones jQuery en el DOM actual
    $(function () {
    $.ajax({
        url: urlborrar,
        type: 'DELETE',
        dataType: 'json',
        success: function (json) {
            let htmlString = '<h2>Se ha borrado con éxito</h2>'
            $('#texto').html(htmlString);

        },
        error: function () {
            let htmlString = '<h2>No se ha borrado con éxito</h2>'
            $('#texto').html(htmlString);
            alert("No se ha podido borrar");


        }
    })
    });

}

function ModoNoche() {
    $(function () {
        var element = document.body;
        element.classList.toggle("modo-nocturno");
        document.getElementById("tablaamigos").classList.toggle("modo-nocturno");
        var element2 = document.getElementById("botonNoche");
        element2.classList.toggle("btn-dark");
        element2.classList.toggle("btn-light");
    });
}
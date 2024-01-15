function moverAleatorio(id) {
    var array = document.querySelectorAll(id);
    for (i = 0; i < array.length; i++) {
        var elem = array[i];
        elem.style.top = `${Math.random() * 600}px`;
        elem.style.left = `${Math.random() * 600}px`;
    }
}
function anadirDiv() {
    var id = + document.querySelectorAll('div').length;
    console.log(id);
    document.querySelector('main').innerHTML +=
        "<div id='div" + id + "' >"+id+"</div>";
    anadirFuncionalidad();
    moverAleatorio('#div' + id);
}
function anadirFuncionalidad() {
    var arr = document.querySelectorAll('div');
    for (i = 0; i < arr.length; i++) {
        var elem = arr[i];
        elem.addEventListener("mouseover", function (e) {
            idd = e.target.getAttribute("id");
            console.log("mover " + idd)
            anadirDiv()
            moverAleatorio("#" + idd);
        });
    }
}
for (i = 0; i < 2; i++) {
    anadirDiv();
}


moverAleatorio('div')



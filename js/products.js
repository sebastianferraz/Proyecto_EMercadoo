//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    cargarProductos(PRODUCTS_URL)
});

function cargarProductos(url) {

    document.getElementById("productos").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {
            datos.forEach(element => {
                let row = "";
                row = `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + element.imgSrc + `" alt="` + element.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ element.name + `</h4>
                            <small class="text-muted">` + element.soldCount + ` artículos</small> `
                    + element.cost + ` ` + element.currency + `c/u </small>
                        </div>
                        <p class="mb-1">` + element.description + `</p>
                    </div>
                </div>
            </a>
            `
                document.getElementById("productos").innerHTML += row;
            });
        })
        .catch(error => alert("Error: " + error));
}
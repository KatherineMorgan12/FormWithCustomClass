var Movie = (function () {
    function Movie() {
    }
    return Movie;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addMovie;
};
function addProduct() {
    if (isAllDataValid()) {
        var movie = getProduct();
        displayProduct(movie);
    }
}
function getProduct() {
    var movie1 = new Movie();
    movie1.title = document.getElementById("title").value;
    movie1.price = parseFloat(document.getElementById("price").value);
    movie1.rating = document.getElementById("rating").value;
    movie1.isDigital = document.getElementById("digital").checked;
    return movie1;
}
function displayProduct(product) {
}
function isAllDataValid() {
    return true;
}

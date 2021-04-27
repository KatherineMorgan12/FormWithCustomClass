var Movie = (function () {
    function Movie() {
    }
    return Movie;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addProduct;
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
    var displayDiv = document.getElementById("display");
    var productHeading = document.createElement("h2");
    productHeading.innerText = product.title;
    var productInfo = document.createElement("p");
    var formatInfo = "";
    if (product.isDigital) {
        formatInfo = " and it is digital.";
    }
    else {
        formatInfo = " and it is not digital.";
    }
    productInfo.innerText = product.title + " has a rating of " + product.rating + ", it costs $" + product.price.toFixed(2) + "," + formatInfo + ".";
    displayDiv.appendChild(productHeading);
    displayDiv.appendChild(productInfo);
}
function isAllDataValid() {
    return true;
}

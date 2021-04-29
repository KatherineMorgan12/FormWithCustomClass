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
        clearForm();
    }
}
function clearForm() {
}
function getProduct() {
    var movie1 = new Movie();
    movie1.title = document.getElementById("title").value;
    movie1.price = parseFloat(document.getElementById("price").value);
    movie1.rating = document.getElementById("rating").value;
    movie1.isDigital = document.getElementById("digital").checked;
    movie1.releaseDate = document.getElementById("releaseDate").value;
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
    productInfo.innerText = product.title + ", which was released " + product.releaseDate + " has a rating of " + product.rating + ", it costs $" + product.price.toFixed(2) + "," + formatInfo + ".";
    displayDiv.appendChild(productHeading);
    displayDiv.appendChild(productInfo);
}
function isAllDataValid() {
    var title = document.getElementById("title").value;
    var price = parseFloat(document.getElementById("price").value);
    var rating = document.getElementById("rating").value;
    var releaseDate = document.getElementById("releaseDate").value;
    var displayError = document.getElementById("validation-summary");
    if (title.trim() == "") {
        displayError.innerText = "Please enter a name of a movie.";
        return false;
    }
    if ((isNaN(price)) || (price < 0)) {
        displayError.innerText = "Please enter a positive price.";
        return false;
    }
    if (rating == "Select") {
        displayError.innerText = "Please select an actual rating from the drop down menu.";
        return false;
    }
    if (releaseDate == "") {
        displayError.innerText = "Please choose a date on the calendar.";
        return false;
    }
    return true;
}

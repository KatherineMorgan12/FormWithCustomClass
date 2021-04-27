class Movie{
    title:string;
    price:number;
    rating:string;
    isDigital:boolean;
}

// test code
// let myMovie = new Movie();
// myMovie.title = "Toy Story";
// myMovie.rating = "G";


window.onload = function() {
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addProduct;
}

function addProduct() {
    if (isAllDataValid()){
        let movie = getProduct();
        displayProduct(movie);
    }
}

/**
 * Retrieves movie data from form & returns as object:Movie
 */
function getProduct():Movie{
    // CREATE MOVIE
    let movie1 = new Movie();
    // POPULATE W FORM DATA
    movie1.title = (<HTMLInputElement>document.getElementById("title")).value;
    movie1.price = parseFloat((<HTMLInputElement>document.getElementById("price")).value);
    movie1.rating = (<HTMLInputElement>document.getElementById("rating")).value;
    movie1.isDigital = (<HTMLInputElement>document.getElementById("digital")).checked;
    // RETURN MOVIE
    return movie1;
}

function displayProduct(product:Movie):void{
    // DISPLAY MOVIE BELOW WEB FORM
    let displayDiv = document.getElementById("display");

    // Create <h2> with Movie.title
    let productHeading = document.createElement("h2");
    productHeading.innerText = product.title;
    // Create <p> with Movie details
    let productInfo = document.createElement("p");
    let formatInfo = "";
    if(product.isDigital){
        formatInfo = " and it is digital.";
    } else{
        formatInfo = " and it is not digital.";
    }
    productInfo.innerText = `${product.title} has a rating of ${product.rating}, it costs $${product.price.toFixed(2)},${formatInfo}.`;
    // Add <h2> to <div id="display">
    displayDiv.appendChild(productHeading);
    // Add <p> of Movie info
    displayDiv.appendChild(productInfo); 
}

// ADD VALIDATION CODE
function isAllDataValid() {
    return true;
}


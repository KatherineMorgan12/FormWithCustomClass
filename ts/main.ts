class Movie{
    title:string;
    price:number;
    rating:string;
    isDigital:boolean;
    releaseDate:string;
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
    movie1.releaseDate = (<HTMLInputElement>document.getElementById("releaseDate")).value;
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
        formatInfo = "it is digital";
    } else{
        formatInfo = "it is not digital";
    }
    productInfo.innerText = `${product.title}, which was released ${product.releaseDate} has a rating of ${product.rating}, it costs $${product.price.toFixed(2)}, and ${formatInfo}.`;
    // Add <h2> to <div id="display">
    displayDiv.appendChild(productHeading);
    // Add <p> of Movie info
    displayDiv.appendChild(productInfo); 
}

// ADD VALIDATION CODE
function isAllDataValid() {
    let title = (<HTMLInputElement>document.getElementById("title")).value;
    let price = parseFloat((<HTMLInputElement>document.getElementById("price")).value);
    let rating = (<HTMLInputElement>document.getElementById("rating")).value;
    let releaseDate = (<HTMLInputElement>document.getElementById("releaseDate")).value;

    let displayError = document.getElementById("validation-summary");
    // titleValid
    if (title.trim() == ""){
        displayError.innerText = "Please enter a name of a movie.";
        return false;
    }
    
    // priceValid
    if ((isNaN(price)) || (price < 0)){
        displayError.innerText = "Please enter a positive price.";
        return false;
    }

    // ratingValid
    if (rating == "Select"){
        displayError.innerText = "Please select an actual rating from the drop down menu.";
        return false;
    }
    // dateValid
    if (releaseDate == ""){
        displayError.innerText = "Please choose a date on the calendar."
        return false;
    }
    return true;
}


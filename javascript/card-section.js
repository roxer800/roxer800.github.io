import {card} from '../javascript/cart.js';

let cardHtml = ''

console.log(card)

card.forEach((cardProduct)=>{
    cardHtml += `
    <div class="card mb-3" >
    <div class="row g-0">
        <div class="col-md-4 col-sm-3 col-3">
            <img src="${cardProduct.image}" class=" img-fluid img--fluid" alt="...">
        </div>
        <div class=" col-md-6 col-sm-7  col-7 card--body">
            <div class=" card-body ">
            <h5 class="card-title card--title">${cardProduct.name}</h5>
            <div class="location">
                <p class="location--place">${cardProduct.location} Show on map</p>
                <p> ${cardProduct.distance} km from center</p>
            </div>
            <p class="speciality"><i class="fa-solid fa-umbrella fa-xs"></i> ${cardProduct.specification} </p>
            <p class="card-text card--text">${cardProduct.description}</p>
            </div>
        </div>
        <div class="col-md-2 col-sm-2 col-2 ">
            <div class="card--right--side">
                <div>
                    <p class="rating--word">${cardProduct.rating}</p>
                    <p class="review">${cardProduct.review} reviews</p>
                </div>
                <div class="rating--number"><p>${cardProduct.ratingNumber}</p></div>
            </div>
            <button class="btn btn-primary prices--button ">Show prices</button>
        </div>
        </div>
    </div>
    `
})

document.querySelector('.card--section').innerHTML = cardHtml
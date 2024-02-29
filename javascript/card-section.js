import {card} from '../javascript/cart.js';

let cardHtml = ''




card.forEach((cardProduct)=>{
    cardHtml += `
    <div class="card mb-3" >
    <div class="row g-0">
        <div class="col-md-4 col-sm-4 col-6 ">
            <img src="${cardProduct.image}" class=" img-fluid img--fluid" alt="...">
        </div>
        <div class="heart--wrapper">${cardProduct.heartIcon}</div>
        <div class=" col-md-6 col-sm-6  col-6 card--body">
            <div class=" card-body  card--mobile--body ">
            <h5 class="card-title card--title--mobile">${cardProduct.name}</h5>
            <div class="card--rating--mobile">
            <div class="rating--number--mobile"><p>${cardProduct.ratingNumber}</p></div>
                    <p class="rating--word--mobile">${cardProduct.rating}</p>
                    <span class="dot"></span>
                    <p class="review--mobile">${cardProduct.review} reviews</p>
            </div>
            <div class="location--mobile">
                <p class="location--place--mobile">${cardProduct.location} </p>
                <span class="dot2"></span>
                <p> ${cardProduct.distance} km from center</p>
            </div>
            <p class="speciality--mobile"><i class="fa-solid fa-umbrella fa-xs"></i> ${cardProduct.specification} </p>
            </div>
            <div class=" card-body card---body ">
            <h5 class="card-title card--title">${cardProduct.name}</h5>
            <div class="location">
                <p class="location--place">${cardProduct.location} Show on map</p>
                <p> ${cardProduct.distance} km from center</p>
            </div>
            <p class="speciality"><i class="fa-solid fa-umbrella fa-xs"></i> ${cardProduct.specification} </p>
            <p class="card-text card--text">${cardProduct.description}</p>
            </div>
        </div>
        <div class="col-md-2 col-sm-2 col-2 card--right--side--wrapper ">
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






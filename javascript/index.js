import {navbarFunction} from '../javascript/navbar.js'
import {firstSection,secondSection,thirdSection,fourthSection,fifthSection,sixthSection,seventhSection,eighthSection,thirdSectionAddition} from '../javascript/radioButtons.js'

navbarFunction()

let firstSectionHtml = ''
let secondSectionHtml = ''
let thirdSectionHtml = ''
let fourthSectionHtml = ''
let fifthSectionHtml = ''
let sixthSectionHtml = ''
let seventhSectionHtml = ''
let eighthSectionHtml = ''


firstSection.forEach((firstSectionProduct) => {
    firstSectionHtml +=`
    <div class="form-check d-flex justify-content-between font--size ">
    <div>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        ${firstSectionProduct.name}
        </label>
    </div>
    <label for="flexCheckDefault">&nbsp; &nbsp; &nbsp; ${firstSectionProduct.count}</label>
    </div>
    `
})

document.querySelector('.first--section').innerHTML = firstSectionHtml


secondSection.forEach((secondSectionProduct) => {
    secondSectionHtml +=`
    <div class="form-check d-flex justify-content-between font--size ">
    <div>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        ${secondSectionProduct.name}
        </label>
    </div>
    <label for="flexCheckDefault">&nbsp; &nbsp; &nbsp; ${secondSectionProduct.count}</label>
    </div>
    `
})

document.querySelector('.second--section').innerHTML = secondSectionHtml

thirdSection.forEach((thirdSectionProduct) => {
    thirdSectionHtml +=`
    <div class="form-check d-flex justify-content-between font--size ">
    <div>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        ${thirdSectionProduct.name}
        </label>
    </div>
    <label for="flexCheckDefault">&nbsp; &nbsp; &nbsp; ${thirdSectionProduct.count}</label>
    </div>
    `
})



document.querySelector('.third--section').innerHTML = thirdSectionHtml
    

fourthSection.forEach((fourthSectionProduct) => {
    fourthSectionHtml +=`
    <div class="form-check d-flex justify-content-between font--size ">
    <div>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        ${fourthSectionProduct.name}
        </label>
    </div>
    <label for="flexCheckDefault">&nbsp; &nbsp; &nbsp; ${fourthSectionProduct.count}</label>
    </div>
    `
})

document.querySelector('.fourth--section').innerHTML = fourthSectionHtml


fifthSection.forEach((fifthSectionProduct) => {
    fifthSectionHtml +=`
    <div class="form-check d-flex justify-content-between font--size ">
    <div>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        ${fifthSectionProduct.name}
        </label>
    </div>
    <label for="flexCheckDefault">&nbsp; &nbsp; &nbsp; ${fifthSectionProduct.count}</label>
    </div>
    `
})

document.querySelector('.fifth--section').innerHTML = fifthSectionHtml

sixthSection.forEach((sixthSectionProduct) => {
    sixthSectionHtml +=`
    <div class="form-check d-flex justify-content-between font--size ">
    <div>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        ${sixthSectionProduct.name}
        </label>
    </div>
    <label for="flexCheckDefault">&nbsp; &nbsp; &nbsp; ${sixthSectionProduct.count}</label>
    </div>
    `
})

document.querySelector('.sixth--section').innerHTML = sixthSectionHtml

seventhSection.forEach((seventhSectionProduct) => {
    seventhSectionHtml +=`
    <div class="form-check d-flex justify-content-between font--size ">
    <div>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        ${seventhSectionProduct.name}
        </label>
    </div>
    <label for="flexCheckDefault">&nbsp; &nbsp; &nbsp; ${seventhSectionProduct.count}</label>
    </div>
    `
})

document.querySelector('.seventh--section').innerHTML = seventhSectionHtml

eighthSection.forEach((eighthSectionProduct) => {
    eighthSectionHtml +=`
    <div class="form-check d-flex justify-content-between font--size ">
    <div>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        ${eighthSectionProduct.name}
        </label>
    </div>
    <label for="flexCheckDefault">&nbsp; &nbsp; &nbsp; ${eighthSectionProduct.count}</label>
    </div>
    `
})

document.querySelector('.eighth--section').innerHTML = eighthSectionHtml



const moreButton = document.querySelector('.more--button')
const arrow = document.getElementById('options--arrow')
let hasBeenCalled = false;

moreButton.addEventListener('click', () => {
    if (!hasBeenCalled) {
        showElement()
        arrow.classList.replace('fa-arrow-down', 'fa-arrow-up')
        hasBeenCalled = true;
        } else {
            removeElement()
            arrow.classList.replace('fa-arrow-up','fa-arrow-down')
            addElement()
            hasBeenCalled = false;
        }
    
})

let secondSectionHtmlAddition = ''

function showElement(){
        thirdSectionAddition.forEach((thirdSectionAdditonProduct)=>{

            secondSectionHtmlAddition +=`
            <div class="form-check d-flex justify-content-between font--size ">
            <div>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                ${thirdSectionAdditonProduct.name}
                </label>
            </div>
            <label for="flexCheckDefault">&nbsp; &nbsp; &nbsp; ${thirdSectionAdditonProduct.count}</label>
            </div>
            `
        })
    
    document.querySelector('.addition').innerHTML = secondSectionHtmlAddition

    secondSectionHtmlAddition=''
    
    }
    
function removeElement(){
    const elementToRemove = document.querySelector('.addition')
    elementToRemove.remove()
}
function addElement(){
const newDiv = document.createElement('div');
newDiv.className = 'addition';
newDiv.id = 'addition2';
document.querySelector(".addition--parent").appendChild(newDiv)
}
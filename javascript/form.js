const dropdownButton= document.querySelector('.form--dropdown')
const dropdownDiv= document.querySelector('.dropdown-menu-form')
const adultsMinus= document.querySelector('.adults--minus')
const adultsPlus= document.querySelector('.adults--plus')
const childrenMinus= document.querySelector('.children--minus')
const childrenPlus= document.querySelector('.children--plus')
const roomsMinus= document.querySelector('.rooms--minus')
const roomsPlus = document.querySelector('.rooms--plus')
const formDropdown = document.querySelector('.form--dropdown')
const test = document.querySelector('.adults--count')



let dropdownId = false
let adultsCount = 0
let childrenCount = 0
let roomsCount = 0

dropdownButton.addEventListener('click', () => {
    dropdownId = !dropdownId
    dropdownDiv.style.display = dropdownId? 'block' : 'none'
})


adultsPlus.addEventListener('click', () => {
    adultsCount++
    if(adultsCount > 0) {
        adultsMinus.style.color = '#006ce4'
        adultsMinus.style.cursor = 'pointer'
    }
    document.querySelector('.adults--count').innerHTML = adultsCount
    formDropdown.innerHTML = `${adultsCount} adults &#x2022 ${childrenCount} children &#x2022 ${roomsCount} room`
})
childrenPlus.addEventListener('click', () => {
    childrenCount++
    if(childrenCount >= 1) {
        childrenMinus.style.color = '#006ce4'
        childrenMinus.style.cursor = 'pointer'
    }
    document.querySelector('.children--count').innerHTML = childrenCount
    formDropdown.innerHTML = `${adultsCount} adults &#x2022 ${childrenCount} children &#x2022 ${roomsCount} room`
})
roomsPlus.addEventListener('click', () => {
    roomsCount++
    if(roomsCount > 0) {
        roomsMinus.style.color = '#006ce4'
        roomsMinus.style.cursor = 'pointer'
    }
    document.querySelector('.rooms--count').innerHTML = roomsCount
    formDropdown.innerHTML = `${adultsCount} adults &#x2022 ${childrenCount} children &#x2022 ${roomsCount} room`
})


adultsMinus.addEventListener('click', () => {
    if(adultsCount > 0) {
        adultsCount-- 
    } else if(adultsCount < 1) {
        adultsMinus.style.color = 'grey'
        adultsMinus.style.cursor = 'no-drop'
        adultsCount = 0
    }
    document.querySelector('.adults--count').innerHTML = adultsCount
    formDropdown.innerHTML = `${adultsCount} adults &#x2022 ${childrenCount} children &#x2022 ${roomsCount} room`
})
childrenMinus.addEventListener('click', () => {

    if(childrenCount > 0) {
        childrenCount-- 
    } else  {
        childrenMinus.style.color = 'grey'
        childrenMinus.style.cursor = 'no-drop'
        console.log(childrenCount)
    }
    document.querySelector('.children--count').innerHTML = childrenCount
    formDropdown.innerHTML = `${adultsCount} adults &#x2022 ${childrenCount} children &#x2022 ${roomsCount} room`
    
})
roomsMinus.addEventListener('click', () => {
    if(roomsCount > 0) {
        roomsCount-- 
    } else if(roomsCount < 1) {
        roomsMinus.style.color = 'grey'
        roomsMinus.style.cursor = 'no-drop'
        roomsCount = 0
    }
    document.querySelector('.rooms--count').innerHTML = roomsCount
    formDropdown.innerHTML = `${adultsCount} adults &#x2022 ${childrenCount} children &#x2022 ${roomsCount} room`
})





const firstCheckQuestion = document.querySelector('.first--check--question')
const firstCheckQuestionContent = document.querySelector('.first--check--question--content')
const secondCheckQuestion = document.querySelector('.second--check--question')
const secondCheckQuestionContent = document.querySelector('.second--check--question--content')


    firstCheckQuestion.addEventListener('mouseover', () => {
        firstCheckQuestionContent.style.display = 'block'
    })
    firstCheckQuestion.addEventListener('mouseout', () => {
        firstCheckQuestionContent.style.display = 'none'
    })
    
    secondCheckQuestion.addEventListener('mouseover', () => {
        secondCheckQuestionContent.style.display = 'block'
    })
    secondCheckQuestion.addEventListener('mouseout', () => {
        secondCheckQuestionContent.style.display = 'none'
    })


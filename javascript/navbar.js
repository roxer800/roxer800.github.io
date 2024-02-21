const currency = document.querySelector('.currency')
const flag = document.querySelector('.flag')
const currencySelector = document.querySelector('.currency--selector')
const languageSelector = document.querySelector('.language--selector')
const userIconButton = document.querySelector('.user--icon--button')
const signInSelector = document.querySelector('.sign--in--selector')



export function navbarFunction() {
    currency.addEventListener('mouseover', () => {
        currencySelector.style.display = 'block'
    })
    currency.addEventListener('mouseout', () => {
        currencySelector.style.display = 'none'
    })
    flag.addEventListener('mouseover', () => {
        languageSelector.style.display = 'block'
    })
    flag.addEventListener('mouseout', () => {
        languageSelector.style.display = 'none'
    })
    userIconButton.addEventListener('mouseover', () => {
        signInSelector.style.display = 'block'
    })
    userIconButton.addEventListener('mouseout', () => {
        signInSelector.style.display = 'none'
    })
}
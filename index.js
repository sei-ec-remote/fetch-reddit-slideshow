document.addEventListener('DOMContentLoaded', () => {

let imageContainer = document.querySelector('image-container')

const button = document.querySelector('#button')
let stopBtn = document.querySelector('#stop-btn')

button.addEventListener("click", (e) => {
    e.preventDefault()
})
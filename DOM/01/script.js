'use strict';

const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')

// console.log(modal);
// console.log(btnOpenModal);

const openModal = function(){
    // console.log(`Button Clicked`);
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}
const closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
} 

for(let i = 0; i < btnOpenModal.length; i++){
    // console.log(btnOpenModal[i].textContent)
    btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

// document.addEventListener('keypress', function(event) {
//     console.log(`A key was pressed.`)
//     console.log(event)
//     console.log(event.key === 'Esc')

// })
document.addEventListener('keydown', function(event) {
    console.log(event.key)
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal(); 
    };
});
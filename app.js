
const form = document.querySelector('.section__form')
const puntuation = document.querySelectorAll('.section__li')
//Events

// form.addEventListener('submit', submitNumber)
//functions
console.log(puntuation);
puntuation.forEach((n)=>{
    n.addEventListener('click', (e)=>{
        console.log(e.target.textContent);
    })
})

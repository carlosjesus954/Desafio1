
const form = document.querySelector('.section__form')
const puntuation = document.querySelectorAll('.section__li')
const number_change = document.getElementById('number-change')
const primarySection = document.querySelector('.primarySection')
const secundarySection = document.querySelector('.secundarySection')
//Events
form.addEventListener('submit', showCard)

//functions
console.log(puntuation);
puntuation.forEach((n)=>{
    n.addEventListener('click', (e)=>{
        number_change.append(e.target.textContent);
    })
})


function showCard (){
    primarySection.classList.add('hidden')
    secundarySection.classList.toggle('hidden')
}
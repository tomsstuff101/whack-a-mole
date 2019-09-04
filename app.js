const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

const test = document.querySelector('#test')
const testJump = document.querySelector('#testJump')


const mrBump = document.getElementsByClassName('mrBump')



mrBump[0].addEventListener('click',()=>{
    mrBump[0].toggle("jump")
})


// test.addEventListener('click',()=>{
//     console.log('test__')
//     testJump.classList.toggle("jump")

// })
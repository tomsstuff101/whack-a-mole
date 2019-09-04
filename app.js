const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

const test = document.querySelector('#test')
const testJump = document.querySelector('#testJump')


const mrBump = document.querySelectorAll('.mrbump')



mrBumpStuff = {
    randBump(){
        let r = Math.floor((Math.random()* 6))
        console.log(`r --> ${r}`)
        return r},
    jumpBump(i){
        mrBump[i].classList.add("jump")
        mrBump[i].addEventListener("animationend", ()=>{
            mrBump[i].classList.remove("jump")
        })

    }

}
    

const mainGame = () => { 

    /**  */

    /**  keep jumping **/
    setInterval(()=>{
        mrBumpStuff.jumpBump(mrBumpStuff.randBump())
    }, 1000);
}


/*************  MAIN *******/
mainGame()









// test.addEventListener('click',()=>{
//     console.log('test__')
//     mrBumpStuff.jumpBump(mrBumpStuff.randBump())

// })

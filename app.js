const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

const startGame = document.querySelector('#startGame')

// const test = document.querySelector('#test')
// const testJump = document.querySelector('#testJump')


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


counterStuff = {
    counter:0,
    incCount(){
        this.counter = this.counter + 1
        console.log(`score count is -->  ${this.counter}`)
    },
    setCount(){ this.counter = 0},
    displayCount(){
        scoreBoard.textContent = this.counter
    }
}


    

startGame.addEventListener('click', ()=>{
    console.log('****game started *****')
    startGame.style.backgroundColor = "orange"

})




const mainGame = () => { 

    

    
    // inititialse


    /** Listen to MrBump being hit **/
    for(i=0; i<mrBump.length;i++){
        console.log(`mrBump[${i}] add hit listner`)
        mrBump[i].addEventListener("click", ()=>{
            console.log('**** HIT ****')
            counterStuff.incCount()
            counterStuff.displayCount()
        })
    }
    

    /**  keep jumping **/
    setInterval(()=>{
        mrBumpStuff.jumpBump(mrBumpStuff.randBump())
    }, 4000);
}


/*************  MAIN *******/
mainGame()









// test.addEventListener('click',()=>{
//     console.log('test__')
//     mrBumpStuff.jumpBump(mrBumpStuff.randBump())

// })

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

const startGame = document.querySelector('#startGame')


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




const playGame = () => { 
    
   /** Listen for Mr Bump being hit */
    for(i=0; i<mrBump.length;i++){
        console.log(`mrBump[${i}] add hit listner`)
        mrBump[i].addEventListener("click", ()=>{
            counterStuff.incCount()
            counterStuff.displayCount()
        })
    }
    

    /**  keep jumping **/
    setInterval(()=>{
        mrBumpStuff.jumpBump(mrBumpStuff.randBump())
    }, 2000);
}



/**  Start game when start is clicked */
startGame.addEventListener('click', ()=>{
    console.log('****game started *****')
    startGame.style.backgroundColor = "red"
    playGame()
})

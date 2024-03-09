const rockElement = document.querySelector("#rock")
const paperElement = document.querySelector("#paper")
const scissorElement = document.querySelector("#scissor")

const playerSelectElement = document.querySelector("#player-select")
const movesElement = document.querySelector("#moves")

const playerMoveElement = document.querySelector("#playerMove")
const cpuMoveElement = document.querySelector("#cpuMove")

const placarElement = document.querySelector("#placar")
const placarPlayerElement = document.querySelector("#player_placar")
const placarCpuElement = document.querySelector("#cpu_placar")

const resetElement = document.querySelector("#reset")

const playStyles = [
{
    type: "rock",
    losesTo: "paper",
    img: "./assets/rock.png"
},
{
    type: "paper", 
    losesTo: "scissor",
    img: "./assets/paper.png"
},
{
    type: "scissor",
    losesTo: "rock",
    img: "./assets/scissor.png"
}
]

let playerWins = 0;
let cpuWins = 0;

function play(jogada){
    const playerMove = playStyles.find((style) => style.type == jogada)  
    const randomMove = playStyles[parseInt(Math.random()*(playStyles.length-1))]
    
    playerSelectElement.classList.add("hidden")

    playerMoveElement.children[0].src = playerMove.img
    playerMoveElement.children[1].innerText = playerMove.type

    cpuMoveElement.children[0].src = randomMove.img
    cpuMoveElement.children[1].innerText = randomMove.type
    movesElement.classList.remove("hidden")

    setTimeout(() => {
        if(isWin(playerMove, randomMove)){
            playerWins++;
            playerMoveElement.classList.add("win")    
            cpuMoveElement.classList.add("lose")
        }else if(isDraw(playerMove, randomMove)){
            playerMoveElement.classList.add("draw")
            cpuMoveElement.classList.add("draw")
        }else if(isLose(playerMove, randomMove)){
            cpuWins++;
            playerMoveElement.classList.add("lose")    
            cpuMoveElement.classList.add("win")   
        }
    }, 1000)

    setTimeout(() => {
        resetElement.classList.remove("hidden")
        placarPlayerElement.innerText = playerWins
        placarCpuElement.innerText = cpuWins
        placarElement.classList.add("placar")
        placarElement.classList.remove("hidden")
    }, 2000)

}

const isWin = (playerMove, cpuMove) => playerMove.type === cpuMove.losesTo
const isDraw = (playerMove, cpuMove) => playerMove.type === cpuMove.type
const isLose = (playerMove, cpuMove) => playerMove.losesTo === cpuMove.type

function reset(){
    playerSelectElement.classList.remove("hidden")
    movesElement.classList.add("hidden")
    playerMoveElement.classList.remove("win")    
    cpuMoveElement.classList.remove("win")   
    playerMoveElement.classList.remove("draw")
    cpuMoveElement.classList.remove("draw")
    cpuMoveElement.classList.remove("lose")
    playerMoveElement.classList.remove("lose")    
    placarElement.classList.remove("placar")
    placarElement.classList.add("hidden")
    resetElement.classList.add("hidden")
}

rockElement.addEventListener("click", (e) => {
    play("rock")
})

paperElement.addEventListener("click", (e) => {
    play("paper")
})

scissorElement.addEventListener("click", (e) => {
    play("scissor")
})

resetElement.addEventListener('click', (e) => {
    reset()
})
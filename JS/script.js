const rockElement = document.querySelector("#rock")
const paperElement = document.querySelector("#paper")
const scissorElement = document.querySelector("#scissor")

const playerSelectElement = document.querySelector("#player-select")
const movesElement = document.querySelector("#moves")

const playerMoveElement = document.querySelector("#playerMove")
const cpuMoveElement = document.querySelector("#cpuMove")

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

function play(jogada){
    const playerMove = playStyles.find((style) => style.type == jogada)  
    const randomMove = playStyles[Math.round(Math.random()*playStyles.length)]

    playerSelectElement.classList.add("hidden")

    playerMoveElement.children[0].src = playerMove.img
    playerMoveElement.children[1].innerText = playerMove.type

    cpuMoveElement.children[0].src = randomMove.img
    cpuMoveElement.children[1].innerText = randomMove.type
    movesElement.classList.remove("hidden")

    setTimeout(() => {
        if(isWin(playerMove, randomMove)){
            playerMoveElement.classList.add("win")    
            cpuMoveElement.classList.add("lose")
        }else if(isDraw(playerMove, randomMove)){
            playerMoveElement.classList.add("draw")
            cpuMoveElement.classList.add("draw")
        }else if(isLose(playerMove, randomMove)){
            playerMoveElement.classList.add("lose")    
            cpuMoveElement.classList.add("win")   
        }
    }, 1000)

}

const isWin = (playerMove, cpuMove) => playerMove.type === cpuMove.losesTo
const isDraw = (playerMove, cpuMove) => playerMove.type === cpuMove.type
const isLose = (playerMove, cpuMove) => playerMove.losesTo === cpuMove.type

rockElement.addEventListener("click", (e) => {
    play("rock")
})

paperElement.addEventListener("click", (e) => {
    play("paper")
})

scissorElement.addEventListener("click", (e) => {
    play("scissor")
})


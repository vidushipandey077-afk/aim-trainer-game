const start=document.getElementById("startBtn")
const score=document.getElementById("score")
const timer=document.getElementById("time")
const target=document.getElementById("target");
const area=document.getElementById("gameArea")
const instruction=document.getElementById("instructions")
const gameOver=document.getElementById("gameOver");
const finalScore=document.getElementById("finalScore")
const resetBtn=document.getElementById("resetBtn");
const highScore=document.getElementById("highScore")
const targetType=document.getElementById("targetType")

let moveInterval;
let timeInterval;
let game=false
let high=0;

function startGame(){
    start.disabled=true;
    game=true
    target.style.left = "0px";
    target.style.top = "0px";

    score.textContent=0;
    timer.textContent=30
    instruction.style.display="none"
    target.style.display="block";
    gameOver.style.display="none"
    finalScore.textContent=""

    clearInterval(moveInterval);
    clearInterval(timeInterval)

    moveInterval=setInterval(changePos,400);
    timeInterval=setInterval(decreaseTimer,1000)
}

target.addEventListener('click',scoreInc)
// targetType.addEventListener('change',changeTarget)

// function changeTarget{
//     target.textContent=targetType.value;
// }

function scoreInc(){
    if(!game){
        return;
    }
    score.textContent=Number(score.textContent)+1;
}

function decreaseTimer(){
    if(!game){
        return
    }
    let curr=Number(timer.textContent)
    if(curr>0){
        timer.textContent=Number(timer.textContent)-1;
    }
    else{
        stopGame()
    }
}

function stopGame(){

    game=false
    start.disabled=false;
    clearInterval(moveInterval);
    clearInterval(timeInterval)
    let curr=Number(score.textContent);

    if(curr>high){
        high=curr;
    }

    target.style.display="none"
    
    finalScore.textContent=score.textContent;
    highScore.textContent=high;
    gameOver.style.display="flex"

}

function changePos(){
    const x=Math.floor(Math.random()*650);
    const y=Math.floor(Math.random()*400)
    target.style.left=x+"px";
    target.style.top=y+"px";
}
start.addEventListener('click',startGame)
resetBtn.addEventListener('click',startGame)
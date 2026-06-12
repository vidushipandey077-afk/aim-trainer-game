const start=document.getElementById("startBtn")
const score=document.getElementById("score")
const timer=document.getElementById("time")
const target=document.getElementById("target");
const area=document.getElementById("gameArea")


let moveInterval;
let timeInterval;
let game=false

function startGame(){
    game=true
    target.style.left = "0px";
    target.style.top = "0px";

    score.textContent=0;
    timer.textContent=30
    target.style.display="block";

    clearInterval(moveInterval);
    clearInterval(timeInterval)

    moveInterval=setInterval(changePos,1000);
    timeInterval=setInterval(decreaseTimer,1000)
}

target.addEventListener('click',scoreInc)

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
    clearInterval(moveInterval);
    clearInterval(timeInterval)

    target.style.display="none"
    
    alert("Game is Over!! You Score is: "+score.textContent)

}

function changePos(){
    const x=Math.floor(Math.random()*650);
    const y=Math.floor(Math.random()*400)
    target.style.left=x+"px";
    target.style.top=y+"px";
}
start.addEventListener('click',startGame)
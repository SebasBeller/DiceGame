const diceOne=document.querySelector('.img1');
const diceTwo=document.querySelector('.img2');
const btnOpenModal=document.getElementById('throw');
const btnCloseModal=document.getElementById('close');
const btnAccept=document.getElementById('accept');
function throwDice(){
    var rand=Math.floor(Math.random()*5+1);
    return rand;
}
function setImageDado(dado,rand){
    let imagen='./assets/images/dice';
    dado.src=`${imagen}${rand}.png`;
}
function setWinner(rand1,rand2){
    let h1=document.getElementById('result');
    if(rand1===rand2){
        h1.textContent='Draw!';
    }else if(rand1>rand2){
        h1.textContent='Player 1 Wins 🚩!';
    }else{
        h1.textContent='Player 2 Wins 🚩!';
    }
}
function startGame(){
    var rand1=throwDice();
    var rand2=throwDice();
    setImageDado(diceOne,rand1);
    setImageDado(diceTwo,rand2);
    setWinner(rand1,rand2);
}
btnCloseModal.onclick=()=>{
    let modal=document.querySelector('.modal');
    modal.style.display='none';
}
btnOpenModal.onclick=()=>{
    startGame();  
    setTimeout(() => {
        let modal=document.querySelector('.modal');
        modal.style.display='flex';
    },800); 
}


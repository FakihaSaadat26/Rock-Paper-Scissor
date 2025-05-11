let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const CompScorePara = document.querySelector("#comp");


const genCompChoice =() =>{
    const options=["rock" , "paper" , "scissor"];
  const randIndex= Math.floor( Math.random()*3);
  return options[randIndex];
};


const drawGame = () =>{
    msg.innerHTML=("It's a draw! Play again.");
    msg.style.backgroundColor = "#081b31";
    msg.style.color = "white";
}


const showWinner=(userWin,userChoice,compChoice) =>{
if (userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=(`You win! your ${userChoice} beats ${compChoice}`);
    msg.style.backgroundColor = "green";
}
else{
    compScore++;
    CompScorePara.innerText=compScore;
    msg.innerText=(`You lose! ${compChoice} beats your ${userChoice}`);
    msg.style.backgroundColor = "red";

}
}
const playGame = (userChoice) =>{
console.log("User choice is ",userChoice);
//generate comp choice
const compChoice = genCompChoice();
console.log("User comp is ",compChoice);

if(userChoice===compChoice){
    //draw game
    drawGame();
}
else{
    let userWin = true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper" ? false:true;
    }
    else if (userChoice==="paper"){
    userWin=compChoice==="scissors" ? false:true;
}
else{
    userWin=compChoice==="rock" ? false:true;
}
showWinner(userWin,userChoice,compChoice);
}
}




choices.forEach((choice) => {
choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
});
});
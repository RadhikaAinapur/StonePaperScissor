let userScore=0;
let compScore=0;

//selecting all images tags
const choices=document.querySelectorAll(".choice");

const msgPara=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

//the values from all the choices are accessed one by one by usig for each loop
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        //whenever we click on any of the images we this function/event is called i.e executed
        //getAttribute value return the id or class anme of the attribute
        //which retruns the id of the image selected by the user ,which helps to known the choice made by the user
        const userChoice=choice.getAttribute("id");
        //console.log("Images was clicked "+userChoice)
        //here we are also gettting the user choice
        console.log("User choice is: "+userChoice);
        //now to get computer choice 
        const compChoice=choiceByComputer();
        console.log("Computer choice is :"+compChoice)
        //now we have got both the selections from user and also from computer
        
        if(userChoice==compChoice){//if both selections are same
           // console.log("Match is draw");
           draw();
        }
        else{
            let userWin=true;
            if(userChoice=="stone"){
                //computer might have made either scissor or paper bcz if the computer had made rock then match was draw
                //as it would have entered if block
                if(compChoice=="scissor"){
                       userWin=true;
                }
                else{//compChoice="paper"
                    userWin=false;
                }
            }
            else if(userChoice=="paper"){
                //computer might have made either scissor or stone bcz if the computer had made paper then match was draw
                //as it would have entered if block
                if(compChoice=="scissor"){
                    userWin=false;
             }
             else{//compChoice="stone"
                 userWin=true;
             }
            }
            else{//userChoice="scissor"
                //computer might have made either paper or stone bcz if the computer had made scissor then match was draw
                //as it would have entered if block
                if(compChoice=="paper"){
                    userWin=true;
             }
             else{//compChoice="stone"
                 userWin=false;
             }
            }
            showWinner(userWin,userChoice,compChoice);
        }
       
    })
})

function choiceByComputer(){
    const options=["stone","paper","scissor"];
    //the computer have to make any of the choices from the above array,we cannot generate random strings so we use
   // Math.random()->it generates between 0 - 1 but we have 3 choices so w ewant values from 0-2,so we multiply with 3
   //also we have to round the number to its lowest values to match with thw array index values
   //upto what range we want the values, we must multiply the Math.random() with plus that number and round to its lowest nearer value
   const compChoice=Math.floor(Math.random()*3);
   return options[compChoice];//return the random values from array
}
let draw=()=>{
    console.log("Match was draw");
    msgPara.style.background="black"
    msgPara.innerText="Game was draw.Play Again";
}

let showWinner=(userWin,userChoice,compChoice)=>{
   // let highestScore=0;
    if(userWin){
        //console.log("You Win!!!")
        userScore++;
        // if(highestScore<userScore){
        //     highestScore=userScore;
        //     document.getElementById("highpara").innerText=highestScore;
        // }
        
        userScorePara.innerText=userScore;
        msgPara.style.background="green";
        msgPara.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`;
        replace(userScore);
        
    }
    else{
       // console.log("You loose")
       compScore++;
       compScorePara.innerText=compScore
       msgPara.style.background="#D0321D";
        msgPara.innerText=`You Loose ${compChoice} beats your ${userChoice}`;
    }
}
let a=document.getElementById("score");
let highest=0;
function replace(x){
     if(highest<x){
        highest=x;
        a.innerText=highest
     }
}


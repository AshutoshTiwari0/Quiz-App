let quesNo=0;
// import {getData} from './topic-selection.js';

let nextbutton=document.getElementById("next");


let quesNumber=document.querySelector(".number");

let question=document.querySelector(".question");
//on clicking next button load same page but change the content 
nextbutton.addEventListener('click', ()=>{

//change the question number
quesNumber.textContent=parseInt(quesNumber.textContent,10)+1;
});


//getting data stored from local storage
const data = JSON.parse(localStorage.getItem("data"));
console.log(data.results);

//getting the questions
let total_questions=10;
for(let i=0;i<total_questions;i++)
{
console.log(`question number ${i+1} ${data.results[i].question}`);
console.log(`options are ${data.results[i].correct_answer}, ${data.results[i].incorrect_answers} `);
}

let ques=document.querySelector('.question')
let next=document.querySelector('#next');
//rendering the question 1
ques.innerHTML=data.results[0].question;

next.addEventListener('click', ()=>{
ques.innerHTML=data.results[quesNo].question; //render quesNo=1
quesNo++; //increment it after every click of next question

//allow only 10 clicks
if(quesNo==total_questions)
{
    alert("quiz ended");
    // quesNumber.textContent=10; //after last click render it was turning to 11 so forcing it to 10
    document.documentElement.innerHTML = "quiz ended";
}
}
);


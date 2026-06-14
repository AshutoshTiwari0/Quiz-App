// import {getData} from './topic-selection.js';
let nextbutton=document.getElementById("next");


let quesNumber=document.querySelector(".number");

let question=document.querySelector(".question");
//on clicking next button load same page but change the content 
nextbutton.addEventListener('click', ()=>{

//change the question number
quesNumber.textContent=parseInt(quesNumber.textContent,10)+1;
});

let data = JSON.parse(localStorage.getItem("data"));
// console.log(data);

console.log(data['results']);

//getting questions 
// console.log(data.results[4].question);

//getting options 
// const options=data.results[4].incorrect_answers + data.results[4].correct_answer;

// //trim everything from options 
// const finaloptions = options.replace(/[^a-zA-Z0-9]/g, "");

// console.log(options);


const start_btn = document.querySelector(".start_btn button");
const rule_box = document.querySelector(".rule_box");
const exit_btn = rule_box.querySelector(".buttons .quit");
const continue_btn = rule_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

start_btn.onclick = ()=>{
  rule_box.classList.add("activeInfo"); 
}

exit_btn.onclick = ()=>{
  rule_box.classList.remove("activeInfo"); 
}

continue_btn.onclick = ()=>{
  rule_box.classList.remove("activeInfo"); 
  quiz_box.classList.add("activeQuiz"); 
  showQuetions(0);
  queCounter(1);
  startTimer(5);
  startTimerLine(0);
}

let timeValue =  5;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
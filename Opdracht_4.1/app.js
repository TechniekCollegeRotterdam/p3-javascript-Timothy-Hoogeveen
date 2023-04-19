let anwser = document.getElementById("anwser");
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
function multiply(){
  if(num1.value > 0 && num2.value > 0) {
    let ans = num1.value * num2.value;

    anwser.innerText = ans
  }   else {
    anwser.innerText = "getal is te laag";
  }

};

function devide(){
    if(num1.value > 0 && num2.value > 0) {
        let ans = num1.value / num2.value;
    
        anwser.innerText = ans
      }   else {
        anwser.innerText = "getal is te laag";
      }
    

};

function add(){
    if(num1.value > 0 && num2.value > 0) {
        let ans = num1.value + num2.value;
    
        anwser.innerText = ans
      }   else {
        anwser.innerText = "getal is te laag";
      }
    
};

function minus(){
    if(num1.value > 0 && num2.value > 0) {
        let ans = num1.value - num2.value;
    
        anwser.innerText = ans
      }   else {
        anwser.innerText = "getal is te laag";
      }
    
};

